from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Union
from openai import OpenAI
import os

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your React app's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Set up OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class GraphQLSchema(BaseModel):
    schema: dict

class GraphQLQuery(BaseModel):
    title: str
    query: str

class GraphQLQueries(BaseModel):
    queries: List[GraphQLQuery]

class GeneralResponse(BaseModel):
    response: GraphQLQueries

class GenerateQueriesRequest(BaseModel):
    schema: dict
    question: str

@app.post("/generate_queries", response_model=GeneralResponse)
async def generate_queries(request: GenerateQueriesRequest):
    prompt = f"""Given the following GraphQL schema, answer the question:

    Schema: {request.schema}

    Question: {request.question}"""

    system_prompt = """
    You are a helpful assistant. Use the schema to answer the question appropriately.   
    Whenever you generate example queries, make sure they are ready to run but providing sensible default values.
    Format the queries nicely, with indentation and line breaks.
    The generated queries should be named, like `query GetUserByID { ... }`
    """

    try:
        completion = client.beta.chat.completions.parse(
            # model="gpt-4o-2024-08-06",
            model="gpt-4o-mini",
            temperature=0,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ],
            response_format=GeneralResponse,
        )
        message = completion.choices[0].message
        if message.parsed:
            return message.parsed
        else:
            raise HTTPException(status_code=500, detail="Failed to generate response")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="debug")