"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  distance?: number;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  distance = 0.4,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    };

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const moveX = (clientX - centerX) * distance;
    const moveY = (clientY - centerY) * distance;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className="inline-block"
    >
      <div className={className} onClick={onClick}>
        {children}
      </div>
    </motion.div>
  );
}
