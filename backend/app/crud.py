from sqlmodel import Session, select
from .database import engine
from .models import Todo, TodoCreate, TodoUpdate

def get_all_todos():
    with Session(engine) as s:
        return s.exec(select(Todo).order_by(Todo.created_at.desc())).all()

def get_todo(todo_id: int):
    with Session(engine) as s:
        return s.get(Todo, todo_id)

def create_todo(todo: TodoCreate):
    db = Todo.from_orm(todo)
    with Session(engine) as s:
        s.add(db)
        s.commit()
        s.refresh(db)
        return db

def update_todo(todo_id: int, todo: TodoUpdate):
    with Session(engine) as s:
        db = s.get(Todo, todo_id)
        if not db:
            return None
        todo_data = todo.dict(exclude_unset=True)
        for k, v in todo_data.items():
            setattr(db, k, v)
        s.add(db)
        s.commit()
        s.refresh(db)
        return db

def delete_todo(todo_id: int):
    with Session(engine) as s:
        db = s.get(Todo, todo_id)
        if not db:
            return False
        s.delete(db)
        s.commit()
        return True
