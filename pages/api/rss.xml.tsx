import { NextApiRequest, NextApiResponse } from 'next';
import RSS from 'rss';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const feed = new RSS({
        title: "Oscar Dyremyhr",
        description: "Portfolio and Blog",
        site_url: "https://oscardyremyhr.me/",
        feed_url: "https://oscardyremyhr.me/rss.xml",
        pubDate: new Date(),
    });

    // Fetch your blog posts using Prisma
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { publishedAt: 'desc' },
    });

    const siteUrl = 'https://www.oscardyremyhr.me'; // Replace with your actual site URL

    // Fetch your content and add it to the feed
    posts.forEach(post => {
        const url = `${siteUrl}/blog/${post.slug}`;
        const imageurl = `${siteUrl}/api/og?title=${post.title}&description=${post.teaser}`;
        feed.item({
            title: post.title,
            guid:imageurl,
            url: url,
            description: post.teaser ?? 'No description available',
            date: post.publishedAt,
            categories: [post.category ?? 'No category available'],
            author:  "Oscar Dyremyhr",
        });
    });

    res.setHeader('Content-Type', 'application/atom+xml; charset=utf-8');
    res.status(200).send(feed.xml());
}
