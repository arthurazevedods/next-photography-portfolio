import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";

import Image from "next/image";
import ServicesComponent from "@/components/ServicesComponent/ServicesComponent";

export default function Home() {
  return (
    <main >
      <Hero />
      <Features />
      <ServicesComponent />
    </main>
  );
}
