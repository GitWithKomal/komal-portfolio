import CaseStudyHeader from "../../components/case-study/CaseStudyHeader";
import CaseStudySection from "../../components/case-study/CaseStudySection";
import Architecture from "../../components/case-study/Architecture";
import CaseStudyFooter from "../../components/case-study/CaseStudyFooter";

const architectureLayers = [
  {
    title: "Client Applications",
    description:
      "Role-based interfaces for customers and mechanics to request, manage and respond to roadside assistance services.",
    tools: ["React", "Vite", "Tailwind CSS"],
  },
  {
    title: "Application API",
    description:
      "REST APIs handling authentication, service requests, mechanic workflows and role-based access control.",
    tools: ["Node.js", "Express"],
  },
  {
    title: "Data Layer",
    description:
      "Persistent storage for users, service requests, mechanic information and application state.",
    tools: ["MongoDB Atlas", "Mongoose"],
  },
  {
    title: "Location & Real-Time Services",
    description:
      "Location-aware mechanic discovery and real-time service notifications between application users.",
    tools: ["Mappls", "Socket.IO"],
  },
  {
    title: "Delivery Infrastructure",
    description:
      "Containerized backend delivery with automated CI/CD and separate frontend and backend deployments.",
    tools: ["Docker", "GitHub Actions", "GHCR", "Render", "Vercel"],
  },
];

function VeyraCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <CaseStudyHeader
        category="CLOUD-NATIVE ROADSIDE ASSISTANCE"
        title="Veyra"
        description="A roadside assistance and mechanic booking platform designed around location-aware service discovery, role-based workflows and real-time notifications."
        liveUrl="https://veyra-roadside-assistance.vercel.app/"
        githubUrl="https://github.com/GitWithKomal/Veyra-Roadside-Assistance"
      />

      <CaseStudySection number="01" title="Project Overview">
        <p>
          Veyra is a full-stack roadside assistance platform developed during my
          software development internship, connecting customers with nearby
          mechanics when they experience vehicle breakdowns or require emergency
          roadside services.
        </p>

        <p className="mt-5">
          The system supports different user roles, location-aware mechanic
          discovery, service request workflows and real-time notifications. I
          built the application to explore how a multi-role service platform can
          be structured from frontend interactions through backend APIs, data
          persistence and deployment.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="The Problem">
        <p>
          A roadside assistance workflow involves more than simply submitting a
          service request. A customer needs to describe the problem, find an
          appropriate nearby mechanic and track the progress of the request.
        </p>

        <p className="mt-5">
          On the other side, mechanics need a workflow for discovering and
          responding to service requests while the platform needs to keep
          different roles and application states coordinated.
        </p>

        <p className="mt-5">
          Veyra was designed to bring these interactions into a single
          application rather than treating roadside assistance as a simple form
          submission.
        </p>
      </CaseStudySection>

      <CaseStudySection number="03" title="System Architecture">
        <p>
          The application is structured as a frontend, backend API, database and
          supporting external services. The components communicate through
          defined application interfaces while the deployment layer handles the
          delivery of the system.
        </p>

        <Architecture />
      </CaseStudySection>

      <CaseStudySection number="04" title="How It Works">
        <p>
          A typical service flow begins when a customer creates a roadside
          assistance request and selects the type of help required.
        </p>

        <p className="mt-5">
          The application uses location information to identify nearby
          mechanics, while role-based workflows determine what customers,
          mechanics and administrators can access.
        </p>

        <p className="mt-5">
          Socket.IO is used for real-time notifications so relevant service
          updates can be communicated without relying entirely on manual page
          refreshes.
        </p>
      </CaseStudySection>

      <CaseStudySection number="05" title="Technical Implementation">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Authentication & Authorization
            </h3>

            <p className="mt-2">
              User authentication is handled through JWT-based authentication,
              with bcrypt used for password hashing. Role-based access control
              separates customer, mechanic and administrative capabilities.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Service Request Workflow
            </h3>

            <p className="mt-2">
              Customers can create roadside assistance requests based on the
              type of problem they are experiencing. The backend manages the
              request lifecycle and the associated mechanic workflow.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Nearby Mechanic Discovery
            </h3>

            <p className="mt-2">
              Location information is used with Mappls services to support
              discovery of mechanics within the relevant service area instead of
              presenting users with a static list.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Real-Time Notifications
            </h3>

            <p className="mt-2">
              Socket.IO handles real-time application events so users can
              receive relevant service updates without depending entirely on
              repeated page refreshes.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection number="05" title="Engineering Decisions">
        <div className="space-y-7">
          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Role-based access
            </h3>

            <p className="mt-2">
              Authentication is combined with role-based authorization so
              customer, mechanic and administrative workflows remain separated.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Location-aware discovery
            </h3>

            <p className="mt-2">
              Mappls was used for location and mapping capabilities so the
              application could support nearby mechanic discovery rather than
              relying on a static mechanic list.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Real-time communication
            </h3>

            <p className="mt-2">
              Socket.IO was chosen for application-level real-time notifications
              between the relevant users and service workflows.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Containerized delivery
            </h3>

            <p className="mt-2">
              Docker provides a reproducible environment for the backend, while
              the delivery workflow connects source control, container builds
              and deployment.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection number="06" title="DevOps & Deployment">
        <p>
          Veyra uses a deployment workflow that separates the frontend and
          backend while keeping the backend delivery containerized.
        </p>

        <div className="mt-7 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
          <div className="flex flex-wrap items-center gap-3 p-6 font-mono text-xs text-[var(--text-secondary)]">
            <span>GitHub</span>
            <span className="text-[var(--accent-soft)]">→</span>
            <span>GitHub Actions</span>
            <span className="text-[var(--accent-soft)]">→</span>
            <span>GHCR</span>
            <span className="text-[var(--accent-soft)]">→</span>
            <span>Render</span>
          </div>
        </div>

        <p className="mt-6">
          The frontend is deployed through Vercel, while the backend is
          containerized and deployed through Render. This setup gave me
          practical experience connecting application development with automated
          delivery and deployment infrastructure.
        </p>
      </CaseStudySection>

      <CaseStudySection number="07" title="Challenges & Solutions">
        <div className="space-y-7">
          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Coordinating multiple user roles
            </h3>

            <p className="mt-2">
              Different workflows required clear separation between customer,
              mechanic and administrative permissions. JWT-based authentication
              and role-based authorization were used to keep these
              responsibilities separated.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Connecting location with service discovery
            </h3>

            <p className="mt-2">
              Mechanic discovery needed to be based on the customer's location
              rather than a static list. Mappls was integrated to support
              location-aware discovery.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Delivering the backend consistently
            </h3>

            <p className="mt-2">
              Moving from local development to deployment required a
              reproducible backend environment. Docker and GitHub Actions were
              used to standardize the build and delivery process.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection number="08" title="What I Learned">
        <p>
          Veyra helped me move beyond building individual frontend and backend
          features and think about the application as a complete system.
        </p>

        <p className="mt-5">
          I gained practical experience connecting authentication, APIs,
          databases, geospatial services and real-time communication while also
          working through containerization, CI/CD and deployment.
        </p>

        <p className="mt-5">
          More importantly, the project reinforced the relationship between
          application architecture and the infrastructure required to run it
          reliably.
        </p>
      </CaseStudySection>

      <CaseStudyFooter
        nextProject={{
          title: "DockMind AI",
          path: "/case-studies/dockmind-ai",
        }}
        liveUrl="https://veyra-roadside-assistance.vercel.app/"
        githubUrl="https://github.com/GitWithKomal/Veyra-Roadside-Assistance"
      />
    </main>
  );
}

export default VeyraCaseStudy;
