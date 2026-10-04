import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Veyra",
    category: "Cloud-Native Roadside Assistance",
    description:
      "A roadside assistance and mechanic booking platform with location-aware mechanic discovery, role-based workflows and real-time service notifications.",
    caseStudy: "/case-studies/veyra",
  },
  {
    number: "02",
    title: "DockMind AI",
    category: "AI-Powered Document Intelligence",
    description:
      "A document question-answering system that combines retrieval-augmented generation, embeddings and vector search to provide contextual answers from uploaded PDFs.",
    caseStudy: "/case-studies/dockmind-ai",
  },
  {
    number: "03",
    title: "DEVRP V2",
    category: "Dynamic Emergency Vehicle Routing",
    description:
      "A dynamic emergency vehicle route planning system combining geospatial services, backend routing logic and a web-based interface for emergency navigation.",
    caseStudy: "/case-studies/devrp-v2",
  },
  {
    number: "04",
    title: "FinHabit",
    category: "Personal Finance Management",
    description:
      "A full-stack finance management application for tracking income, expenses and habits with authentication and administrative analytics.",
    caseStudy: "/case-studies/finhabit",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-[var(--accent-soft)]">
            PROJECTS
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Systems I've built.
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
            A selection of systems I've designed and built across software
            engineering, cloud-native development and AI-enabled applications.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:border-[var(--accent)] sm:p-8"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-medium text-[var(--accent-soft)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(124,92,255,0.45)]">
                      {project.number}
                    </span>

                    <span className="font-mono text-xs text-[var(--text-secondary)]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                    {project.description}
                  </p>
                </div>

                <div className="shrink-0 lg:pt-1">
                  <a
                    href={project.caseStudy}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent-soft)]"
                  >
                    Case Study
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
