import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

const CanvasTerrain = () => {
  const modelRef = useRef();
  const { scene } = useGLTF('/avatar/your_avatar.glb');
  // const { camera } = useThree();

  // useEffect(() => {
  //   if (modelRef.current) {
  //     // Adjust the camera to look at the model
  //     camera.lookAt(modelRef.current.position);
  //   }
  // }, [camera, modelRef]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const rotationAngle = Math.sin(elapsedTime) * 0.50;
    if (modelRef.current) {
      modelRef.current.rotation.y = rotationAngle;
    }
  });

  const scaleFactor =  4; // Adjust this value as needed
  const yOffset = -2;
  return <primitive object={scene} ref={modelRef} scale={[scaleFactor, scaleFactor, scaleFactor]} position={[0, yOffset, 0]} />;
};

export default CanvasTerrain;
