from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import todos
from app.database import init_db

app = FastAPI(title="Todo App API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(todos.router, prefix="/api/todos", tags=["todos"])


@app.on_event("startup")
def on_startup():
    init_db()
