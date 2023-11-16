import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { css } from '@emotion/react';

import Container from '@/components/Container';
import TypingAnimation from '@/components/TypingAnimation';
import FeaturedPost from '@/components/FeaturedPost';
import { CtaButtons } from '@/components/CtaButtons';

import { homeContent } from '@/data/content';
import { HomeTypes } from '@/types/home';
import { CtaButtonsTypes } from '@/types/button';
import PersonalIntroduction from '@/components/PersonalIntroduction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer } from '@fortawesome/free-solid-svg-icons';

import { GetStaticProps } from 'next';
import prisma from '@/lib/prisma';


const CanvasLoader = dynamic(() => import('@/components/CanvasLoader'), {
  ssr: true,
});



export const getStaticProps: GetStaticProps = async () => {
  try {
    const [featuredPost, latestPost] = await prisma.$transaction([
      prisma.post.findFirst({
        where: { featured: true, published: true },
        select: { title: true, teaser: true, slug: true },
      }),
      prisma.post.findFirst({
        where: { published: true },
        orderBy: { publishedAt: 'desc' },
        select: { title: true, teaser: true, slug: true },
      }),
    ]);
    return {
      props: {
        home: homeContent,
        featuredPost: featuredPost,
        latestPost: latestPost,
      },
    };
  } catch {
    return { props: { home: homeContent } };
  }
};

type HomeProps = {
  home: HomeTypes & {
    typed: string;
    title: string;
    items: CtaButtonsTypes['items'];
    meta: {
      title: string;
      description: string;
    };
  };
  featuredPost: any;
  latestPost: any;
};

const Home: NextPage<HomeProps> = ({ home, featuredPost, latestPost }) => {
 
  const styleMain = css({
    display: 'flex',
    '@media (max-width: 890px)': {
      flexDirection: 'column',
    },
  });

  const styleMainLeft = css({
    padding: '0 2rem 0 0',
    animation: 'fadeIn .8s forwards',
    '@media (max-width: 890px)': {
      flexDirection: 'column-reverse',
    },
    '@media (max-width: 480px)': {
      padding: 0,
    },
  });

  const styleContent = css({
    '.titleWrapper': {
      marginBottom: '3rem',
      '@media(max-width: 480px)': {
        marginBottom: '2rem',
      },
    },
    '.intro, .typed': {
      display: 'block',
      margin: '2rem 0',
    },
    '.typed': {
      '&:before': {
        content: '"> ~ % "',
        color: 'var(--color-primary)',
      },
      '@media(max-width: 480px)': {
        fontSize: 13,
      },
    },
    h1: {
      lineHeight: '100%',
      fontFamily: 'var(--font-secondary)',
      fontSize: 'calc(3.5vw + 3.5vh)',
      fontWeight: 700,
      WebkitMarqueeIncrement: '0vw',
    },
    h2: {
      lineHeight: '100%',
      marginTop: '1rem',
      fontFamily: 'var(--font-secondary)',
      fontSize: 'calc(1.5vw + 1.5vh)',
      WebkitMarqueeIncrement: '0vw',
      color: 'var(--color-gray)',
    },
  });

  const styleCtaButtons = css({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '1rem',
  });

  const styleMainRight = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '72vh',
    '@media (max-width: 890px)': {
      height: '45vh',
      marginTop: '2rem',
    },
    '@media (max-width: 900px)': { // Adjust this value based on your mobile breakpoint
      display: 'none', // Hide the canvas loader on mobile devices
    },
  });

  

  return (
    <Container
      title={home.meta.title}
      robots="follow, index"
      description={home.meta.description}
    >
      <main css={styleMain} className="home">
        <div css={styleMainLeft} className="animationWrapper">
          <div css={styleContent}>
            <div className="titleWrapper">
              <span className="typed" aria-hidden="true">
                <TypingAnimation data={home.typed} />
              </span>
              <h1>{home.title}</h1>
              <h2>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 249" fill="var(--color-text)">
              <path d="m47.522 170.287 11.172 76.681h138.612l11.172-76.681H47.522zM128 215.249c-5.748 0-10.407-3.063-10.407-6.84s4.659-6.84 10.407-6.84 10.407 3.062 10.407 6.84-4.659 6.84-10.407 6.84zm105.315 17.805h-26.028l10.292-70.639H38.421l10.292 70.639H22.685c-14.848 0-24.85-15.195-18.978-28.834l36.809-85.489a45.26 45.26 0 0 1 41.571-27.362h14.486l22.885 34.061 4.665-22.254-7.809-11.807h23.491l-7.81 11.807 4.655 22.098 22.78-33.905h14.486a45.26 45.26 0 0 1 41.571 27.362l36.808 85.489c5.87 13.638-4.131 28.834-18.98 28.834zM128 2.033c22.496 0 40.733 18.237 40.733 40.733S150.496 83.498 128 83.498 87.267 65.261 87.267 42.765 105.504 2.033 128 2.033z"/></svg> */}
              Senior Data Engineer
              </h2>
              </div>
            </div>
            {/* <div css={styleMyInfo}>
              <PersonalIntroduction  />
          </div> */}
            <div css={styleCtaButtons}>
              <CtaButtons items={home.items} />
            </div>
            <FeaturedPost
              home={home}
              featuredPost={featuredPost}
              latestPost={latestPost}
            />
        </div>
        <div css={styleMainRight} className="animationWrapper">
          <CanvasLoader />
        </div>
      </main>
    </Container>
  );
};

export default Home;
