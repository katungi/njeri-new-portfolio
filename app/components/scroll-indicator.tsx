"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <ChevronDown className="w-8 h-8 text-muted-foreground" />
    </motion.div>
  )
}

