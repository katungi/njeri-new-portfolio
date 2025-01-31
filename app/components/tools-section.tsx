import Image from "next/image";
import { motion } from "framer-motion";
import { FaFigma, FaGoogle, FaConfluence, FaMailchimp } from "react-icons/fa";
import {
  SiCanva,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiJirasoftware,
  SiEventbrite,
  SiAsana,
} from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";
import { LuSlack } from "react-icons/lu";
import { SiWondersharefilmora } from "react-icons/si";
import SproutIcon from "./sprout-icon"; 

const tools = [
  {
    name: "Figma",
    icon: <FaFigma size={50} />,
    className: "lg:translate-y-0",
  },
  {
    name: "Canva",
    icon: <SiCanva size={50} />,
    className: "lg:-translate-y-8",
  },
  {
    name: "Adobe Illustrator",
    icon: <SiAdobeillustrator size={50} />,
    className: "lg:translate-y-4",
  },
  {
    name: "CapCut",
    logo: "https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/802672aa5aafee7a-509.png",
    className: "lg:translate-y-6",
  },
  {
    name: "Adobe Premiere Pro",
    icon: <SiAdobepremierepro size={50} />,
    className: "lg:-translate-y-4",
  },
  {
    name: "Wondershare Filmora",
    icon: <SiWondersharefilmora size={50} />,
    className: "lg:translate-y-8",
  },
  {
    name: "Notion",
    icon: <RiNotionFill size={50} />,
    className: "lg:-translate-y-6",
  },
  {
    name: "Slack",
    icon: <LuSlack size={50} />,
    className: "lg:translate-y-4",
  },
  {
    name: "G Suite",
    icon: <FaGoogle size={50} />,
    className: "lg:-translate-y-8",
  },
  {
    name: "Sprout Social",
    icon: <SproutIcon size={50} />, 
    className: "lg:translate-y-6",
  },
  {
    name: "Confluence",
    icon: <FaConfluence size={50} />,
    className: "lg:-translate-y-4",
  },
  {
    name: "Jira",
    icon: <SiJirasoftware size={50} />,
    className: "lg:translate-y-8",
  },
  {
    name: "Eventbrite",
    icon: <SiEventbrite size={50} />,
    className: "lg:-translate-y-6",
  },
  {
    name: "Asana",
    icon: <SiAsana size={50} />,
    className: "lg:translate-y-4",
  },
  {
    name: "Mailchimp",
    icon: <FaMailchimp size={50} />,
    className: "lg:-translate-y-8",
  },
  {
    name: "Loops",
    logo: "https://mintlify.s3.us-west-1.amazonaws.com/loops/logo/dark.png",
    className: "lg:translate-y-6",
  },
];

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
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center justify-center group ${tool.className}`}
                >
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 transition-transform duration-300 ease-out transform hover:scale-110 flex items-center justify-center">
                    {tool.icon ? (
                      tool.icon
                    ) : (
                      <Image
                        src={tool.logo as string}
                        alt={tool.name}
                        width={500}
                        height={500}
                        className="cover"
                      />
                    )}
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
  );
}
