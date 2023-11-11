import React, { FC, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import CanvasTerrain from '@/components/CanvasTerrain'; // Make sure the path is correct

const CanvasLoader: FC = () => {
  const [pixelRatio, setPixelRatio] = useState<number>(1);

  useEffect(() => {
    // This ensures that window is accessed only on the client side
    setPixelRatio(window.devicePixelRatio);

    // Handle resize events to update the pixel ratio
    const handleResize = () => {
      setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas dpr={pixelRatio}>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CanvasTerrain />
    </Canvas>
  );
};

export default CanvasLoader;
