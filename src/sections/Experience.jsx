import { ArrowUpRight } from 'lucide-react';
const experiences = [
  {
    number: "01",
    role: "Freelance Software Developer",
    type: "Part-time / Independent",
    duration: "~6–7 months",
    description:
      "Worked on web development projects based on client and project requirements, contributing across frontend and backend development.",
    responsibilities: [
      "Built and modified web application features based on client requirements.",
      "Implemented functionality, fixed issues and worked across frontend and backend code.",
      "Worked directly with project owners to understand requirements and deliver changes.",
    ],
  },
  {
    number: "02",
    role: "Full Stack Developer Intern",
    company: "Unified Mentor",
    type: "Internship",
    duration: "June - September 2026",
    description:
      "Developed full-stack applications as part of a software development internship, working across frontend, backend, authentication and database functionality.",
    responsibilities: [
      "Developed Veyra, a roadside assistance and mechanic booking platform.",
      "Developed FinHabit, a finance and habit tracking application.",
      "Worked with React, Node.js, Express, MongoDB and REST APIs across both projects.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-[var(--accent-soft)]">
            EXPERIENCE
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Where I've applied my skills.
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
            Practical software development experience through freelance work and
            a structured development internship.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                <div className="flex shrink-0 items-start gap-4 lg:w-52">
                  <span className="font-mono text-sm font-medium text-[var(--accent-soft)]">
                    {experience.number}
                  </span>

                  <div>
                    <p className="text-xs font-mono text-[var(--text-secondary)]">
                      {experience.duration}
                    </p>

                    <p className="mt-2 text-xs font-mono text-[var(--text-secondary)]">
                      {experience.type}
                    </p>
                  </div>
                </div>

                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {experience.role}
                    </h3>

                    {experience.company && (
                      <span className="text-sm text-[var(--text-secondary)]">
                        · {experience.company}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {experience.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {experience.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {experience.company === "Unified Mentor" && (
                    <div className="mt-6">
                      <a
                        href="/certificates/Certificate.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-soft)] transition-colors hover:text-white"
                      >
                        View Internship Certificate
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)]">
                <span
                  aria-hidden="true"
                  className="text-2xl text-[var(--accent-soft)]"
                >
                  ✳
                </span>
              </div>

              <div>
                <p className="font-mono text-xs tracking-wider text-[var(--accent-soft)]">
                  DEVOPS CREDENTIAL
                </p>

                <h4 className="mt-2 text-lg font-semibold tracking-tight">
                  Certified DevOps Associate
                </h4>

                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Cloud Train
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-[var(--text-secondary)]">
              Completed Cloud Train's DevOps workshop, strengthening my
              foundational understanding of DevOps practices and workflows.
            </p>

            <p className="mt-5 font-mono text-xs text-[var(--text-secondary)]">
              RELATED HANDS-ON PRACTICE
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Docker",
                "Jenkins",
                "GitHub Actions",
                "Kubernetes",
                "Helm",
                "Ansible",
                "Nagios",
                "AWS",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-[var(--border)] px-2.5 py-1.5 font-mono text-xs text-[var(--text-secondary)]"
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-[var(--text-secondary)]">
              Complementing this credential, I continue to develop practical
              DevOps skills through hands-on projects and infrastructure labs.
            </p>

            <div className="mt-auto pt-6">
              <a
                href="/certificates/cloud-train-devops-associate.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-soft)] transition-colors hover:text-white"
              >
                View Certificate
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)]">
                <span
                  aria-hidden="true"
                  className="text-2xl text-[var(--accent-soft)]"
                >
                  U
                </span>
              </div>

              <div>
                <p className="font-mono text-xs tracking-wider text-[var(--accent-soft)]">
                  DEVELOPMENT CREDENTIAL
                </p>

                <h4 className="mt-2 text-lg font-semibold tracking-tight">
                  Full Stack Web Development with MERN Stack &amp; GenAI 2026
                </h4>

                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Udemy · Masynctech Coding School
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-[var(--text-secondary)]">
              Strengthened my understanding of end-to-end web application
              development, from building interactive user interfaces to working
              with backend logic, APIs, and database integration using the MERN
              stack. Also explored Generative AI concepts and their relevance to
              modern applications.
            </p>

            <div className="mt-auto pt-6">
              <a
                href="/certificates/udemy_certificate.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-soft)] transition-colors hover:text-white"
              >
                View Certificate
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
