import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sky, Stars } from '@react-three/drei';

function FloatingOrb({ color }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.01;
    ref.current.position.y = 1 + Math.sin(clock.getElapsedTime() * 0.6) * 0.25;
  });
  return (
    <mesh ref={ref} position={[0, 1, -2]}>
      <sphereGeometry args={[0.7, 64, 64]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} metalness={0.3} roughness={0.2} />
    </mesh>
  );
}

function Plant({ pos = [0, 0, 0], col = '#7bf7b2' }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.002;
    ref.current.position.y = 0.2 + Math.sin(clock.getElapsedTime() * 0.5 + pos[0]) * 0.08;
  });
  return (
    <mesh ref={ref} position={pos}>
      <coneGeometry args={[0.22, 0.8, 12]} />
      <meshStandardMaterial color={col} />
    </mesh>
  );
}

export default function CanvasScene({ world }) {
  const [orbColor, setOrbColor] = useState('#66ffcc');
  const [sky, setSky] = useState({ sunX: 0, sunY: 1, water: '#071127' });

  useEffect(() => {
    if (world) {
      const p = (world.prompt || '').toLowerCase();
      if (p.includes('forest')) { setOrbColor('#78ff9b'); setSky({ sunX: -0.2, sunY: 1.0, water: '#123a1e' }); }
      else if (p.includes('ocean')) { setOrbColor('#66d4ff'); setSky({ sunX: 0.5, sunY: 1.3, water: '#044b6f' }); }
      else if (p.includes('sun')) { setOrbColor('#ffd27f'); setSky({ sunX: 1.0, sunY: 1.5, water: '#b86f2b' }); }
      else { setOrbColor('#9bf'); setSky({ sunX: 0.4, sunY: 0.9, water: '#06202a' }); }
    }
  }, [world]);

  return (
    <Canvas camera={{ position: [0, 2.5, 6], fov: 55 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Sky sunPosition={[sky.sunX, sky.sunY, 0]} turbidity={6} mieCoefficient={0.005} mieDirectionalG={0.7} />
      <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade />
      <FloatingOrb color={orbColor} />
      <Plant pos={[-1.6, 0, -1]} col={'#76ffb8'} />
      <Plant pos={[1.6, 0, -1]} col={'#8bd3ff'} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color={sky.water} metalness={0.35} roughness={0.6} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
