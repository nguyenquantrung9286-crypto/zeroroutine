"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";

function Assistant() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime();
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[0.6, 64, 64]}>
        <MeshDistortMaterial
          color="#a5f3c9"
          speed={4}
          distort={0.5}
          radius={0.6}
          emissive="#005235"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
}

export function Assistant3D() {
  return (
    <div className="fixed bottom-10 right-10 w-32 h-32 z-[100] pointer-events-none hidden lg:block">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <Assistant />
      </Canvas>
      <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full -z-10 animate-pulse" />
    </div>
  );
}
