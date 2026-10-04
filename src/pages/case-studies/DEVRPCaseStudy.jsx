import CaseStudyHeader from '../../components/case-study/CaseStudyHeader'
import CaseStudySection from '../../components/case-study/CaseStudySection'
import CaseStudyFooter from '../../components/case-study/CaseStudyFooter'

function DEVRPCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">

      <CaseStudyHeader
        category="DYNAMIC EMERGENCY VEHICLE ROUTING"
        title="DEVRP V2"
        description="A web-based emergency vehicle route planning system that combines geospatial services, backend routing logic and a map-based interface for emergency navigation."
        liveUrl="https://devrp-v2-dynamic-emergency-vehicle.vercel.app/"
        githubUrl="https://github.com/GitWithKomal/DEVRP-V2-Dynamic-Emergency-Vehicle-Route-Planner"
      />

      <CaseStudySection number="01" title="Project Overview">
        <p>
          DEVRP V2 is an emergency vehicle route planning application designed
          to help identify routes between emergency vehicles and their
          destinations using geospatial services.
        </p>

        <p className="mt-5">
          The project combines a web-based interface with a Flask backend and
          mapping services to handle location input, route generation and
          geographic information required for emergency navigation.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="The Problem">
        <p>
          Emergency vehicle navigation depends heavily on accurate location
          information and route planning. A system intended for this use case
          needs to connect geographic coordinates with routing and map
          information rather than treating navigation as a simple static
          destination lookup.
        </p>

        <p className="mt-5">
          DEVRP V2 was built to explore how these geospatial capabilities can
          be integrated into a web application through a dedicated backend
          service.
        </p>
      </CaseStudySection>

      <CaseStudySection number="03" title="System Architecture">
        <p>
          The application separates the frontend interface, backend routing
          service and external geospatial capabilities.
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
                  User Interface
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  React · Vite · CSS
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
                  Backend API
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Flask · REST API · Gunicorn
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
                  Geospatial Services
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Mappls · Routing · Geocoding · Reverse Geocoding
                </p>
              </div>

              <div className="flex justify-center">
                <div className="h-5 w-px bg-[var(--border)]" />
              </div>

              <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-5">
                <p className="font-mono text-xs text-[var(--accent-soft)]">
                  04
                </p>

                <h3 className="mt-3 text-sm font-semibold">
                  Deployment
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Docker · GitHub Actions · Render · Vercel
                </p>
              </div>

            </div>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection number="04" title="How It Works">
        <p>
          The application accepts location information through the frontend
          and sends the relevant data to the Flask backend.
        </p>

        <p className="mt-5">
          The backend communicates with Mappls services for geocoding,
          reverse geocoding and routing-related operations.
        </p>

        <p className="mt-5">
          The resulting geographic information is then used by the frontend
          to present the route and related navigation information through the
          web interface.
        </p>
      </CaseStudySection>

      <CaseStudySection number="05" title="Technical Implementation">
        <div className="space-y-8">

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Backend API
            </h3>

            <p className="mt-2">
              Flask is used to expose the backend functionality through REST
              API endpoints, with Gunicorn serving the application in the
              deployed environment.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Routing
            </h3>

            <p className="mt-2">
              Mappls routing services are used to obtain route information
              between the relevant geographic locations.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Geocoding
            </h3>

            <p className="mt-2">
              Geocoding and reverse geocoding allow the application to work
              with both location names and geographic coordinates.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Web Interface
            </h3>

            <p className="mt-2">
              The React frontend provides the user-facing interface for
              interacting with locations and displaying the resulting
              geographic information.
            </p>
          </div>

        </div>
      </CaseStudySection>

      <CaseStudySection number="06" title="Engineering Decisions">
        <div className="space-y-7">

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Separate frontend and backend
            </h3>

            <p className="mt-2">
              The application separates the user interface from the routing
              and geospatial logic so that the backend can provide focused API
              functionality independently of the frontend.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Dedicated geospatial service
            </h3>

            <p className="mt-2">
              Mappls was integrated for routing and location-related
              capabilities rather than implementing geographic data services
              directly inside the application.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Containerized backend
            </h3>

            <p className="mt-2">
              Docker provides a consistent runtime environment for the Flask
              backend and simplifies the deployment workflow.
            </p>
          </div>

        </div>
      </CaseStudySection>

      <CaseStudySection number="07" title="Deployment">
        <p>
          The frontend and backend are deployed separately, with the backend
          packaged as a container for deployment.
        </p>

        <div className="mt-7 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--text-secondary)]">
            <span>GitHub</span>
            <span className="text-[var(--accent-soft)]">→</span>
            <span>GitHub Actions</span>
            <span className="text-[var(--accent-soft)]">→</span>
            <span>Render</span>
          </div>

          <div className="my-5 h-px bg-[var(--border)]" />

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--text-secondary)]">
            <span>React / Vite</span>
            <span className="text-[var(--accent-soft)]">→</span>
            <span>Vercel</span>
          </div>
        </div>

        <p className="mt-6">
          This deployment setup gave me practical experience connecting a
          geospatial application with containerization, automated delivery
          and separate frontend/backend hosting.
        </p>
      </CaseStudySection>

      <CaseStudySection number="08" title="Research & Recognition">
        <p>
          DEVRP V2 was also developed as a research-oriented project rather
          than only as a software implementation.
        </p>

        <p className="mt-5">
          The work received conference recognition and secured
          <span className="font-medium text-[var(--text-primary)]">
            {' '}1st Position
          </span>
          , giving me experience presenting a technical system beyond the
          implementation itself.
        </p>

        <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent-soft)]">
            Recognition
          </p>

          <p className="mt-3 text-lg font-semibold text-[var(--text-primary)]">
            1st Position
          </p>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Research / project presentation recognition
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection number="09" title="What I Learned">
        <p>
          DEVRP V2 strengthened my understanding of how geospatial services
          can be integrated into a full-stack application through a dedicated
          backend.
        </p>

        <p className="mt-5">
          I gained practical experience working with routing, geocoding,
          reverse geocoding and location-based application flows while also
          learning how to structure and deploy a Flask-based API.
        </p>

        <p className="mt-5">
          The research aspect of the project also helped me think beyond
          implementation and communicate the technical problem and solution
          more systematically.
        </p>
      </CaseStudySection>

      <CaseStudyFooter
        previousProject={{
          title: 'DockMind AI',
          path: '/case-studies/dockmind-ai',
        }}
        nextProject={{
          title: 'FinHabit',
          path: '/case-studies/finhabit',
        }}
        liveUrl="https://devrp-v2-dynamic-emergency-vehicle.vercel.app/"
        githubUrl="https://github.com/GitWithKomal/DEVRP-V2-Dynamic-Emergency-Vehicle-Route-Planner"
      />

    </main>
  )
}

export default DEVRPCaseStudy