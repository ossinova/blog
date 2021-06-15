import { css, useTheme } from '@emotion/react'
import { footer } from '@/data/content'
import { nav } from '@/data/navigation'
import Link from 'next/link'
import Image from 'next/image'

import NowPlayingCompact from '@/components/NowPlayingCompact'

export default function Footer() {
  const theme: any = useTheme()

  const styleFooterWrapper = css({
    marginTop: '6rem',
    padding: '4rem 4rem 1rem 4rem',
    backgroundColor: 'var(--color-accent-color)',
    '@media(max-width: 1024px)': {
      marginTop: '4rem',
      padding: '3.5rem 2.5rem 1rem 2.5rem',
    },
    '@media(max-width: 480px)': {
      padding: '3rem 1.5rem 1rem 1.5rem',
    }
  })
  const styleFooter = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '3rem',
    gridAutoRows: 'minmax(100px, auto)',
    '@media(max-width: 890px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media(max-width: 480px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
    flexDirection: 'column',
    fontFamily: 'var(--font-secondary)',
    fontSize: 16,
    color: 'var(--color-bg)',
    lineHeight: '1.8em',
    '.grid': {
      marginBottom: '1rem',
      '@media(max-width: 480px)': {
        marginBottom: 0,
      },
    },
    'a': {
      textDecoration: 'none',
      color: 'var(--color-bg)',
      '&.spotify': {
        display: 'none',
        height: 20,
        width: 20,
        marginTop: '.5rem',
        background: 'var(--icon-spotify-footer) no-repeat',
        backgroundSize: 20,
      }
    },
    h5: {
      // width: '90%',
      marginBottom: '1rem',
      paddingBottom: '1rem',
      lineHeight: '1rem',
      borderBottom: '2px solid var(--color-bg)',
      textTransform: 'uppercase',
      fontSize: 10,
      '@media(max-width: 600px)': {
        width: '100%',
      }
    },
    '.nowPlaying': {
      paddingTop: '.2rem',
      lineHeight: '1.3rem',
    }
  })
  const styleFooterLogo = css({
    display: 'flex',
    padding: '4rem 0 2rem 0',
  })
  const styleCopyright = css({
    fontFamily: 'var(--font-secondary)',
    fontSize: 10,
    color: 'var(--color-bg)',
    lineHeight: '1.2rem',
    display: 'flex',
    alignSelf: 'end',
  })
  const styleFooterNav= css({
    display: 'flex',
    flexDirection: 'column',
  })

  const generateFooterLinks = (items: Array<any>) => {
    return items.map((items, i) => {
      return (
        <li>
          <a
            key={i}
            href={items.path}
            aria-label={items.title}
            target={items.target}
            rel={items.rel}
            className={items?.cName}
          >
            {items.title}
          </a>
        </li>
      )
    })
  }

  return (
    <>
      <footer css={styleFooterWrapper}>
        <div css={styleFooter}>
          <div className="grid">
            <ul>
              <NowPlayingCompact />
            </ul>
          </div>
          <div css={styleFooterNav} className="grid">
            <h5>{footer.headings.nav}</h5>
            <ul>
              {nav.map((item: any, index: number) => {
                return (
                  <li>
                    <Link
                      href={item.path}
                      aria-label={item.title}
                      key={index}
                    >
                      <a
                        className={item.cName}
                      >
                      {item.title}
                      </a>
                    </Link>
                  </li>
                )}
              )}
            </ul>
          </div>
          <div className="grid">
            <h5>{footer.headings.social}</h5>
            <ul>
              {generateFooterLinks(footer.social)}
            </ul>
          </div>
          <div className="grid">
            <h5>{footer.headings.poweredby}</h5>
            <ul>
              {generateFooterLinks(footer.poweredby)}
            </ul>
          </div>
        </div>
        <div css={styleFooterLogo}>
          <Image
            src={theme.logoFooter}
            height={75}
            width={75}
            alt="Logo"
          />
        </div>
        <div css={styleCopyright}>
          <div>
            {footer.copyright.text} {(new Date().getFullYear())} – {footer.copyright.name}
          </div>
        </div>
      </footer>
    </>
  )
}