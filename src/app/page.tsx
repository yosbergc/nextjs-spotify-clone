import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Features } from "@/components/Features/Features";
import { FAQ } from "@/components/FAQ/FAQ";
import { CTA } from "@/components/CTA/CTA";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <FAQ />
      <CTA />
    </>
  );
}
