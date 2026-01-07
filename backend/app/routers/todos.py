from fastapi import APIRouter, HTTPException
from typing import List
from app import crud, models

router = APIRouter()


@router.get("/", response_model=List[models.TodoRead])
def read_todos():
    return crud.get_all_todos()


@router.get("/{todo_id}", response_model=models.TodoRead)
def read_todo(todo_id: int):
    todo = crud.get_todo(todo_id)
    if not todo:
        raise HTTPException(status_code=404, detail="Not found")
    return todo


@router.post("/", response_model=models.TodoRead, status_code=201)
def create_todo(todo: models.TodoCreate):
    return crud.create_todo(todo)


@router.put("/{todo_id}", response_model=models.TodoRead)
def update_todo(todo_id: int, todo: models.TodoUpdate):
    updated = crud.update_todo(todo_id, todo)
    if not updated:
        raise HTTPException(status_code=404, detail="Not found")
    return updated


@router.delete("/{todo_id}", status_code=204)
def delete_todo(todo_id: int):
    ok = crud.delete_todo(todo_id)
    if not ok:
        raise HTTPException(status_code=404, detail="Not found")
