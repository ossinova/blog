import { FC, useEffect, useState } from 'react';

import prisma from '@/lib/prisma';
import Container from '@/components/Container';
import BlogStyles from '@/components/BlogStyles';
import BlogPost from '@/components/BlogPost';
import { adminContent, breadcrumbContent } from '@/data/content';
import { PostProps } from '@/types/post';
import { GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/react';

type DraftsProps = {
  drafts: PostProps[];
};

const Drafts: FC<DraftsProps> = ({ drafts }) => {
  const { data: session } = useSession();
  useEffect(() => {
    console.log('Session:', session);
  }, [session]);

  return (
    <Container title={adminContent.drafts.meta.title} robots="noindex">
      <BlogStyles>
        <div className="blog admin drafts">
          <h3>{adminContent.drafts.meta.title}</h3>
          {drafts.map((draft) => (
            <div key={draft.id} className="postDraft">
              <BlogPost post={draft} />
            </div>
          ))}
        </div>
      </BlogStyles>
    </Container>
  );
};

export default Drafts;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const session = await getSession({ req });
    console.log('Session:', session);

    if (!session) {
      return { props: { drafts: [] } };
    }

    const drafts = await prisma.post.findMany({
      where: {
        author: { email: session?.user?.email },
        published: false,
      },
    });

    return {
      props: {
        drafts: JSON.parse(JSON.stringify(drafts)),
      },
    };
  } catch (error) {
    console.error('Error fetching drafts:', error);
    return { props: { drafts: [] } };
  }
};

