import { css } from '@emotion/react'
import sortBlogPosts from '@/utils/sortBlogPosts'
import Link from 'next/link'


export default function BlogNavigation({ feed, post, isPublished }) {

  const total : number = feed?.length
  const current : number = post?.id

  // Sort Posts based on @/utils/sortBlogPosts
  const arr : Array<any> = feed ? feed : null
  const arrSorted = arr.sort(sortBlogPosts)
    
  // Error Handling
  const first = arr[0].id == current && isPublished
  const last = arr[total - 1].id == current && isPublished
  const only = first && last
  const prevPost = isPublished && !first && !only
  const nextPost = isPublished && !last && !only

  // Generate next/prev paths based on the post slug and conditionally render the links
  const index = arrSorted.findIndex(x => x.id === current)
  const prevTitle = prevPost ? arr[index - 1].title : null
  const nextTitle = nextPost ? arr[index + 1].title : null
  const prevLink = prevPost ? `/blog/${encodeURIComponent(arr[index - 1].slug)}` : '#'
  const nextLink = nextPost ? `/blog/${encodeURIComponent(arr[index + 1].slug)}` : '#'

  const ShowPrevLink = () => 
    <Link href={prevLink} aria-label={prevTitle}>
      <a css={stylePrevLink}>← {prevTitle}</a>
    </Link>
  const ShowNextLink = () => 
    <Link href={nextLink} aria-label={nextTitle}>
      <a css={styleNextLink}>{nextTitle} →</a>
    </Link>

  // Style next/prev Links
  const styleBlogNavigation = css({
    marginTop: '4rem',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'var(--font-tertiary)',
    fontSize: 18,
    '@media(max-width: 768px)': {
      flexDirection: 'row',
      fontSize: 16,
    },
  })
  const stylePrevLink = css({
    paddingRight: '1rem',
    textAlign: 'left',
  })
  const styleNextLink = css ({
    paddingLeft: '1rem',
    textAlign: 'right',
  })

  return (
    <div css={styleBlogNavigation}>
       { prevPost ? <ShowPrevLink /> : null }
       { nextPost ? <ShowNextLink /> : null }
    </div>
  )
}