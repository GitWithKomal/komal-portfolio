const skillGroups = [
  {
    number: '01',
    title: 'DevOps & Infrastructure',
    skills: [
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Ansible',
      'GitHub Actions',
      'Linux',
      'Git',
      'GCP',
      'AWS',
      'Nginx',
      'Nagios',
    ],
  },
  {
    number: '02',
    title: 'Software Engineering',
    skills: [
      'JavaScript',
      'Python',
      'React',
      'Node.js',
      'Express',
      'Flask',
      'MongoDB',
      'SQL',
      'REST APIs',
      'JWT',
      'Socket.IO',
    ],
  },
  {
    number: '03',
    title: 'AI / GenAI',
    skills: [
      'Gemini API',
      'LangChain',
      'RAG',
      'Embeddings',
      'Vector Search',
    ],
  },
]

function About() {
  return (
    <section id="about" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          <div>
            <p className="font-mono text-sm text-[var(--accent-soft)]">
              ABOUT
            </p>

            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
              About me.
            </h2>

            <div className="mt-10 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">

              <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
                <span className="font-mono text-xs text-[var(--text-secondary)]">
                  ENGINEERING LOOP
                </span>

                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              </div>

              <div className="p-6 sm:p-7">

                <div className="space-y-1">

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[var(--accent-soft)]">
                      01
                    </span>

                    <span className="text-lg font-medium">
                      Build
                    </span>
                  </div>

                  <div className="ml-4 h-7 border-l border-dashed border-[var(--border)]" />

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[var(--accent-soft)]">
                      02
                    </span>

                    <span className="text-lg font-medium">
                      Automate
                    </span>
                  </div>

                  <div className="ml-4 h-7 border-l border-dashed border-[var(--border)]" />

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[var(--accent-soft)]">
                      03
                    </span>

                    <span className="text-lg font-medium">
                      Deploy
                    </span>
                  </div>

                  <div className="ml-4 h-7 border-l border-dashed border-[var(--border)]" />

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[var(--accent-soft)]">
                      04
                    </span>

                    <span className="text-lg font-medium">
                      Improve
                    </span>
                  </div>

                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {['FULL STACK', 'DEVOPS', 'AI / GENAI'].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-[var(--text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>

          <div className="max-w-3xl">

            <p className="text-lg leading-8 text-[var(--text-primary)]">
              I'm a software engineer focused on building full-stack
              applications and understanding the systems required to deploy,
              automate and operate them.
            </p>

            <p className="mt-6 text-base leading-7 text-[var(--text-secondary)]">
              My work combines application development with hands-on
              experience in DevOps practices including containerization,
              CI/CD, Linux, infrastructure automation and cloud environments.
              I also build AI-enabled applications using modern retrieval and
              language-model technologies.
            </p>

            <p className="mt-6 text-base leading-7 text-[var(--text-secondary)]">
              Through projects, research and practical labs, I focus on
              understanding how software moves from development to deployment
              and how the different pieces work together as a system.
            </p>

            <div className="mt-10 border-t border-[var(--border)] pt-7">

              <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent-soft)]">
                Core Skills
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                {skillGroups.map((group) => (
                  <article
                    key={group.number}
                    className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--accent)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[var(--accent-soft)]">
                        {group.number}
                      </span>

                      <span className="h-px w-8 bg-[var(--border)]" />
                    </div>

                    <h3 className="mt-5 text-sm font-medium text-[var(--text-primary)]">
                      {group.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 text-[11px] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About