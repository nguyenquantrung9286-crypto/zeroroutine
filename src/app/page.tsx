"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Pain } from "@/components/sections/Pain";
import { Solutions } from "@/components/sections/Solutions";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { CTA } from "@/components/sections/CTA";
import { Modal } from "@/components/ui/Modal";

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
        <Pain />
        <Solutions onOpenModal={openModal} />
        <RoiCalculator onOpenModal={openModal} />
        <CTA onOpenModal={openModal} />
      </main>

      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal} source={modalSource} />
    </>
  );
}
