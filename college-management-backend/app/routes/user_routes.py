from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import crud, schemas, database
from typing import List

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/", response_model=List[schemas.UserResponse])
def read_users(db: Session = Depends(database.get_db)):
    users = crud.get_users(db)
    return users