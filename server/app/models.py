from pydantic import BaseModel

class ChatRequestItem(BaseModel):
    content: str
    role: str

class ChatRequest(BaseModel):
    chat: list[ChatRequestItem]
    
