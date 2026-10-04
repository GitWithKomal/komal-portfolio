import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--border)]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        
        <div>
          <p className="mb-5 font-mono text-sm tracking-wide text-[var(--accent-soft)]">
            SOFTWARE ENGINEER | DEVOPS
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Hi, I'm Komal
            <span className="text-[var(--accent)]">.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
            I build full-stack applications and engineer the infrastructure,
            automation, and deployment systems that run them.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--surface)]"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />

              <span className="ml-2 font-mono text-xs text-[var(--text-secondary)]">
                komal@portfolio
              </span>
            </div>

            <div className="space-y-7 p-6 font-mono text-sm leading-7 sm:p-8">
              <div>
                <p className="text-[var(--text-secondary)]">$ whoami</p>
                <p className="text-[var(--text-primary)]">Komal Nimje</p>
              </div>

              <div>
                <p className="text-[var(--text-secondary)]">$ focus</p>

                <p className="text-[var(--accent-soft)]">
                  Cloud-Native Engineering
                </p>
                <p className="text-[var(--accent-soft)]">DevOps & Automation</p>
                <p className="text-[var(--accent-soft)]">
                  Software Engineering
                </p>
              </div>

              <div>
                <p className="text-[var(--text-secondary)]">$ approach</p>
                <p className="text-[var(--text-primary)]">
                  Build → Automate → Deploy → Improve
                </p>
              </div>

              <div className="mt-10 inline-flex animate-bounce items-center gap-2 font-mono text-xs text-[var(--text-secondary)]">
                <span>↓</span>
                <span>Scroll to explore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
