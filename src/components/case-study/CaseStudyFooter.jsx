import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

function CaseStudyFooter({
  previousProject,
  nextProject,
  githubUrl,
  liveUrl,
}) {
  const navigate = useNavigate()

  const handleBackToProjects = () => {
    navigate('/')

    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex flex-wrap gap-3">

            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium transition-colors hover:border-[var(--accent)]"
            >
              Live Demo
              <ArrowUpRight size={15} />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
            >
              GitHub
              <ArrowUpRight size={15} />
            </a>

          </div>

          <button
            type="button"
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            <ArrowLeft size={15} />
            Back to Projects
          </button>

        </div>

        <div className="mt-16 grid gap-4 border-t border-[var(--border)] pt-8 sm:grid-cols-2">

          {previousProject ? (
            <Link
              to={previousProject.path}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]"
            >
              <span className="flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)]">
                <ArrowLeft size={13} />
                Previous
              </span>

              <p className="mt-3 text-lg font-medium transition-colors group-hover:text-[var(--accent-soft)]">
                {previousProject.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              to={nextProject.path}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 text-left transition-colors hover:border-[var(--accent)] sm:text-right"
            >
              <span className="flex items-center justify-end gap-2 font-mono text-xs text-[var(--text-secondary)]">
                Next
                <ArrowRight size={13} />
              </span>

              <p className="mt-3 text-lg font-medium transition-colors group-hover:text-[var(--accent-soft)]">
                {nextProject.title}
              </p>
            </Link>
          )}

        </div>
      </div>
    </footer>
  )
}

export default CaseStudyFooter