"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Pain } from "@/components/sections/Pain";
import { ProductCatalog } from "@/components/sections/ProductCatalog";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Solutions } from "@/components/sections/Solutions";
import { VideoDemo } from "@/components/sections/VideoDemo";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { CTA } from "@/components/sections/CTA";
import { Modal } from "@/components/ui/Modal";
import { SectionDivider } from "@/components/ui/SectionDivider";

import { motion, useScroll, useSpring } from "framer-motion";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Assistant3D } from "@/components/ui/Assistant3D";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("General");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const openModal = (source: string) => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar onOpenModal={openModal} />
      
      <main className="flex-grow">
        <Hero onOpenModal={openModal} />
        <SectionDivider />
        <ProductCatalog onOpenModal={openModal} />
        <SectionDivider />
        <ScrollReveal>
          <Pain />
        </ScrollReveal>
        <SectionDivider />
        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>
        <SectionDivider />
        <ScrollReveal>
          <Solutions onOpenModal={openModal} />
        </ScrollReveal>
        <SectionDivider />
        <ScrollReveal>
          <VideoDemo />
        </ScrollReveal>
        <SectionDivider />
        <RoiCalculator onOpenModal={openModal} />
        <SectionDivider />
        <ScrollReveal>
          <CTA onOpenModal={openModal} />
        </ScrollReveal>
      </main>

      <Footer />

      <Assistant3D />
      <Modal isOpen={isModalOpen} onClose={closeModal} source={modalSource} />
    </>
  );
}
