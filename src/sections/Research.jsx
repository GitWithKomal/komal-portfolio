import { ArrowUpRight } from 'lucide-react'

const research = {
  number: '01',
  title:
    'A Real-Time API-Driven Emergency Vehicle Navigation System Using Flask and Mapping APIs',
  publication:
    'International Journal of Advanced Research in Science, Communication and Technology',
  details: 'Volume 6 · Issue 8 · March 2026',
  doi: '10.48175/IJARSCT-32141',
  description:
    'A research-driven emergency navigation system combining real-time GPS tracking, vehicle-aware routing, traffic congestion detection, SOS support and hospital discovery using Flask and Mappls APIs.',
  technologies: [
    'Python',
    'Flask',
    'Mappls APIs',
    'Real-Time GPS',
    'Routing',
    'Geospatial Services',
  ],
  recognition: ['Published Research', 'Conference Recognition', '1st Position'],
  paperUrl: 'https://ijarsct.co.in/Paper32141.pdf',
  caseStudy: '/case-studies/devrp-v2',
}

function Research() {
  return (
    <section
      id="research"
      className="border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

        <div className="max-w-2xl">
          <p className="font-mono text-sm text-[var(--accent-soft)]">
            RESEARCH
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Research beyond the application.
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
            Engineering work that combines software development with
            technical research and investigation.
          </p>
        </div>

        <article className="group mt-14 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:border-[var(--accent)] sm:p-8 lg:p-10">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

            <div className="max-w-4xl">

              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-medium text-[var(--accent-soft)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(124,92,255,0.45)]">
                  {research.number}
                </span>

                <span className="font-mono text-xs text-[var(--text-secondary)]">
                  DEVRP V2
                </span>
              </div>

              <h3 className="mt-5 max-w-3xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                {research.title}
              </h3>

              <div className="mt-5">
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {research.publication}
                </p>

                <p className="mt-2 font-mono text-xs text-[var(--text-secondary)]">
                  {research.details}
                </p>

                <p className="mt-2 font-mono text-xs text-[var(--text-secondary)]">
                  DOI: {research.doi}
                </p>
              </div>

              <p className="mt-7 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
                {research.description}
              </p>

              <div className="mt-8">
                <p className="font-mono text-xs text-[var(--text-secondary)]">
                  RESEARCH AREAS
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {research.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 font-mono text-[11px] text-[var(--text-secondary)] transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--text-primary)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="font-mono text-xs text-[var(--text-secondary)]">
                  RECOGNITION
                </p>

                <div className="mt-3 flex flex-wrap gap-3">
                  {research.recognition.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[var(--border)] px-3 py-2 text-xs font-medium text-[var(--text-primary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="flex shrink-0 flex-wrap gap-3 lg:w-40 lg:flex-col">

              <a
                href={research.paperUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm font-medium transition-colors hover:border-[var(--accent)]"
              >
                Research Paper
                <ArrowUpRight size={15} />
              </a>

              <a
                href={research.caseStudy}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
              >
                View Project
                <ArrowUpRight size={15} />
              </a>

            </div>

          </div>

        </article>

      </div>
    </section>
  )
}

export default Research