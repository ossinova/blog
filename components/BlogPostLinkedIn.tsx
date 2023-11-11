import { FC } from 'react';
import { css } from '@emotion/react';

type XshareButtonProps = {
  title: string;
  url: string;
  text: boolean;
  size: number;
  color: string;
};

const styleXButton = css({
  display: 'flex',
  alignItems: 'center',
});

const styleXText = css({
  marginLeft: 10,
  textDecoration: 'underline',
  '@media (max-width: 480px)': {
    marginLeft: 5,
  },
});

const XShareButton: FC<XshareButtonProps> = ({
  title,
  url,
  text,
  size,
  color,
}) => {
  const handleXShare = () => {
    const tweetUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <button
      onClick={handleXShare}
      css={styleXButton}
      title="Share on LinkedIn"
      aria-label="Share on LinkedIn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
      >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
      {text ? <span css={styleXText}>Share on LinkedIn</span> : null}
    </button>
  );
};

export default XShareButton;
