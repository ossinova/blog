// pages/api/rss.json.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { generateRssFeed } from '@/utils/generateRssFeed';

export default async function jsonRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { jsonFeed } = await generateRssFeed();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(jsonFeed);
  } catch (e) {
    // Since 'e' is of type 'unknown', we check if it's an instance of Error to access its 'message' and 'stack'.
    if (e instanceof Error) {
      console.error('Failed to generate JSON feed:', e);
      res.status(500).json({ error: 'Internal Server Error', message: e.message, stack: e.stack });
    } else {
      // If it's not an Error instance, we can only log it and send a generic error message.
      console.error('Failed to generate JSON feed:', e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}