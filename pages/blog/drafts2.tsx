import { FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { getSession } from 'next-auth/react';
import prisma from '@/lib/prisma';

import LoadingTriangle from '@/components/LoadingTriangle';
import Container from '@/components/Container';
import BlogStyles from '@/components/BlogStyles';
import BlogPost from '@/components/BlogPost';
import compareID from '@/utils/compareID';
import Dropdown from '@/components/Dropdown';

import { adminContent, breadcrumbContent } from '@/data/content';
import { PostProps } from '@/types/post';


type BreadcrumbProps = {
    blog: string;
    drafts: string;
  };

type DraftsProps = {
  drafts: PostProps[];
  admin: typeof adminContent;
  breadcrumb: typeof breadcrumbContent;
};

const Breadcrumbs = ({ breadcrumb }: { breadcrumb: BreadcrumbProps }) => (
  <nav className="breadcrumbs">
    <Link href="/blog">{breadcrumb.blog}</Link>
    <span>{breadcrumb.drafts}</span>
  </nav>
);

const Drafts = ({ drafts, admin, breadcrumb }: DraftsProps) => {
  const [draftsList, setDraftsList] = useState<JSX.Element[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('newest');

  const sortedDrafts = drafts.sort(compareID);
  if (sortOrder === 'newest') {
    sortedDrafts.reverse();
  }

  useEffect(() => {
    const newDraftsList = sortedDrafts.map(post => (
      <div key={post.id} className="postDraft">
        <BlogPost post={post} />
        <div className="draftInfo">
          <div className="label">Draft</div>
          <div className="category">{post.category}</div>
        </div>
      </div>
    ));
    setDraftsList(newDraftsList);
  }, [drafts, sortOrder]);

  const renderNoDrafts = () => (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <div className="noDrafts draftNotification warn">
        {admin.drafts.empty}
        <Link href="/blog/create">{admin.drafts.empty2}</Link>
        {admin.drafts.empty3}
      </div>
    </>
  );

  const renderDraftsList = () => (
    <div className="drafts">
      <div className="draftsControls">
        <Breadcrumbs breadcrumb={breadcrumb} />
        <div className="draftSort">
          <Dropdown
            label="Sort by:"
            value={sortOrder}
            handleChange={(e) => setSortOrder(e.target.value)}
            data={['newest', 'oldest']}
          />
        </div>
      </div>
      <main>{draftsList}</main>
    </div>
  );

  return (
    <Container title={admin.drafts.meta.title} robots="noindex">
      <BlogStyles>
        <div className="blog admin drafts">
          {drafts.length ? renderDraftsList() : renderNoDrafts()}
        </div>
      </BlogStyles>
    </Container>
  );
};

export default Drafts;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
  
    // Check if session or session.user is undefined
    if (!session || !session.user || session.user.email !== process.env.NEXT_PUBLIC_USER_EMAIL) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  
    try {
      const drafts = await prisma.post.findMany({
        where: { author: { email: session.user.email }, published: false },
        include: { author: { select: { name: true } } },
      });
  
      return {
        props: {
          drafts: JSON.parse(JSON.stringify(drafts)),
          admin: adminContent,
          breadcrumb: breadcrumbContent,
        },
      };
    } catch (error) {
      console.error('Error in getServerSideProps:', error);
      return { props: { error: 'An error occurred.' } };
    }
  };
  
