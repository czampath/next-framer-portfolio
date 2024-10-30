import axios from "axios";

const GITHUB_API_URL = 'https://raw.githubusercontent.com/czampath/data/refs/heads/main/json/next-framer-portfolio/data.json';
const GITHUB_TOKEN = process.env.GIT_HUB_API_KEY; // Store your GitHub token in environment variables


export const fetchData = async () => {
    const response = await axios.get(GITHUB_API_URL, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    });

    if(response.status !== 200) {
        throw new Error('Failed to fetch dev data');
    }

    return response.data;
  
};

export const composeIntructions = {
    instruction: "User asks questions, you need to select the json path from the json provided below",
    jsonTree: "",
    user: "What is your name?",
}