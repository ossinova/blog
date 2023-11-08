import React, { FC } from 'react';
import { css } from '@emotion/react';
import { useRouteStatus } from '@/hooks/useLoadingIndicator';

type LogoProps = {
  animate: boolean;
  size: number;
  color: string;
};

const Logo: FC<LogoProps> = ({ animate, size, color }) => {
  const isLoading = useRouteStatus();

  const animationStyle = css({
    animation: isLoading
      ? 'rotate360 2s infinite ease-in-out'
      : 'rotateToStart 2s ease-out',
    animationFillMode: isLoading ? 'none' : 'reverse',
    '@keyframes rotate360': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    '@keyframes rotateToStart': {
      '100%': { transform: 'rotate(360deg)' },
    },
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 33"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      css={animate ? animationStyle : null}
    >
      <path d="M 8.996094 6 L 6 6 L 6 26.992188 L 8.996094 26.992188 Z M 20.992188 6 C 22.984375 6 24.988281 6 26.992188 6 L 26.992188 26.992188 L 23.988281 26.992188 L 23.988281 8.996094 L 20.992188 8.996094 L 20.992188 29.984375 L 29.984375 29.984375 L 29.984375 2.996094 L 20.992188 2.996094 Z M 17.988281 32.980469 L 17.988281 0 L 32.980469 0 L 32.980469 32.980469 Z M 2.996094 29.984375 L 11.996094 29.984375 L 11.996094 2.996094 L 2.996094 2.996094 Z M 0 32.980469 L 0 0 C 4.996094 0 9.996094 0 14.992188 0 L 14.992188 32.980469 Z M 0 32.980469 " />
      {/* <path d="M118.424 133L0 14.5759L14.5759 0L133 118.424L118.424 133Z" />
      <path d="M3.15623e-05 118.424L118.424 0L133 14.5759L14.5759 133L3.15623e-05 118.424Z" />
      <path d="M66.6821 0L80.2903 13.6082L66.6821 27.2165L53.0738 13.6082L66.6821 0Z" />
      <path d="M66.6821 105.678L80.2903 119.287L66.6821 132.895L53.0738 119.287L66.6821 105.678Z" /> */}
    </svg>
  );
};

export default React.memo(Logo);
