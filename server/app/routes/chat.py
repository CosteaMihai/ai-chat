from fastapi import HTTPException, status, APIRouter
from app.config.openai import open_ai_client
from app.config.settings import settings
from app.utils.analysis import analyse_text
from app.models import ChatRequest

chat_router = APIRouter(prefix='/chat', tags=['post'])

@chat_router.post('', status_code=status.HTTP_201_CREATED)
async def create_post(chat: ChatRequest):
    try:
        message = chat.chat[-1].content

        text_complexity = analyse_text(message)

        model_used = settings.OPEN_AI_MODEL_35 if text_complexity == 'simple' else settings.OPEN_AI_MODEL_4

        completion = open_ai_client.chat.completions.create(
            model=model_used,
            messages=chat.chat,
            max_tokens=800,
        )
    
        return {'message': completion.choices[0].message.content, 'model': model_used}           
    except Exception:
        print(Exception)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail='Internal Server Error')

