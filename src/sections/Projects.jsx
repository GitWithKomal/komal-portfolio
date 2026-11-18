import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "QuickServe",
    category: "DevOps Engineering & AWS EC2 Deployment",
    description:
      "A hands-on DevOps engineering project demonstrating automated application delivery and cloud deployment. GitHub Actions builds and publishes versioned Docker images to GitHub Container Registry, then uses GitHub OIDC, AWS IAM and Systems Manager to deploy the application remotely to EC2. The AWS deployment was successfully tested, with application access verified through the EC2 endpoint.",
    links: [
      {
        label: "Source Code",
        href: "https://github.com/GitWithKomal/QuickServe",
        external: true,
      },
      {
        label: "Live Application",
        href: "https://gitwithkomal.github.io/QuickServe/",
        external: true,
      },
      {
        label: "CI/CD Workflows",
        href: "https://github.com/GitWithKomal/QuickServe/actions",
        external: true,
      },
      {
        label: "AWS Deployment Proof",
        href: "https://github.com/GitWithKomal/QuickServe/actions/runs/42997207347",
        external: true,
      },
    ],
  },
  {
    number: "02",
    title: "BuildOrbit",
    category: "Cloud-Native DevOps Capstone | AWS EKS",
    description:
      "A cloud-native, multi-tier application deployment project demonstrating infrastructure provisioning and Kubernetes-based application delivery on Amazon EKS. The project brings together a React frontend, Node.js and Express backend, and MongoDB database, with Docker, Amazon ECR, Terraform, GitHub Actions and Helm. The EKS deployment was completed historically, and a live GitHub Pages dashboard presents the architecture and deployment evidence.",
    links: [
      {
        label: "Live Dashboard",
        href: "https://gitwithkomal.github.io/BuildOrbit/",
        external: true,
      },
      {
        label: "Source Code",
        href: "https://github.com/GitWithKomal/BuildOrbit",
        external: true,
      },
      {
        label: "CI/CD Workflows",
        href: "https://github.com/GitWithKomal/BuildOrbit/actions",
        external: true,
      },
      {
        label: "Deployment Proof",
        href: "https://github.com/GitWithKomal/BuildOrbit/actions/runs/44269829107",
        external: true,
      },
      {
        label: "Evidence Screenshots",
        href: "https://github.com/GitWithKomal/BuildOrbit/tree/main/public/evidence",
        external: true,
      },
    ],
  },
  {
    number: "03",
    title: "DEVRP V2",
    category: "Dynamic Emergency Vehicle Routing",
    description:
      "A dynamic emergency vehicle route planning system combining geospatial services, backend routing logic and a web-based interface to support emergency navigation and route planning.",
    links: [
      {
        label: "Case Study",
        href: "/case-studies/devrp-v2",
      },
    ],
  },
  {
    number: "04",
    title: "DockMind AI",
    category: "AI-Powered Document Intelligence",
    description:
      "A document question-answering system that combines retrieval-augmented generation, embeddings and vector search to provide contextual answers from uploaded PDF documents.",
    links: [
      {
        label: "Case Study",
        href: "/case-studies/dockmind-ai",
      },
    ],
  },
  {
    number: "05",
    title: "Veyra",
    category: "Cloud-Native Roadside Assistance",
    description:
      "A roadside assistance and mechanic booking platform featuring location-aware mechanic discovery, role-based workflows and real-time service notifications.",
    links: [
      {
        label: "Case Study",
        href: "/case-studies/veyra",
      },
    ],
  },
  {
    number: "06",
    title: "FinHabit",
    category: "Personal Finance Management",
    description:
      "A full-stack finance management application for tracking income, expenses and financial habits, with authentication and administrative analytics.",
    links: [
      {
        label: "Case Study",
        href: "/case-studies/finhabit",
      },
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-[var(--accent-soft)]">
            PROJECTS
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Systems I've built.
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
            A selection of systems I've built across DevOps engineering, cloud
            infrastructure, full-stack development and AI-enabled applications.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:border-[var(--accent)] sm:p-8"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-mono text-sm font-medium text-[var(--accent-soft)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(124,92,255,0.45)]">
                      {project.number}
                    </span>

                    <span className="font-mono text-xs text-[var(--text-secondary)]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                    {project.description}
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap gap-x-5 gap-y-3 lg:max-w-xs lg:justify-end lg:pt-1">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent-soft)]"
                    >
                      {link.label}
                      <ArrowUpRight size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
