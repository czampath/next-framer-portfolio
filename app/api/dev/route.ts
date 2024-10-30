
import axios from 'axios';
import { NextResponse } from 'next/server';

const GITHUB_API_URL = 'https://raw.githubusercontent.com/czampath/data/refs/heads/main/json/next-framer-portfolio/data.json';
const GITHUB_TOKEN = process.env.GITHUB_API_KEY;

export async function GET() {
    try {
        const response = await axios.get(GITHUB_API_URL, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });
        return NextResponse.json({ data: response.data });
    } catch (error) {
        console.error('Error fetching recruiter profile:', error);
        return NextResponse.json({ error: 'Failed to fetch response from GITHUB' }, { status: 500 });
    }
};