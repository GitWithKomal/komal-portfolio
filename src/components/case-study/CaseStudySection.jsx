function CaseStudySection({ number, title, children }) {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-16">

          <div>
            <p className="font-mono text-sm text-[var(--accent-soft)]">
              {number}
            </p>

            <h2 className="mt-2 text-xl font-semibold tracking-tight">
              {title}
            </h2>
          </div>

          <div className="max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
            {children}
          </div>

        </div>
      </div>
    </section>
  )
}

export default CaseStudySection