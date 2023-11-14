import React, { FC } from 'react';

type ImageProps = {
  title: string;
  imageUrl: string;
  size?: number; // Optional size prop to control the image size if needed
};

const Image: FC<ImageProps> = ({ title, imageUrl, size }) => {
  return (
    <img
      src={imageUrl}
      alt={title}
      title={title}
      width={size} // If size is provided, it will set width and height to that size
      height={size} // If you need different width and height, you can add separate props
      style={{ display: 'block', maxWidth: '100%', height: 'auto' }} // Ensures image is responsive
    />
  );
};

export default Image;