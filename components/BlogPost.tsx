import type { FC, Key } from 'react';
import Link from 'next/link';
import formatDate from '@/utils/formatDate';
import calculateReadTime from '@/utils/calculateReadTime';

type PostProps = {
  post: Post;
};

interface Post {
  publishedAt: Date;
  content: string;
  slug: string;
  title: string;
  teaser: string;
}

const Post: FC<PostProps> = ({ post }) => {
  const publishDate = formatDate(post.publishedAt);
  const postReadTime = calculateReadTime(post.content);

  return (
    <div className="blog postTeaser">
      <h2 className="blogListHeading">
        <Link href={`/blog/${post.slug}`} aria-label={post.title}>
          {post.title}
        </Link>
      </h2>
      <div
        className="postDetails"
        aria-label={`${publishDate} • ${postReadTime}`}
      >
        <div className="dateAndReadTime">
          <time dateTime={publishDate}>{publishDate}</time>
          <span className="readTime">{postReadTime}</span>
        </div>
      </div>
      <p className="teaser">{post.teaser}</p>
    </div>
  );
};

export default Post;
