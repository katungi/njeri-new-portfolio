import Image from "next/image"
import { motion } from "framer-motion"

const tools = [
  {
    name: "Figma",
    logo: "/api/placeholder/80/80",
    className: "lg:translate-y-0"
  },
  {
    name: "Canva",
    logo: "/api/placeholder/80/80",
    className: "lg:-translate-y-8"
  },
  {
    name: "Adobe Illustrator",
    logo: "/api/placeholder/80/80",
    className: "lg:translate-y-4"
  },
  {
    name: "CapCut",
    logo: "/api/placeholder/80/80",
    className: "lg:translate-y-6"
  },
  {
    name: "Adobe Premiere Pro",
    logo: "/api/placeholder/80/80",
    className: "lg:-translate-y-4"
  },
  {
    name: "Wondershare Filmora",
    logo: "/api/placeholder/80/80",
    className: "lg:translate-y-8"
  },
  {
    name: "Notion",
    logo: "/api/placeholder/80/80",
    className: "lg:-translate-y-6"
  },
  {
    name: "Slack",
    logo: "/api/placeholder/80/80",
    className: "lg:translate-y-4"
  },
  {
    name: "G Suite",
    logo: "/api/placeholder/80/80",
    className: "lg:-translate-y-8"
  },
  {
    name: "Sprout Social",
    logo: "/api/placeholder/80/80",
    className: "lg:translate-y-6"
  },
  {
    name: "Confluence",
    logo: "/api/placeholder/80/80",
    className: "lg:-translate-y-4"
  },
  {
    name: "Jira",
    logo: "/api/placeholder/80/80",
    className: "lg:translate-y-8"
  },
  {
    name: "Eventbrite",
    logo: "/api/placeholder/80/80",
    className: "lg:-translate-y-6"
  },
  {
    name: "Asana",
    logo: "/api/placeholder/80/80",
    className: "lg:translate-y-4"
  },
  {
    name: "Mailchimp",
    logo: "/api/placeholder/80/80",
    className: "lg:-translate-y-8"
  },
  {
    name: "Loops",
    logo: "/api/placeholder/80/80",
    className: "lg:translate-y-6"
  }
]

export function ToolsSection() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-16 lg:mb-0 lg:w-1/4">
            Tools
          </h2>
          
          <div className="lg:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center justify-center group ${tool.className}`}
                >
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 transition-transform duration-300 ease-out transform hover:scale-110">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-2 text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}