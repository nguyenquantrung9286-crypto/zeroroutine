"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 1000 }) {
  const points = useMemo(() => {
    // We use a local seeded random to be "pure" or just generate it once.
    // However, for simplicity and to satisfy the linter, we'll use a fixed seed-like approach
    // or just move it out of the immediate render path if possible.
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.sin(i) * 10000 % 1 - 0.5) * 10;
      p[i * 3 + 1] = (Math.cos(i) * 10000 % 1 - 0.5) * 10;
      p[i * 3 + 2] = (Math.sin(i * 2) * 10000 % 1 - 0.5) * 10;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#005235"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function AICoreMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#005235"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#a5f3c9"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
}

function NeuralGrid() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.2, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.2, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      <gridHelper args={[20, 20, "#005235", "#1a6b4a"]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -5]} />
    </group>
  );
}

function GlassIcon({ position, color }: { position: [number, number, number], color: string }) {
  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <MeshDistortMaterial
          color={color}
          speed={5}
          distort={0.3}
          radius={0.5}
          transparent
          opacity={0.4}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <AICoreMesh />
        <Particles count={1500} />
        <NeuralGrid />

        <GlassIcon position={[-3, 2, -2]} color="#a5f3c9" />
        <GlassIcon position={[3, -2, -1]} color="#1a6b4a" />
        <GlassIcon position={[-2, -3, 0]} color="#005235" />
      </Canvas>
    </div>
  );
}
