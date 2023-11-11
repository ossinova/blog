// pages/api/rss.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { generateRssFeed } from '@/utils/generateRssFeed';

export default async function rssRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    const rssFeed = await generateRssFeed();
    res.setHeader('Content-Type', 'application/rss+xml');
    res.status(200).send(rssFeed);
  } catch (e) {
    // Check if 'e' is an instance of Error to access its 'message' and 'stack'.
    if (e instanceof Error) {
      console.error('Failed to generate RSS feed:', e);
      res.status(500).json({ error: 'Internal Server Error', message: e.message, stack: e.stack });
    } else {
      // If it's not an Error instance, send a generic error message.
      console.error('Failed to generate RSS feed:', e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
