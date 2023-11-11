import { Key } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { css } from '@emotion/react';

import Container from '@/components/Container';
import Avatar from '@/components/Avatar';
import { CtaButtons, ContactButton } from '@/components/CtaButtons';
import SocialIcons from '@/components/SocialIcons';
import CertificationBadges from '@/components/CertificationBadges';
import Timeline from '@/components/Timeline';

import { aboutContent, timelineContent } from '@/data/content';
import { AboutTypes, TimelineContentTypes } from '@/types/about';
import { CtaButtonsTypes, ContactButtonTypes } from '@/types/button';
import { SocialIconsTypes } from '@/types/icons';
import { TimelineTypes } from '@/types/about';
import { CertificationTypes } from '@/types/certifications';

type AboutPageProps = {
  about: AboutTypes & SocialIconsTypes & CtaButtonsTypes & ContactButtonTypes & CertificationTypes;
  timeline: TimelineTypes & TimelineContentTypes;
};

const About: NextPage<AboutPageProps> = ({ about, timeline }) => {
  const styleAbout = {
    hr: {
      borderTop: '1px dotted var(--color-accent-gray)',
      '@media (max-width: 768px)': {
        margin: 0,
        paddingTop: '3rem',
      },
    },
  };

  const styleGridWrapper = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    gridAutoRows: 'minmax(100px, auto)',
    '@media(max-width: 1280px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media(max-width: 768px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
    '.grid': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'var(--color-bg)',
      background: 'var(--color-accent)',
      padding: '2rem',
      lineHeight: '1.8rem',
      '&:first-of-type': {
        border: 'transparent',
        background: 'var(--color-gradient)',
        padding: '2rem',
        '.bioSubHeading': {
          margin: '1rem 0',
          color: 'var(--color-light)',
          lineHeight: '1.2rem',
        },
        '.blurb': {
          fontFamily: 'var(--font-tertiary)',
          fontStyle: 'italic',
          color: 'var(--color-light)',
          '@media(max-width: 768px)': {
            fontSize: 18,
          },
        },
        '.divider': {
          borderBottom: '2px dotted var(--color-light)',
          opacity: '.2',
          paddingBottom: '1rem',
          marginBottom: '1.5rem',
        },
        '.ctaButton': {
          background: 'var(--color-light)',
          color: 'var(--color-dark)',
          '@media(min-width: 1025px)': {
            '&:hover': {
              background: 'transparent',
              border: '2px solid var(--color-light)',
              color: 'var(--color-light)',
            },
          },
        },
      },
      h3: {
        fontFamily: 'var(--font-secondary)',
      },
      ul: {
        width: '100%',
      },
      'ul li': {
        color: 'var(--color-gray)',
        strong: {
          color: 'var(--color-heading)',
          fontFamily: 'var(--font-secondary)',
        },
      },
      'a:hover': {
        textDecoration: 'none',
      },
      '.skills': {
        li: {
          fontSize: 14,
          fontFamily: 'var(--font-secondary)',
          '&:first-of-type': {
            '&:before': {
              content: '" "',
            },
          },
          '&:before': {
            content: '"• "',
          },
        },
      },
      '.experience': {
        fontFamily: 'var(--font-secondary)',
        li: {
          marginBottom: '1.2rem',
          '@media(min-width: 769px)': {
            fontSize: 16,
          },
        },
      },
      '.availability': {
        color: 'var(--color-heading)',
        fontSize: 18,
        fontFamily: 'var(--font-secondary)',
        '.subheading': {
          marginTop: '1.5rem',
          li: {
            fontFamily: 'var(--font-secondary)',
            borderBottom: '1px solid var(--color-accent-gray)',
            paddingBottom: '.5rem',
            '&:first-of-type, &:last-of-type': {
              padding: 0,
              borderBottom: 'none',
            },
          },
        },
      },
      '@media(max-width: 768px)': {
        background: 'none',
        border: 'none',
        padding: 0,
        margin: '1rem 0',
        '.availability .subheading': {
          marginTop: '1.5rem',
        },
      },
    },
    'h2, h3': {
      fontWeight: 700,
    },
    h2: {
      color: 'var(--color-heading)',
      fontSize: 24,
      paddingBottom: '.25rem',
    },
    h3: {
      marginBottom: '1.5rem',
      paddingBottom: '1rem',
      fontSize: 24,
      color: 'var(--color-heading)',
      borderBottom: '2px solid var(--color-primary)',
    },
  });
  const styleBioItems = css({
    li: {
      marginBottom: '1rem',
      '&:last-of-type': {
        marginBottom: 0,
      },
    },
  });
  const styleSocialIconsWrapper = css({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  });
  const styleSocialIcons = css({
    display: 'flex',
    flexDirection: 'row',
    button: {
      marginRight: '1.5rem',
      '&:last-of-type': {
        marginRight: 0,
      },
    },
    svg: {
      fill: 'var(--color-heading)',
      '@media (min-width: 769px)': {
        '&:hover': {
          fill: 'var(--color-primary)',
        },
      },
    },
  });

