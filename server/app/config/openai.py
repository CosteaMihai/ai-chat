from app.config.settings import settings
from openai import AzureOpenAI

open_ai_client = AzureOpenAI(
    api_key=settings.OPEN_AI_KEY,
    azure_endpoint=settings.OPEN_AI_ENDPOINT,
    api_version=settings.OPEN_AI_API_VERSION
)
