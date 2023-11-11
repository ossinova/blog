// pages/api/rss.json.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { generateRssFeed } from '@/utils/generateRssFeed';

export default async function jsonFeed(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { jsonFeed } = await generateRssFeed();
    if (!jsonFeed) {
      throw new Error('JSON feed is undefined or empty.');
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).end(jsonFeed);
  } catch (e) {
    console.error('Failed to generate JSON feed:', e);
    res.status(500).json({ error: 'Internal Server Error', message: e.message, stack: e.stack });
  }
}
