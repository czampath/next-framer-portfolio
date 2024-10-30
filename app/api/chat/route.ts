import { NextResponse } from 'next/server';
import axios from 'axios';

const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export async function POST(req: Request) {
  const { message, tokens = 100 } = await req.json();

  try {
    const response = await axios.post(
      API_URL,
      {
        max_tokens: tokens,
        model: 'mixtral-8x7b-32768',
        messages: [{role: 'system', content: message["system"]},{ role: 'user', content: message["user"] }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const botMessage:string = response.data.choices[0].message.content;
    if(botMessage.toLowerCase().includes("i don't know")){
        return NextResponse.json({ message: "I don't know." });
    }
    return NextResponse.json({ message: botMessage });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch response from OpenAI' }, { status: 500 });
  }
}