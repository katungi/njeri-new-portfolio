"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "./components/header";
import { ServicesSection } from "./components/services-section";
import { ToolsSection } from "./components/tools-section";
import { ScrollIndicator } from "./components/scroll-indicator";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  const { resolvedTheme } = useTheme();
  const theme = useTheme();

  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    console.log("Resolved Theme:", resolvedTheme);
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section className=" flex items-center">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-[800px] md:w-[500px] shrink-0">
              <Image
                src="/images/kamtu.png"
                alt="Mascot character with laptop"
                width={900}
                height={900}
                priority
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 mt-48">
              <BlurFade delay={0.25} inView>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none md:text-5xl">
                  Helping Brands Be Seen Through Real, Beautiful Storytelling
                </h2>
              </BlurFade>
              <BlurFade delay={0.25 * 2} inView>
                <span className="text-muted-foreground text-lg tracking-tighter sm:text-3xl xl:text-4xl/none">
                  Communications and PR Specialist based in Nairobi, Kenya
                </span>
              </BlurFade>

              <Link href="/about">
                <Button size="lg" className="rounded-full text-lg px-8 mt-7">
                  About Me
                </Button>
              </Link>
              <ScrollIndicator />
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <ToolsSection />
      <div className="min-h-[500px] dark:bg-black text-white flex flex-col justify-between p-8 md:p-16">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight dark:text-white text-black">
            Reach Out
            <br />
            to Me
          </h1>

          <div className="flex flex-col gap-4 mt-12">
            <a
              href="mailto:your.email@example.com"
              className="group flex items-center gap-4 text-xl hover:text-gray-600 dark:hover:text-gray-600 transition-colors duration-300"
            >
              <Mail className="w-6 h-6 text-black dark:text-white" />
              <span className="border-b border-transparent group-hover:border-black dark:group-hover:border-black text-black dark:text-white">
                Email
              </span>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-xl hover:text-gray-600 dark:hover:text-gray-600 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6 text-black dark:text-white" />
              <span className="border-b border-transparent group-hover:border-black dark:group-hover:border-black text-black dark:text-white">
                LinkedIn
              </span>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>

        <div className="mt-12">
          <button
            className=" text-white dark:text-black px-8 py-4 rounded-full text-lg font-medium bg-black dark:bg-white
                     hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors duration-300 
                     hover:scale-105 transform "
          >
            Let's collaborate
          </button>
        </div>
      </div>
    </div>
  );
}
