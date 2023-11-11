import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CanvasTerrain = () => {
  // Specify the type of the ref as THREE.Object3D or a subclass like THREE.Mesh
  const modelRef = useRef<THREE.Object3D>(null);

  const { scene } = useGLTF('/avatar/your_avatar.glb');

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
