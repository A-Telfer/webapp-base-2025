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
    uv run django-admin startproject core_api .
    ```
4. Run django `uv run python manage.py runserver`

## Setting up nginx
The easiest way to setup nginx is with docker
1. Install docker
2. Create the compose.yml file and add frontend/backend as services
3. Create docker files for the frontend (from nodejs for vite) and backend (ubuntu)
4. Create the services/nginx/nginx.conf file that proxies the frontend host:port (eg http://frontend:5173) and backend (eg http://backend:8000)

## Adding Postgres and Rabbitmq

## Adding a separate process with signals in django

## Adding Celery to backend

## Adding django channels

## Where to go from here
This setup is aimed at dev. A strategy for switching this to prod would be
- Rename current main -> dev
- Create new main from current stable state (or an empty placeholder for prod if it’s not ready yet)
- Create release/v0 or similar for production setup
- Merge release/v0 into main when ready to deploy
