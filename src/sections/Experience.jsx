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
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
