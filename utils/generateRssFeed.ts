import { PostProps } from '@/types/post';
import { Feed } from 'feed';
import prisma from '@/lib/prisma';
import { metadata } from '@/data/metadata';

export async function generateRssFeed() {

    const siteUrl = 'https://www.oscardyremyhr.me'; // Replace with your actual site URL
    const author = {
      name: 'Oscar Dyremyhr', // Replace with the name of the author or site owner
      email: 'oscar.dyremyhr@gmail.com', // Replace with the author's email
      link: 'https://twitter.com/authorHandle', // Replace with the author's Twitter handle or equivalent
    };
    const date = new Date();

    const feed = new Feed({
      title: "Oscar Dyremyhr",
      description: "Portfolio and Blog",
      id: siteUrl,
      link: siteUrl,
      language: 'en', // Replace with your blog's language
      favicon: `${siteUrl}/favicon.ico`,
      updated: date, // The last time the feed was updated; use the most recent post date if available
      copyright: `Copyright © ${date.getFullYear()} Oscar Dyremyhr`,
      feedLinks: {
        rss2: `/blog/feed.xml`,
        json: `/blog/feed.json`,
      },
      author: author,
    });

  // Fetch your blog posts using Prisma
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: 'desc' },
  });

  // Add each post to the feed
  posts.forEach((post) => { // 'post' is defined here as the argument to the callback
    const url = `${siteUrl}/blog/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.teaser,
      content: post.content,
      date: new Date(post.publishedAt),
      author: [author],
    });
  });

// Generate RSS 2.0 and JSON Feed
const rssFeed = feed.rss2();
const jsonFeed = feed.json1();

return { rssFeed, jsonFeed };
}