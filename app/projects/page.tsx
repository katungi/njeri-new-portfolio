"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import Header from "../components/header";
import { CurvedArrow } from "../components/curved-arrow";
import { EventDetail } from "../components/event-detail";

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const events = {
  title: "Events",
  height: "h-[400px]",
  items: [
    {
      title: "Open Digital Health Summit 2024",
      subtitle: "Connecting Minds, Transforming Health",
      image: "/images/events/odhs.jpeg",
      description:
        "A vibrant three-day gathering that brought together brilliant minds to tackle the challenges of digital health.",
      role: "Communications Lead, Event Manager",
      duration: "3 months (September - December 2024)",
      methods: [
        "Communication planning",
        "branding and design",
        "email marketing",
        "social media engagement",
        "content creation",
        "media outreach",
        "storytelling",
      ],
      tools: [
        "Notion",
        "Loops",
        "Google Sheets",
        "Google Docs",
        "Google Meet",
        "Google Forms",
      ],
      logo: "/images/events/odhs.jpeg",
    },
    {
      title: "OpenMRS Global Implementers Conference",
      image: "/images/events/openmrs.jpeg",
    },
    {
      title: "Kenya WHO SMART Guidelines Community of Practice",
      image: "/images/events/smart.jpeg",
    },
    {
      title: "Global Digital Health Watch Party",
      image: "/images/events/gdhf.jpeg",
    },
  ],
};

export default function ProjectsPage() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-foreground transition-colors duration-300"
    >
      <Header />

      <main className="container mx-auto px-4 py-12 md:py-24">
        <FadeInWhenVisible>
          <AnimatePresence mode="wait">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-muted-foreground mb-16">
              {events.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {events.items.map((item, index) => (
                <div
                  className="group cursor-pointer"
                  onClick={() => setSelectedEvent(item)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={500}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="mt-4 flex items-start gap-2">
                    <div className="w-8 h-8">
                      <CurvedArrow />
                    </div>
                    <h4 className="mt-2 text-lg font-medium">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </AnimatePresence>

          <AnimatePresence>
            {selectedEvent && <EventDetail event={selectedEvent} />}
          </AnimatePresence>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <section className="space-y-12">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">
              My Art
            </h1>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Featured Projects */}
              <Link href="https://www.figma.com/proto/vcOekZoKSYAn3mOrZSAsv7/Bud-App?node-id=1-2&p=f&t=K8002NiYDrdl3NbH-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-muted">
                  <Image
                    src="/images/buds.png"
                    alt="Buds app"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4 flex items-start gap-2">
                  <div className="w-12 h-12">
                    <CurvedArrow />
                  </div>
                  <p className="text-lg">
                    Buds app - an app for taking care of your plants 
                  </p>
                </div>
              </Link>

              <Link href="#" className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-muted">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2012.04.45-SXxZLWnYQJCRu6UudyRwfot3LfbaWQ.png"
                    alt="La SSo poster"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4 flex items-start gap-2">
                  <div className="w-12 h-12">
                    <CurvedArrow />
                  </div>
                  <p className="text-lg">
                    Poster for La SSo, a bar in downtown NYC
                  </p>
                </div>
              </Link>

              <Link href="#" className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-muted">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2012.04.45-SXxZLWnYQJCRu6UudyRwfot3LfbaWQ.png"
                    alt="Des Lunes Film Society poster"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4 flex items-start gap-2">
                  <div className="w-12 h-12">
                    <CurvedArrow />
                  </div>
                  <p className="text-lg">Poster for Des Lunes Film Society</p>
                </div>
              </Link>
            </div>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mt-24 space-y-12">
            <div className="space-y-4">
              <p className="font-serif text-3xl md:text-4xl max-w-2xl">
                Art speaks where words are unable to explain.
              </p>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl">
                More of My Work
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Additional Work Categories */}
              <Link href="#" className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-muted">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2012.04.45-SXxZLWnYQJCRu6UudyRwfot3LfbaWQ.png"
                    alt="Designs"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4 flex items-start gap-2">
                  <div className="w-12 h-12">
                    <CurvedArrow />
                  </div>
                  <p className="text-lg">Designs</p>
                </div>
              </Link>

              <Link href="#" className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-muted">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2012.04.45-SXxZLWnYQJCRu6UudyRwfot3LfbaWQ.png"
                    alt="Publications"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4 flex items-start gap-2">
                  <div className="w-12 h-12">
                    <CurvedArrow />
                  </div>
                  <p className="text-lg">Publications</p>
                </div>
              </Link>

              <Link href="#" className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-muted">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2012.04.45-SXxZLWnYQJCRu6UudyRwfot3LfbaWQ.png"
                    alt="Blog"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4 flex items-start gap-2">
                  <div className="w-12 h-12">
                    <CurvedArrow />
                  </div>
                  <p className="text-lg">Blog</p>
                </div>
              </Link>
            </div>
          </section>
        </FadeInWhenVisible>
      </main>
    </motion.div>
  );
}
