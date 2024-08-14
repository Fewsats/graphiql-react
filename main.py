from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Union
from openai import OpenAI
import os

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://fewsats.github.io/graphiql-react/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Set up OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class GraphQLSchema(BaseModel):
    schema: dict

class GraphQLQuery(BaseModel):
    reason: str = Field(..., description="Think step by step, describe the query you are about to generate")
    title: str = Field(..., description="The title or name of the GraphQL query")
    query: str = Field(..., description="The actual GraphQL query string")
    
class GraphQLQueries(BaseModel):
    queries: List[GraphQLQuery] = Field(..., description="A list of GraphQL queries")

class GenerateQueriesRequest(BaseModel):
    schema: dict = Field(..., description="The GraphQL schema to use for query generation")
    question: str = Field(..., description="The question or prompt for generating queries")

@app.post("/generate_queries", response_model=GraphQLQueries)
async def generate_queries(request: GenerateQueriesRequest):
    prompt = f"""Question: {request.question}
    
    GraphQL Schema: {request.schema}"""

    system_prompt = """
    You are a helpful assistant. Use the GraphQL schema to answer the question appropriately.   
    Whenever you generate example queries, provide sensible default values so they are ready to use.
    Format the queries with indentation and line breaks.
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
            response_format=GraphQLQueries,
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