const styleCertificationBadges = css({
  '.certification-grid': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px', // Adjust the gap to your liking
    justifyContent: 'center', // This will center the items in the row
  },
  '.certification-item': {
    flex: '1 0 calc(33.333% - 16px)', // Adjust the width for 3 per row, subtracting the gap
    display: 'flex',
    justifyContent: 'center', // Center the image in the flex item
    flexDirection: 'column', // Stack the image and text vertically
    alignItems: 'center', // Center-align the items horizontally
  },
  '.certification-item a': {
    maxWidth: '100px', // Adjust the size to your liking
    display: 'block',
  },
  '.certification-item img': {
    maxWidth: '100%',
    height: 'auto',
  },
  '.certification-item span': {
    textAlign: 'center', // Center-align the text
    fontSize: '0.75rem', // Smaller font size; adjust as needed
    display: 'block', // Ensure the span takes the full width available
    width: '100%', // Ensure it takes up the full width of its parent
  },
});

  const styleAvailability = css({
    h4: {
      fontFamily: 'var(--font-secondary)',
      fontStyle: 'normal',
      fontSize: 16,
      color: 'var(--color-text)',
      marginBottom: '1rem',
    },
    li: {
      fontFamily: 'var(--font-tertiary)',
      fontStyle: 'normal',
      fontSize: 13,
      fontWeight: 400,
      lineHeight: '1.2rem',
      marginBottom: '.5rem',
    },
  });

  interface Items {
    map: Function;
  }

  const generateListItems = (items: Items) => {
    return items.map((item: string, i: Key) => {
      return <li key={i}>{item}</li>;
    });
  };

  return (
    <Container
      title={about.meta.title}
      description={about.meta.description}
      robots="follow, index"
    >
      <main className="about" css={styleAbout}>
        <h1 className="pageHeading">{about.heading}</h1>
        <div css={styleGridWrapper}>
          <div className="grid">
            <div css={styleBioItems}>
              <div className="avatar">
                <Avatar height={90} width={90} avatar={about.avatar} />
              </div>
              <h2 aria-label={about.bio.subheading} className="bioSubHeading">
                {about.bio.subheading}
              </h2>
              <p className="blurb">{about.bio.content}</p>
              <div className="divider" />
              <CtaButtons items={about.bio.items} />
            </div>
          </div>
          <div className="grid">
            <ul className="skills">
              <li>
                <h3 aria-label={about.skills.title}>{about.skills.title}</h3>
              </li>
              <h1>Skills</h1>
              {generateListItems(about.skills.items)}
            </ul>
            <ul className="skills">
              <li>
                <h3 aria-hidden="true">&nbsp;</h3>
              </li>
              <h1>Data Stack</h1>
              {generateListItems(about.datastack.items)}
            </ul>
            <ul className="skills">
              <li>
                <h3 aria-hidden="true">&nbsp;</h3>
              </li>
              <h1>Web Stack</h1>
              {generateListItems(about.webstack.items)}
            </ul>
          </div>
          <div className="grid">
            <ul className="experience">
              <li>
                <h3 aria-label={about.experience.title}>
                  {about.experience.title}
                </h3>
              </li>
              {generateListItems(about.experience.items)}
            </ul>
          </div>
          <div className="grid" id="certifications" >
            <ul css={styleCertificationBadges}>
              <li>
                <h3 aria-label={about.certifications.title}>
                  {about.certifications.title}
                </h3>
              </li>
              <li>
                <CertificationBadges about={about} />
              </li>
            </ul>
          </div>
          <div className="grid">
            <div css={styleSocialIconsWrapper}>
              <ul>
                <li>
                  <h3>{about.social.title}</h3>
                </li>
                <li css={styleSocialIcons}>
                  <SocialIcons about={about} />
                </li>
              </ul>
            </div>
          </div>
          <div className="grid" id="contact">
            <ul>
              <li>
                <h3 aria-label={about.contact.title}>{about.contact.title}</h3>
              </li>
              <li>
                <ContactButton content={about} />
              </li>
            </ul>
          </div>
        </div>
        <hr id="timeline" />
        <Timeline timeline={timeline} />
      </main>
    </Container>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  return { props: { about: aboutContent, timeline: timelineContent } };
};
