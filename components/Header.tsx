import { css } from '@emotion/react'
import Link from 'next/link'
import Navigation  from '@/components/Navigation'
import ToggleTheme from '@/components/ToggleTheme'
import dynamic from 'next/dynamic'
const BlogAdmin = dynamic(() => import('@/components/BlogAdmin'), {
  ssr: false
})
const Logo = dynamic(() => import('@/components/Logo'), {
  ssr: false
})


const Header = () => {
  
  const styleHeaderWrapper = css({
    paddingTop: '2rem',
    position: 'sticky',
    top: '-2rem',
    backgroundColor: 'var(--color-bg)',
    zIndex: 5,
    '@media(max-width: 1024px)': {
      paddingTop: 0,
      top: 0,
    },
  })
  const styleHeader = css({
    overflow: 'hidden',
    paddingBottom: '1rem',
    paddingTop: '1rem',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    a:  { textDecoration: 'none' },
    '.headerRight': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        flexDirection: 'row-reverse'
      }
    }
  })
  const styleLogoButton = css({
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    fontFamily: 'var(--font-secondary)',
    cursor: 'pointer',
  })

  return (
    <div css={styleHeaderWrapper}>
      <div css={styleHeader}>
        <Link
          href="/"
          aria-label="Amir Ardalan Logo"
        >
          <button css={styleLogoButton}>
            <Logo /> 
          </button>
        </Link>
        <div className="headerRight">
          <Navigation />
          <ToggleTheme />
        </div>
      </div>
      <BlogAdmin />
    </div>
  )

}

export default Header