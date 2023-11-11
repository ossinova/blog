// pages/api/rss.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { generateRssFeed } from '@/utils/generateRssFeed';

export default async function rss(req: NextApiRequest, res: NextApiResponse) {
  try {
    const rssFeed = await generateRssFeed();
    res.setHeader('Content-Type', 'application/rss+xml');
    res.status(200).send(rssFeed); // Use 'send' directly with 'rssFeed'
  } catch (e) {
    console.error('Failed to generate RSS feed:', e);
    res.status(500).json({ error: 'Internal Server Error', message: e.message, stack: e.stack });
  }
}