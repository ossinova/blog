import { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import dynamic from 'next/dynamic';

import prisma from '@/lib/prisma';
import { useSession } from 'next-auth/react';
import { css } from '@emotion/react';
import { useFetchStatus } from '@/hooks/useLoadingIndicator';
import { useLikeButton } from '@/hooks/useLikeButton';

import Container from '@/components/Container';
import BlogStyles from '@/components/BlogStyles';
import LoadingTriangle from '@/components/LoadingTriangle';
import BlogNavigation from '@/components/BlogNavigation';
import Markdown from '@/components/Markdown';
import LikeCount from '@/components/LikeCount';

import calculateReadTime from '@/utils/calculateReadTime';
import formatDate from '@/utils/formatDate';
import { blogPostContent, adminContent } from '@/data/content';
import { PostProps } from '@/types/post';
import { AdminControlsTypes } from '@/types/admin';
import { BlogNavigationTypes } from '@/types/blog';
import LikeButton from '@/components/LikeButton';
import BlogPostTweet from '@/components/BlogPostTweet';
import BlogPostLinkedIn from '@/components/BlogPostLinkedIn';
import TableOfContents from '@/components/TableOfContents';
import PostViewCount from '@/components/PostViewCount';
import ReactUtterances from 'react-utterances'
import { Comments } from '@/components/Comments';
import { Theme } from '@emotion/react';

const BlogPostControls = dynamic(
  () => import('@/components/BlogPostControls'),
  { ssr: false }
);

export const getStaticPaths: GetStaticPaths = async () => {
  const feed = await prisma.post.findMany({ where: { published: true } });
  const paths = feed.map((post) => ({ params: { slug: post.slug as string } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [post, feed] = await prisma.$transaction([
    prisma.post.findFirst({
      where: { slug: String(params?.slug) },
      include: {
        author: { select: { name: true } },
        postHistory: { orderBy: { editedAt: 'desc' }, take: 2 },
      },
    }),
    prisma.post.findMany({
      where: { published: true },
    }),
  ]);
  if (post) {
    return {
      props: {
        blogPost: blogPostContent,
        admin: adminContent,
        post: JSON.parse(JSON.stringify(post)),
        feed: JSON.parse(JSON.stringify(feed)),
      },
    };
  } else {
    return { notFound: true };
  }
};

interface BlogPostProps extends AdminControlsTypes, BlogNavigationTypes {
  blogPost?: {
    meta?: {
      title?: string;
    };
  };
  post: PostProps;
}

const BlogPost: FC<BlogPostProps> = ({ blogPost, admin, post, feed }) => {
  const { data: session } = useSession();
  const userHasValidSession = Boolean(session);

  const isPublished: Boolean = post.published;
  const publishLabel = isPublished
    ? admin.controls.unpublish
    : admin.controls.publish;
  const displayPost =
    isPublished ||
    (session && session?.user?.email === process.env.NEXT_PUBLIC_USER_EMAIL);

  const isFeatured = post.featured;
  const latestPostID = feed.length > 1 ? feed[feed?.length - 1].id : feed[0];
  const latestPost = latestPostID === post.id;

  const isEdited =
    post.editedAt?.toString().slice(0, 10) >
    post.publishedAt?.toString().slice(0, 10);
  const showEdited = post.showEdited;
  const publishDate = formatDate(post.publishedAt);
  const editDate = formatDate(post?.editedAt);
  const prevEditDate = post?.postHistory[0]
    ? formatDate(post?.postHistory[0]?.editedAt)
    : null;
  const postReadTime = calculateReadTime(post.content);
  const title = post.title;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`;

  const [fetchStatus, setFetchStatus] = useFetchStatus();
  const isFetching = fetchStatus;

  const [liked, handleLike] = useLikeButton(post.id, post.title);

  // Set OG Image for blog posts. Use first image from post, otherwise dynamically generate one.
  const metaImage = post.content
    .replace(/`([^`]*)/g, '')
    .match(/!\[.*?\]\((.*?)\)/)
    ? post.content.match(/!\[.*?\]\((.*?)\)/)?.[1]
    : null;

  const ScrollProgressBar = dynamic(() => import('@/components/ScrollProgressBar'), {
    ssr: false, // This will load the component only on the client side
  })
    
  const RenderBlogPost = () => {
    return (
      <div className={isPublished ? 'blog' : 'blog admin'} css={styleBlogPost}>
        {!isPublished ? (
          <div className="draftNotification warn">{admin.drafts.notice}</div>
        ) : null}
        {/* Progress bar */}
      <ScrollProgressBar />
        <article className="post postFull">
          <div className="categoryWrapper">
            {isFeatured ? (
              <div
                className="category featured full"
                aria-label="Featured Post"
              >
                Featured
              </div>
            ) : null}
            <div className="category full" aria-label={post.category}>
              {post.category}
            </div>
          </div>
          <h1 aria-label={`${title}`}>{title}</h1>
          <p className="teaser">{post.teaser}</p>
          <div
            className="postDetails"
            aria-label={
              isEdited
                ? `${editDate} • ${postReadTime}`
                : `${publishDate} • ${postReadTime}`
            }
          >
            <div className="info">
              <span className="by">By</span>
              <span className="author">
                {post?.author?.name || 'Unknown author'}
              </span>
              <span className="date">
                {showEdited ? (
                  <time dateTime={post.editedAt.toString()}>
                    Updated: {editDate}
                  </time>
                ) : (
                  <time
                    dateTime={
                      post.postHistory[0]?.editedAt.toString() ||
                      post.publishedAt.toString()
                    }
                  >
                    {prevEditDate ? 'Updated: ' : null}
                    {prevEditDate || publishDate}
                  </time>
                )}
              </span>
            </div>
            <div className="postStats">
              <div className="likesAndViews">
                <LikeCount id={post.id} likes={post.likes} />
                <PostViewCount slug={post.slug} />
              </div>
              <span className="readTime">{postReadTime}</span>
            </div>
          </div>

          <div className="likeAndShare">
            <div className="buttonHover">
              <LikeButton liked={liked} handleLike={handleLike} />
            </div>
            <div className="buttonHover">
              <BlogPostTweet
                title={post.title}
                url={url}
                text={false}
                size={24}
                color={'var(--color-heading)'}
              />
            </div>
            <div className="buttonHover">
              <BlogPostLinkedIn
                title={post.title}
                url={url}
                text={false}
                size={24}
                color={'var(--color-heading)'}
              />
            </div>
          </div>

          <TableOfContents markdown={post.content} />
          <Markdown markdown={post} />

          {userHasValidSession && (
            <BlogPostControls
              admin={admin}
              post={post}
              latestPost={latestPost}
              publishLabel={publishLabel}
              requiredFields={undefined}
              submitClass="buttonCompact publishBtn"
              handleCancel={undefined}
              deleted={false}
              setFetchStatus={setFetchStatus}
              isFetching={isFetching}
            />
          )}
        </article>
        <BlogNavigation
          feed={feed}
          post={post}
          url={url}
          isPublished={isPublished}
          liked={liked}
          handleLike={handleLike}
        />
        <Comments />
      </div>
    );
  };

  return (
    <Container
      title={title + blogPost?.meta?.title}
      description={post?.teaser}
      image={metaImage}
      date={publishDate}
      robots={isPublished ? 'follow, index' : 'noindex'}
    >
      <BlogStyles>
        {displayPost ? <RenderBlogPost /> : <LoadingTriangle />}
      </BlogStyles>
    </Container>
  );
};

export default BlogPost;

const styleBlogPost = css({
  '.likeAndShare': {
    display: 'flex',
    marginBottom: '2rem',
    '@media(max-width: 1024px)': {
      marginBottom: '1rem',
    },
  },
  '.postFull': {
    h1: {
      margin: '0 0 .8rem',
      textDecoration: 'none',
      lineHeight: '2.8rem',
      fontWeight: 700,
      '@media(max-width: 768px)': {
        fontSize: 32,
        margin: '0 0 .5rem',
        lineHeight: '2.2rem',
      },
      '@media(max-width: 600px)': {
        fontSize: 28,
        lineHeight: '2.2rem',
      },
    },
    '.teaser': {
      marginBottom: '3.5rem',
      fontFamily: 'var(--font-tertiary)',
      fontSize: 22,
      lineHeight: '1.5rem',
      color: 'var(--color-gray)',
      '@media(max-width: 1024px)': {
        marginBottom: '2rem',
        fontSize: 18,
      },
      '@media(max-width: 480px)': {
        marginBottom: '1.25rem',
      },
    },
    'h3, h3 code': {
      fontSize: 28,
      lineHeight: '1.8rem',
      '@media(max-width: 768px)': {
        fontSize: 24,
      },
    },
    h3: {
      scrollMarginTop: '4rem',
      margin: '1rem 0 1.5rem',
      padding: 0,
      display: 'inline-block',
      fontWeight: 700,
      '& code': {
        fontFamily: 'var(--font-secondary)',
        background: 'transparent',
      },
      a: {
        fontFamily: 'var(--font-secondary)',
        textDecoration: 'none',
        color: 'var(--color-heading)',
        fontSize: 28,
        '&:hover': {
          '&::before': {
            content: '"#"',
            color: 'var(--color-accent-gray)',
            position: 'absolute',
            textAlign: 'center',
            top: 0,
            left: -22,
            fontSize: 28,
          },
        },
        '@media (max-width: 768px)': {
          fontSize: 24,
        },
      },
      '@media(hover: none)': {
        a: {
          pointerEvents: 'none',
          '&:hover:before': {
            content: '""',
          },
        },
      },
    },
    'h1, h2, h3, h3, h4, h5, h6': {
      position: 'relative',
    },
    'p, ul, li, a': {
      fontFamily: 'var(--font-tertiary)',
      fontSize: 17,
    },
    'ul, li, a': {
      marginBottom: '1rem',
    },
    'ul li, ol li, p, .note': {
      a: {
        color: 'var(--color-primary)',
        textDecoration: 'underline',
        textDecorationColor: 'var(--color-primary)',
        '&:hover': {
          color: 'var(--color-primary)',
          textDecoration: 'none',
        },
      },
    },
    'p,': {
      marginBottom: '2rem',
    },
    '.note': {
      position: 'relative',
      marginBottom: '2.2rem',
      padding: '2.8rem 1.5rem 1.25rem 1.5rem',
      border: '1px solid var(--color-accent-gray)',
      borderRadius: 5,
      fontFamily: 'var(--font-secondary)',
      fontSize: 14.5,
      color: 'var(--color-gray)',
      lineHeight: '1.5rem',
      '@media (max-width: 768px)': {
        lineHeight: '2rem',
      },
      '&:before, &:after': {
        position: 'absolute',
        lineHeight: '2rem',
      },
      '&:before': {
        content: '""',
        top: 19,
        left: 22,
        width: 15,
        height: 15,
        background: 'var(--icon-info) no-repeat',
        backgroundSize: 'contain',
        lineHeight: '2rem',
        '@media (max-width: 768px)': {
          top: 19,
        },
      },
      '&:after': {
        content: '"Note:"',
        top: 14,
        left: 42,
        lineHeight: '1.5rem',
        textTransform: 'uppercase',
        fontFamily: 'var(--font-secondary)',
        fontSize: 14.5,
      },
      a: {
        fontFamily: 'var(--font-secondary)',
        fontSize: 14.5,
      },
      code: {
        fontSize: 13,
        '@media (max-width: 768px)': {
          padding: '.05rem .05rem !important',
          margin: '0 !important',
          lineHeight: '.5rem !important',
        },
      },
      '&.tip': {
        '&:after': {
          content: '"Tip:"',
        },
      },
      '&.example': {
        '&:after': {
          content: '"Example:"',
        },
      },
      '&.warn': {
        '&:after': {
          content: '"Warning:"',
          color: 'var(--color-warning)',
        },
      },
      '&.contents': {
        display: 'flex',
        alignItems: 'start',
        flexDirection: 'column',
        padding: '1.25rem',
        '&::before': {
          display: 'none',
          content: '""',
          background: 'none',
        },
        '&:after': {
          content: '""',
        },
      },
    },
    blockquote: {
      margin: '2.5rem -1.5rem',
      padding: '0 2rem',
      borderLeft: '8px solid var(--color-primary)',
      color: 'var(--color-gray)',
      'p, a': {
        marginBottom: 0,
        fontSize: 20,
        fontStyle: 'italic',
      },
      '& blockquote': {
        marginLeft: '1rem',
        borderLeft: '8px solid var(--color-gray)',
      },
    },
    ul: {
      marginBottom: '2rem',
    },
    'ul li': {
      listStyle: 'outside',
      margin: '0 0 .5rem 1rem',
      paddingLeft: '.5rem',
      '&.task-list-item': {
        fontFamily: 'var(--font-primary)',
        fontSize: 15,
        fontWeight: 'bold',
      },
      'input[type="checkbox"]': {
        marginTop: '-.1rem',
      },
      '@media (max-width: 480px)': {
        marginLeft: '1.5rem',
      },
    },
    'ul.contains-task-list': {
      li: {
        '&:first-of-type': {
          fontFamily: 'var(font-secondary)',
        },
        listStyle: 'none',
        margin: 0,
        padding: 0,
      },
    },
    ol: {
      counterReset: 'counter',
      margin: '2rem 0',
      li: {
        counterIncrement: 'counter',
        marginLeft: '2rem',
        paddingLeft: '.5rem',
        position: 'relative',
        '&::before': {
          content: 'counter(counter)',
          width: '1.3rem',
          height: '1.3rem',
          position: 'absolute',
          top: '.1rem',
          left: '-2rem',
          border: '1px solid var(--color-gray)',
          borderRadius: '50%',
          color: 'var(--color-gray)',
          fontFamily: 'var(--font-primary)',
          fontSize: '.7rem',
          lineHeight: '1.3rem',
          textAlign: 'center',
          '@media not all and (min-resolution:.001dpcm)': {
            '@supports (-webkit-appearance:none)': {
              paddingLeft: '.1rem',
            },
          },
        },
      },
      '@media (max-width: 480px)': {
        marginLeft: '.1rem',
      },
    },
  },
  '.postImgWrapper': {
    paddingBottom: '2rem',
    img: {
      width: '100%',
      height: 'auto',
    },
  },
  '.caption, .caption a': {
    fontFamily: 'var(--font-primary)',
    fontSize: 12,
    color: 'var(--color-gray)',
  },
});
