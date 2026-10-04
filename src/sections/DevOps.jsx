const infrastructureAreas = [
  {
    number: '01',
    title: 'Containers',
    description:
      'Packaging and running applications in reproducible containerized environments.',
    tools: ['Docker', 'Docker Compose'],
  },
  {
    number: '02',
    title: 'Orchestration',
    description:
      'Working with Kubernetes fundamentals including deployments, services, configuration and workload management.',
    tools: ['Kubernetes', 'kind'],
  },
  {
    number: '03',
    title: 'CI/CD',
    description:
      'Building automated delivery workflows that connect source control, builds, containers and deployment.',
    tools: ['Jenkins', 'GitHub Actions'],
  },
  {
    number: '04',
    title: 'Configuration Automation',
    description:
      'Automating repeatable server configuration and application setup across Linux environments.',
    tools: ['Ansible'],
  },
  {
    number: '05',
    title: 'Monitoring',
    description:
      'Working with infrastructure and service monitoring concepts through practical monitoring setups.',
    tools: ['Nagios'],
  },
  {
    number: '06',
    title: 'Linux & Web Infrastructure',
    description:
      'Working with Linux environments, permissions, networking, web servers and command-line tooling.',
    tools: ['Linux', 'Nginx', 'Apache', 'Git'],
  },
  {
    number: '07',
    title: 'Cloud Infrastructure',
    description:
      'Hands-on cloud labs covering virtual machines, networking, deployment and infrastructure workflows.',
    tools: ['AWS', 'GCP'],
  },
]

function DevOps() {
  return (
    <section id="devops" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

        <div className="max-w-2xl">
          <p className="font-mono text-sm text-[var(--accent-soft)]">
            DEVOPS & INFRASTRUCTURE
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            From code to deployment.
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
            Practical experience across containers, CI/CD, automation,
            Linux, orchestration and cloud environments.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {infrastructureAreas.map((area) => (
            <article
              key={area.number}
              className={`group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:border-[var(--accent)] sm:p-8 ${
                area.number === '07' ? 'lg:col-span-3' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm font-medium text-[var(--accent-soft)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(124,92,255,0.45)]">
                  {area.number}
                </span>

                <span className="h-px w-10 bg-[var(--border)] transition-colors duration-300 group-hover:bg-[var(--accent)]" />
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {area.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                {area.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {area.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 font-mono text-[11px] text-[var(--text-secondary)] transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--text-primary)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default DevOps