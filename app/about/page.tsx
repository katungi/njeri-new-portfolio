import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import { BlurFade } from "@/components/ui/blur-fade";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-[1fr,300px] gap-12 items-start">
          <div className="space-y-8 lg:sticky lg:top-24">
            <BlurFade delay={0.25} inView>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm Njeri!{" "}
                <span className="inline-block animate-bounce">👋🏾</span>
              </h1>
            </BlurFade>

            <p className="text-lg leading-relaxed">
              Communications expert with a passion for storytelling, a strong
              background in UI/UX design and a knack for creating impactful and
              culturally relevant campaigns. My experience in communications,
              public relations, event management, and digital marketing has
              helped me utilize my imagination and creativity to connect with
              diverse audiences and tell compelling African stories. My
              interpersonal skills make me a collaborative team player with
              strong communication skills who can work individually and as part
              of a cross-functional team. Technology has connected me to the
              world in many ways and inspired me to create. Now, it's my turn to
              create memorable and stress-free experiences for users.
            </p>

            <section className="space-y-4">
              <h2 className="font-bold text-xl">
                More fun (that are not so fun) facts about me:
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  I once had cows named Tracy and Wendy, but Wendy had to be put
                  down after contracting East Coast Fever.
                </li>
                <li>Born to live by the beach, forced to live in the city.</li>
                <li>
                  I tried hardcore hiking for the first (and last) time in 2022.
                </li>
                <li>African tea in a metal mug is my guilty pleasure.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-bold text-xl">
                If I'm not in front of my computer, I'm either:
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Taking long walks in nature to decompress.</li>
                <li>
                  Finding new restaurants to try out and cool spots to work
                  from.
                </li>
                <li>
                  Shopping for vintage pieces for my home (or any reason
                  really!)
                </li>
                <li>Reading or crocheting</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-bold text-xl">
                If I could dine with any celebrity, it would be:
              </h2>
              <p>
                Solange Knowles, because I need to know precisely what
                transpired in that elevator and what led up to it.
              </p>
            </section>

            <section className="space-y-4">
              <p className="text-lg">
                Want to work with me? [Or better yet, have a conversation with
                me at the nearest local coffee shop] Feel free to check out my
                resume or contact me.
              </p>
              <p className="font-bold text-xl">
                Let's connect and create together!
              </p>
            </section>

            <div className="flex gap-4 text-lg">
              <Link href="/resume" className="underline hover:text-primary">
                Resume
              </Link>
              <span>-</span>
              <Link
                href="mailto:your-email@example.com"
                className="underline hover:text-primary"
              >
                Email
              </Link>
              <span>-</span>
              <Link
                href="https://linkedin.com/in/your-profile"
                className="underline hover:text-primary"
              >
                LinkedIn
              </Link>
            </div>
          </div>
          <BlurFade delay={0.25} inView>
            <div className="relative group cursor-pointer">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-muted"
              >
                <Image
                  src="/images/me.jpeg"
                  alt="Profile photo"
                  width={700}
                  height={700}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </BlurFade>
        </div>
      </main>
    </div>
  );
}
