"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import Header from "../components/header"
import { CurvedArrow } from "../components/curved-arrow"

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

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
  )
}

export default function ProjectsPage() {
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
          <section className="space-y-12">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">My Art</h1>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Featured Projects */}
              <Link href="#" className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-muted">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2012.04.45-SXxZLWnYQJCRu6UudyRwfot3LfbaWQ.png"
                    alt="Tost branding"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4 flex items-start gap-2">
                  <CurvedArrow />
                  <p className="text-lg">Branding for Tost, a popular brunch spot in LA</p>
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
                  <CurvedArrow />
                  <p className="text-lg">Poster for La SSo, a bar in downtown NYC</p>
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
                  <CurvedArrow />
                  <p className="text-lg">Poster for Des Lunes Film Society</p>
                </div>
              </Link>
            </div>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mt-24 space-y-12">
            <div className="space-y-4">
              <p className="font-serif text-3xl md:text-4xl max-w-2xl">Art speaks where words are unable to explain.</p>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl">More of My Work</h2>
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
                  <CurvedArrow />
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
                  <CurvedArrow />
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
                  <CurvedArrow />
                  <p className="text-lg">Blog</p>
                </div>
              </Link>
            </div>
          </section>
        </FadeInWhenVisible>
      </main>
    </motion.div>
  )
}

