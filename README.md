# Creating the project

## Setting up the frontend structure
1. Install node
2. Create a project: `npm create vite@latest services/frontend -- --template react`
3. Follow the run instructions, eg
    ```
    cd services/frontend
    npm install
    npm run dev
    ```

## Setting up the backend structure
1. Install uv `pip install uv`
2. Create a project `uv init --bare --python 3.13 services/backend`
3. Install django
    ```
    cd services/backend
    uv add django
    uv run django-admin startproject api .
    ```
4. Run django `uv run python manage.py runserver`


    


