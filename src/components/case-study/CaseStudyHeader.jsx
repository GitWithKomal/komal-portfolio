import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function CaseStudyHeader({
  category,
  title,
  description,
  liveUrl,
  githubUrl,
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
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">

        <button
          type="button"
          onClick={handleBackToProjects}
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          <ArrowLeft size={15} />
          Back to Projects
        </button>

        <div className="mt-14 max-w-4xl">
          <p className="font-mono text-sm text-[var(--accent-soft)]">
            {category}
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
        </div>

      </div>
    </header>
  )
}

export default CaseStudyHeader