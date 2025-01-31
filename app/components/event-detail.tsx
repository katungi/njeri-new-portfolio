import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface EventDetailProps {
  event: {
    title: string
    subtitle: string
    description: string
    role: string
    duration: string
    methods: string[]
    tools: string[]
    image: string
    logo: string
  }
}

export function EventDetail({ event }: EventDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mt-16"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl lg:text-5xl">{event.title}</h2>
          <p className="text-xl text-muted-foreground">{event.subtitle}</p>
        </div>
        <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        </div>
      </div>

      <div className="grid lg:grid-cols-[2fr,1fr] gap-8 bg-primary text-primary-foreground p-8 rounded-lg">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-2">ODHS 2024 Project:</h3>
            <p>{event.description}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Methods:</h3>
            <p>{event?.methods?.join(", ")}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-2">Role:</h3>
            <p>{event.role}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Duration:</h3>
            <p>{event.duration}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Tools:</h3>
            <p>{event?.tools?.join(", ")}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-[1fr,2fr] gap-8 items-start">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image src={event.logo || "/placeholder.svg"} alt={`${event.title} logo`} fill className="object-cover" />
        </div>
        <div className="prose prose-lg dark:prose-invert">
          <p>
            The Open Digital Health Summit (ODHS) 2024 was the first of its kind held in Kenya, a vibrant three-day
            gathering that brought together brilliant minds to tackle the challenges of digital health. Think
            high-energy tech meetup meets a global health symposium, all wrapped up with a generous dose of Kenyan
            flair. Our main goal was to boost collaboration and skills among the tech wizzes and national architects
            shaping the future of healthcare. This event was a joint effort by organizations like the World Health
            Organization (WHO), the International Telecommunications Union (ITU), the Pan African Health Informatics
            Association (HELINA), Kenya Health Informatics Association (KeHIA), plus technical support from HL7, Google,
            IntelliSOFT Consulting and others
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button size="lg" variant="outline" className="rounded-full">
          View Full Case Study
        </Button>
      </div>
    </motion.div>
  )
}

