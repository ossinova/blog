import React from 'react'
import { GetServerSideProps } from 'next'
import { useSession, getSession } from 'next-auth/client'
import Link from 'next/link'
import Login from '../../components/Login'
import Post, { PostProps } from '../../components/Post'
import prisma from '../../lib/prisma'

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
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return {
    props: { drafts },
  }
}

type Props = {
  drafts: PostProps[]
}

const Drafts: React.FC<Props> = (props) => {
  const [session] = useSession()

  if (!session) {
    return (
      <>
        <Login />
        <h1>Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </>
    )
  }

  return (
    <div className="blog">

      <nav className="breadcrumbs">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <span>Drafts</span>
      </nav>

      <Login />

      <div className="drafts">
        <h1>Drafts</h1>
        <main>
          {props.drafts.map((post) => (
            <div
              key={post.id}
              className="postDraft"
            >
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>

    </div>
  )
}

export default Drafts