import { FC } from 'react';
import Link from 'next/link';
import { CtaButtonsTypes } from '@/types/button';
import { css } from '@emotion/react';

type CtaButtonsProps = {
  items: CtaButtonsTypes['items'];
};

const styleCtaButton = css({
  '&:not(:only-of-type):not(:last-of-type)': {
    marginRight: '.6rem',
  },
  '.ctaButton': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '1.3rem',
    minWidth: 128,
    minHeight: 42,
    maxWidth: 'fit-content',

    background: 'var(--color-heading)',
    border: '1px solid transparent',
    borderRadius: 50,
    fontSize: 15,
    fontFamily: 'var(--font-secondary)',
    letterSpacing: 1,
    color: 'var(--color-bg)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    'span.none': {
      display: 'none',
    },
    '&:hover': {
      background: 'transparent',
      border: '1px solid var(--color-primary)',
      color: 'var(--color-primary)',
      textDecoration: 'none',
      '@media(min-width: 1025px)': {
        '&.download:after': {
          background: 'var(--icon-download-light) no-repeat',
          backgroundSize: 'contain',
        },
      },
    },
    '&.reverse': {
      background: 'transparent',
      border: '1px solid var(--color-heading)',
      color: 'var(--color-heading)',
      '&:hover': {
        background: 'transparent',
        border: '1px solid var(--color-primary)',
        color: 'var(--color-primary)',
        '@media(min-width: 1025px)': {
          '&.download:after': {
            background: 'var(--icon-download-light) no-repeat',
            backgroundSize: 'contain',
          },
        },
      },
    },
    '@media(max-width: 1024px)': {
      '&:hover': {
        background: 'var(--color-heading)',
        border: '1px solid transparent',
        color: 'var(--color-bg)',
      },
      '&.reverse:hover': {
        background: 'transparent',
        border: '1px solid var(--color-heading)',
        color: 'var(--color-heading)',
      },
    },
    '@media(max-width: 480px)': {
      marginRight: 0,
      '.home &: nth-of-type(1)': {
        marginRight: 10,
      },
      width: '100%',
    },
  },
});

const CtaButtons: FC<CtaButtonsProps> = ({ items }) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i} css={styleCtaButton}>
          <Link
            href={item.path}
            aria-label={item.title}
            className={`ctaButton ${item.style === 'reverse' ? 'reverse' : ''}`}
            target={item.target}
            rel={item.rel}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default CtaButtons;
