from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.routes.chat import chat_router
from app.config.settings import settings

app = FastAPI(debug=True)

if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(chat_router)