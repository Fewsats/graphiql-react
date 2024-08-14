.PHONY: install run-js run-py deploy

# JavaScript/React (GraphiQL) commands
install-js:
	yarn install

run-js:
	yarn start

# Python commands
install-py:
	pip install -r requirements.txt

run-py:
	uvicorn main:app --reload

# Combined install command
install: install-js install-py

# Deploy command
deploy:
	yarn deploy

# Default command to run both servers
run: run-py run-js