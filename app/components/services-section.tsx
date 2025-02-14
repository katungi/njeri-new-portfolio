"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { EventDetail } from "./event-detail"

const services = {
  events: {
    title: "Events",
    height: "h-[600px]",
    image: "/images/skills/events.jpg",
    items: [
      {
        title: "Open Digital Health Summit 2024",
        subtitle: "Connecting Minds, Transforming Health",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2012.11.54-91uJdTM7IcrOvj5JKZNzDEz8l7m3lZ.png",
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
        tools: ["Notion", "Loops", "Google Sheets", "Google Docs", "Google Meet", "Google Forms"],
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2012.19.23-T2ilbVXBXok1WtMcD2MB2Y8bf2Q7Rc.png",
      },
      {
        title: "OpenMRS Global Implementers Conference",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2012.11.54-91uJdTM7IcrOvj5JKZNzDEz8l7m3lZ.png",
      },
      {
        title: "Kenya WHO SMART Guidelines Community of Practice",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2012.11.54-91uJdTM7IcrOvj5JKZNzDEz8l7m3lZ.png",
      },
      {
        title: "Global Digital Health Watch Party",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2012.11.54-91uJdTM7IcrOvj5JKZNzDEz8l7m3lZ.png",
      },
    ],
  },
  email: {
    title: "Email Marketing",
    height: "h-[550px]",
    image: "/images/skills/email.jpg",
    items: [
      {
        title: "Campaign Strategy Development",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Newsletter Design",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Automation Setup",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Analytics & Reporting",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  uiux: {
    title: "UI/UX Design",
    height: "h-[500px]",
    image: "/images/skills/ui.jpg",
    items: [
      {
        title: "User Research",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Wireframing",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Prototyping",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "User Testing",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  social: {
    title: "Social Media",
    height: "h-[650px]",
    image: "/images/skills/socials.jpg",
    items: [
      {
        title: "Content Strategy",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Community Management",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Analytics & Growth",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Paid Advertising",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
}

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("events")
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-[-30px]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-16 dark:text-white">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {Object.entries(services).map(([key, service]) => (
            <div key={key} className="space-y-4">
              <h3 className="text-2xl font-serif text-muted-foreground">{service.title}</h3>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => {
                  setActiveTab(key)
                  setSelectedEvent(null)
                }}
                className="cursor-pointer"
              >
                <div className={`relative w-full overflow-hidden rounded-lg ${service.height}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

