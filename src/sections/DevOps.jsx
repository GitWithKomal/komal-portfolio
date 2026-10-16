
const infrastructureAreas = [
  {
    number: '01',
    title: 'Containers',
    description:
      'Build and run containerized applications with Docker and NGINX. QuickServe has been tested locally with a successful HTTP 200 response.',
    tools: ['Docker', 'Docker Compose', 'NGINX'],
  },
  {
    number: '02',
    title: 'Orchestration',
    description:
      'Practice Kubernetes deployments, services, configuration, health probes and resource limits in a local kind cluster, with Helm for packaging.',
    tools: ['Kubernetes', 'kind', 'Helm'],
  },
  {
    number: '03',
    title: 'CI/CD',
    description:
      'Work with GitHub Actions and Jenkins pipelines to automate build workflows and publish container images to GitHub Container Registry.',
    tools: ['Jenkins', 'GitHub Actions', 'GHCR'],
  },
  {
    number: '04',
    title: 'Configuration Automation',
    description:
      'Use Ansible playbooks to configure Linux hosts, install NGINX and manage service configuration across a controller and remote VM.',
    tools: ['Ansible', 'YAML', 'Linux'],
  },
  {
    number: '05',
    title: 'Monitoring',
    description:
      'Explore infrastructure and service monitoring concepts as part of hands-on DevOps labs.',
    tools: ['Nagios'],
  },
  {
    number: '06',
    title: 'Linux & Web Infrastructure',
    description:
      'Work with Linux commands, permissions, networking, web servers and troubleshooting across local containers and virtual machines.',
    tools: ['Linux', 'NGINX', 'Apache', 'Git'],
  },
  {
    number: '07',
    title: 'Cloud Infrastructure',
    description:
      'Practice cloud infrastructure through AWS and GCP labs, including virtual machines, Amazon ECR and an ECS-oriented deployment script.',
    tools: ['AWS', 'Amazon ECR', 'Amazon ECS', 'GCP'],
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
            Hands-on practice in containerization, CI/CD, orchestration,
            configuration automation and cloud infrastructure, backed by
            practical projects and lab work.
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

        <article className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs tracking-wider text-[var(--accent-soft)]">
                FEATURED DEVOPS PROJECT
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                QuickServe
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                A practical DevOps project connecting container builds,
                automated workflows and deployment labs. The local Docker
                image serves a versioned NGINX page, verified with an HTTP
                200 response. The project also includes GitHub Actions,
                Jenkins, GHCR, Kubernetes, Helm and Ansible practice.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  'Docker & NGINX',
                  'GitHub Actions',
                  'Jenkins & GHCR',
                  'Kubernetes & Helm',
                  'Ansible',
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 font-mono text-[11px] text-[var(--text-secondary)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://github.com/GitWithKomal/QuickServe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
            >
              View on GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default DevOps
