// pages/api/start.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const openai = new OpenAI();

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // Start a new conversation thread
    const thread = await openai.beta.threads.create();
    res.status(200).json({ thread_id: thread.id });
  } else {
    // If not a GET request, return 405 Method Not Allowed
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
