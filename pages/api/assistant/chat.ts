// pages/api/chat.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID || '';
const openai = new OpenAI();

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Handle the chat message
    const { message, thread_id: threadId } = req.body;

    if (!threadId) {
      return res.status(400).json({ error: 'Missing thread_id' });
    }

    await openai.beta.threads.messages.create(threadId, { role: 'user', content: message });
    const run = await openai.beta.threads.runs.create(threadId, { assistant_id: OPENAI_ASSISTANT_ID });

    // Wait for the run to complete
    let runStatus;
    do {
      await new Promise(resolve => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
    } while (runStatus.status !== 'completed');

    // Retrieve the latest message from the assistant
    const messages = await openai.beta.threads.messages.list(threadId);
    const response = messages.data[messages.data.length - 1].content;

    res.status(200).json({ response });
  } else {
    // If not a POST request, return 405 Method Not Allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
