import React from 'react'
import { GetServerSideProps } from 'next'
import { useSession, getSession } from 'next-auth/client'
import Link from 'next/link'
import Head from 'next/head'
import BlogLayout from '@/components/BlogLayout'
import { admin, breadcrumb } from '@/data/content'
import BlogPost from '@/components/BlogPost'
import sortBlogPosts from '@/utils/sortBlogPosts'
import prisma from '@/lib/prisma'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req })
  if (!session) {
    res.statusCode = 403
    return { props: { drafts: [] } }
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    }
  })
  return {
    props: { drafts },
  }
}


type Props = {
  drafts: Array<any>
  toggleTheme: Function
}

const Drafts: React.FC<Props>  = ({ drafts, toggleTheme }) => {
  
  let draftsList = null;
  const [session] = useSession()

  if (session && session.user.email == process.env.NEXT_PUBLIC_USER_EMAIL) {
    draftsList = (
      <div className="blog admin drafts">

        <nav className="breadcrumbs">
          <Link href={breadcrumb.path}>{breadcrumb.blog}</Link>
          <span>{breadcrumb.drafts}</span>
        </nav>

        <div className="drafts">
          <main>
            {drafts.sort(sortBlogPosts).reverse().map((post) => (
              <div
                key={post.id}
                className="postDraft"
              >
                <BlogPost post={post} />
              </div>
            ))}
          </main>
        </div>

      </div>
    )
  }
  return (
    <BlogLayout toggleTheme={toggleTheme}>
      <Head>
        <title>{admin.drafts.meta.title}</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      {draftsList}
    </BlogLayout>
  )
}

export default Drafts