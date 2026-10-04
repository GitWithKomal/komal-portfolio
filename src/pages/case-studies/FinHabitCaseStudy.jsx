import CaseStudyHeader from '../../components/case-study/CaseStudyHeader'
import CaseStudySection from '../../components/case-study/CaseStudySection'
import CaseStudyFooter from '../../components/case-study/CaseStudyFooter'

function FinHabitCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">

      <CaseStudyHeader
        category="FULL-STACK FINANCE MANAGEMENT"
        title="FinHabit"
        description="A full-stack finance management application for tracking income, expenses and habits with authentication and administrative analytics."
        liveUrl="https://fin-habit.vercel.app/"
        githubUrl="https://github.com/GitWithKomal/FinHabit"
      />

      <CaseStudySection number="01" title="Project Overview">
        <p>
          FinHabit is a full-stack finance management application developed
          during my software development internship.
        </p>

        <p className="mt-5">
          The application allows users to track financial activity and habits
          while providing an administrative view for monitoring application
          data and activity.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="The Problem">
        <p>
          Managing income and expenses across different records can make it
          difficult to maintain a clear view of personal financial activity.
        </p>

        <p className="mt-5">
          FinHabit was built to bring financial tracking and habit management
          into a single web application with authenticated user access and
          visual summaries.
        </p>
      </CaseStudySection>

      <CaseStudySection number="03" title="System Architecture">
        <p>
          The application follows a conventional MERN-style full-stack
          architecture, separating the React frontend from the Node.js API
          and MongoDB data layer.
        </p>

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

              <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="font-mono text-xs text-[var(--accent-soft)]">
                  01
                </p>

                <h3 className="mt-3 text-sm font-semibold">
                  Frontend
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  React · Tailwind CSS · Recharts
                </p>
              </div>

              <div className="flex justify-center">
                <div className="h-5 w-px bg-[var(--border)]" />
              </div>

              <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="font-mono text-xs text-[var(--accent-soft)]">
                  02
                </p>

                <h3 className="mt-3 text-sm font-semibold">
                  Backend
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Node.js · Express · REST APIs · JWT
                </p>
              </div>

              <div className="flex justify-center">
                <div className="h-5 w-px bg-[var(--border)]" />
              </div>

              <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="font-mono text-xs text-[var(--accent-soft)]">
                  03
                </p>

                <h3 className="mt-3 text-sm font-semibold">
                  Data Layer
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  MongoDB
                </p>
              </div>

            </div>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection number="04" title="How It Works">
        <p>
          Authenticated users can record income and expenses and maintain
          habit-related information through the application.
        </p>

        <p className="mt-5">
          The frontend communicates with the backend through REST APIs, while
          MongoDB stores the application data.
        </p>

        <p className="mt-5">
          Financial information is presented through dashboard views and
          charts to make activity easier to understand.
        </p>
      </CaseStudySection>

      <CaseStudySection number="05" title="Technical Implementation">
        <div className="space-y-8">

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Authentication
            </h3>

            <p className="mt-2">
              JWT-based authentication is used to protect authenticated
              application workflows and separate user access from
              administrative functionality.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Finance Tracking
            </h3>

            <p className="mt-2">
              Users can record and manage income and expense information
              through the application.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Dashboard Analytics
            </h3>

            <p className="mt-2">
              Recharts is used to present financial activity through visual
              summaries and dashboard charts.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Responsive Interface
            </h3>

            <p className="mt-2">
              Tailwind CSS was used to structure the interface and provide
              responsive layouts across different screen sizes.
            </p>
          </div>

        </div>
      </CaseStudySection>

      <CaseStudySection number="06" title="Engineering Decisions">
        <div className="space-y-7">

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              REST API separation
            </h3>

            <p className="mt-2">
              The frontend communicates with a dedicated Express backend
              instead of directly accessing the database, keeping application
              logic within the server layer.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Authenticated access
            </h3>

            <p className="mt-2">
              JWT-based authentication provides a clear boundary between
              public access and authenticated application functionality.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Visual financial summaries
            </h3>

            <p className="mt-2">
              Financial records were complemented with dashboard charts so
              users could understand activity through visual summaries rather
              than relying only on individual records.
            </p>
          </div>

        </div>
      </CaseStudySection>

      <CaseStudySection number="07" title="Deployment">
        <p>
          The frontend and backend are deployed separately, allowing the React
          application and API service to run independently.
        </p>

        <div className="mt-7 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--text-secondary)]">
            <span>React / Vite</span>
            <span className="text-[var(--accent-soft)]">→</span>
            <span>Vercel</span>

            <span className="mx-2 text-[var(--border)]">|</span>

            <span>Node / Express</span>
            <span className="text-[var(--accent-soft)]">→</span>
            <span>Render</span>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection number="09" title="What I Learned">
        <p>
          FinHabit strengthened my foundation in full-stack application
          development and helped me understand how frontend, backend and
          database responsibilities fit together.
        </p>

        <p className="mt-5">
          It also gave me practical experience building authenticated
          workflows and presenting application data through a user-oriented
          dashboard.
        </p>
      </CaseStudySection>

      <CaseStudyFooter
        previousProject={{
          title: 'DEVRP V2',
          path: '/case-studies/devrp-v2',
        }}
        liveUrl="https://fin-habit.vercel.app/"
        githubUrl="https://github.com/GitWithKomal/FinHabit"
      />

    </main>
  )
}

export default FinHabitCaseStudy