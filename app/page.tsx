"use client";
import Image from "next/image";
import Link from "next/link";
import { useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "./components/header";
import { ServicesSection } from "./components/services-section";
import { ToolsSection } from "./components/tools-section";
import { ScrollIndicator } from "./components/scroll-indicator";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-48 md:w-64 shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2011.53.15-rjVIFKEfWKAcH4uSQK45TRj3vTR5NS.png"
                alt="Mascot character with laptop"
                width={400}
                height={400}
                priority
                className="w-full h-auto"
              />
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
              <BlurFade delay={0.25} inView>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none md:text-5xl">
                  Helping Brands Be Seen Through Real, Beautiful Storytelling
                </h2>
              </BlurFade>
              <BlurFade delay={0.25 * 2} inView>
                <span className="text-pretty text-xl tracking-tighter sm:text-3xl xl:text-4xl/none">
                  Communications and PR Specialist based in Nairobi, Kenya
                </span>
              </BlurFade>

              <Link href="/about">
                <Button size="lg" className="rounded-full text-lg px-8">
                  About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <ScrollIndicator />
      </section>
      <ServicesSection />
      <ToolsSection />
    </div>
  );
}
