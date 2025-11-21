from fastapi import APIRouter

router = APIRouter(prefix="/students", tags=["students"])

@router.get("/")
def read_students():
    return {"message": "List of students"}