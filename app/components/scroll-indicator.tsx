"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  return (
    <motion.div
      className="bottom-8 ml-24 -translate-x-1/2 mt-32"
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

