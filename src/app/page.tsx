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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("General");

  const openModal = (source: string) => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      
      <main className="flex-grow">
        <Hero onOpenModal={openModal} />
        <SectionDivider />
        <ProductCatalog onOpenModal={openModal} />
        <SectionDivider />
        <Pain />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <Solutions onOpenModal={openModal} />
        <SectionDivider />
        <VideoDemo />
        <SectionDivider />
        <RoiCalculator onOpenModal={openModal} />
        <SectionDivider />
        <CTA onOpenModal={openModal} />
      </main>

      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal} source={modalSource} />
    </>
  );
}
