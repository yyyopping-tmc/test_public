from sqlmodel import create_engine, SQLModel
from pathlib import Path

DB_PATH = Path(__file__).resolve().parent.parent.parent / "data" / "todos.db"
DB_PATH.parent.mkdir(parents=True, exist_ok=True)
SQLITE_URL = f"sqlite:///{DB_PATH}"

engine = create_engine(SQLITE_URL, connect_args={"check_same_thread": False})

def init_db():
    SQLModel.metadata.create_all(engine)
