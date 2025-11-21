from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    email: str
    password: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: str

    class Config:
        orm_mode = True

class StudentCreate(BaseModel):
    name: str
    email: str
    course: str

class Student(BaseModel):
    id: int
    name: str
    email: str
    course: str

    class Config:
        orm_mode = True