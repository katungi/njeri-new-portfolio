import React from "react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import Header from "../components/header";

function App() {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-white dark:bg-white text-black dark:text-black flex flex-col justify-between p-8 md:p-16">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight">
            Reach Out
            <br />
            to Me
          </h1>

          <div className="flex flex-col gap-4 mt-12">
            <a
              href="mailto:your.email@example.com"
              className="group flex items-center gap-4 text-xl hover:text-gray-600 dark:hover:text-gray-600 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
              <span className="border-b border-transparent group-hover:border-black dark:group-hover:border-black">
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
              <Linkedin className="w-6 h-6" />
              <span className="border-b border-transparent group-hover:border-black dark:group-hover:border-black">
                LinkedIn
              </span>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>

        <div className="self-end">
          <button
            className="bg-black text-white dark:bg-black dark:text-white px-8 py-4 rounded-full text-lg font-medium 
                     hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors duration-300 
                     hover:scale-105 transform transition-transform"
          >
            Let's collaborate
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
