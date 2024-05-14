from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file='.env', 
        env_ignore_empty=True, 
        extra='ignore',
    )

    OPEN_AI_ENDPOINT: str
    OPEN_AI_KEY: str
    OPEN_AI_MODEL_35: str
    OPEN_AI_MODEL_4: str
    OPEN_AI_API_VERSION: str

    BACKEND_CORS_ORIGINS: str


settings = Settings()
