const architectureLayers = [
  {
    title: 'Users',
    items: ['Customer', 'Mechanic', 'Admin'],
  },
  {
    title: 'Frontend',
    items: ['React 19', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Application',
    items: ['Node.js', 'Express', 'REST API', 'JWT / RBAC'],
  },
  {
    title: 'Data & Services',
    items: ['MongoDB Atlas', 'Mappls', 'Socket.IO'],
  },
]

function Architecture() {
  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">

      <div className="border-b border-[var(--border)] px-6 py-5">
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent-soft)]">
          System Architecture
        </p>

        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          How the major components of the system interact.
        </p>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">

        <div className="space-y-4">

          {architectureLayers.map((layer, index) => (
            <div key={layer.title}>

              <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-5">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[var(--accent-soft)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                      {layer.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-[var(--border)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-secondary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

              {index < architectureLayers.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="h-5 w-px bg-[var(--border)]" />
                </div>
              )}

            </div>
          ))}

        </div>

        <div className="my-8 h-px bg-[var(--border)]" />

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent-soft)]">
            Delivery
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs">

            {['GitHub', 'GitHub Actions', 'GHCR', 'Render', 'Vercel'].map(
              (tool, index, tools) => (
                <div key={tool} className="flex items-center gap-2">
                  <span className="rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[var(--text-secondary)]">
                    {tool}
                  </span>

                  {index < tools.length - 1 && (
                    <span className="text-[var(--accent-soft)]">→</span>
                  )}
                </div>
              ),
            )}

          </div>
        </div>

      </div>
    </div>
  )
}

export default Architecture