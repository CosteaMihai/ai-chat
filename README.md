## AI Chat

### Description

This project serves as an AI portal facilitating communication with an artificial intelligence model. Built with FastAPI on the backend and Next.js 14 on the frontend, it leverages the Azure Open AI client for seamless interaction between the AI model and the backend infrastructure.

### Selection AI model algorithm

This application implements an algorithm to select the appropriate AI model based on the complexity of a given phrase. The algorithm utilizes the textstat package for analyzing sentences, which provides methods for calculating various statistics from texts.

#### Implemented Methods

1. **Flesch-Kincaid Grade:** Indicates the readability level of a text.
2. **Gunning Fog:** Estimates the readability of a text by determining the number of years of formal education needed to understand it.
3. **Dale-Chall Readability Score:** Assesses the readability of a text based on a list of familiar words considered easy to understand.
4. **Automated Readability Index:** Assesses readability by considering the average sentence length and average number of characters per word.
5. **Coleman-Liau Index:** Considers the average number of letters per 100 words and the average number of sentences per 100 words.

#### Algorithm Overview

1. Calculate the average of the scores provided by the above methods.
2. Compute the deviation between the average and every score.
3. Calculate the average deviation.
4. Determine the certainty level:
   - If the average deviation is small (e.g., less than 2), it indicates that the scores are close to each other, implying certainty about the complexity of the sentence.
   - If the average deviation falls within a certain range, indicating uncertainty, additional steps are taken.
   - Search for a majority of deviations smaller than the average deviation to mitigate errors introduced by textstat methods. For example, if three or more deviations are smaller than the average deviation, consider them a majority, implying certainty about the complexity.
   - If the deviation is too large, indicating significant uncertainty, the algorithm cannot determine the complexity of the sentence.
5. Based on certainty level and average scores the complexity of the sentence will be determed as follows:
    - If the average score is over 8 and certainty level is certain, the algoritm will consider the sentence complex otherwise it will be simple
    - If the average score is over 5 and certainty level is uncertain, the algoritm will consider the sentence complex otherwise it will be simple
    - In instances of uncertainty, the algorithm sets a lower threshold score to mitigate risk, ensuring that it avoids utilizing a less potent AI model

### Technologies

#### Frontend
- Next.js
- TypeSctipt
- Tailwind
- Redux
- Axios

#### Backend
- FastAPI
- Openai
- Textstat
- Uvicorn

### Get the project
Clone the repository

```
git clone https://github.com/CosteaMihai/ai-chat.git
```

### Run the project

#### Docker
You should install Docker. In the ai chat folder run the folowing commands:

```
docker compose build
docker compose up -d
```

#### Installing dependencies

##### Frontend
You should have Node.js installed and in the client folder run the following commands

```
npm install
npm run dev
```

##### Backend
You should have Python3 installed and in the server folder run the following commands

```
python -m venv env
env/Scripts/activate
pip install -r requirements.txt 
uvicorn app.main:app --reload
```

### Open the project
Client should run on [loc](http://localhost:3000/) and the server on [loc](http://localhost:8000/)



