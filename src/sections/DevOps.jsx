const infrastructureAreas = [
  {
    number: "01",
    title: "Containers & Containerization",
    description:
      "Build, run and manage containerized applications using Docker and Docker Compose. Apply containerization across QuickServe and BuildOrbit, including image creation, container lifecycle management and registry workflows.",
    tools: ["Docker", "Docker Compose", "GHCR", "Amazon ECR"],
  },
  {
    number: "02",
    title: "CI/CD Automation",
    description:
      "Build automated delivery workflows using GitHub Actions and Jenkins. Practise application build workflows, Docker image creation, registry publishing and deployment automation across QuickServe and BuildOrbit.",
    tools: ["GitHub Actions", "Jenkins", "Git", "YAML"],
  },
  {
    number: "03",
    title: "AWS Cloud & Infrastructure",
    description:
      "Work with AWS infrastructure across two projects: QuickServe's tested EC2 deployment using GitHub OIDC, IAM and Systems Manager, and BuildOrbit's historically completed EKS deployment with Terraform-provisioned cloud infrastructure.",
    tools: ["AWS EC2", "Amazon EKS", "Amazon ECR", "IAM", "AWS SSM"],
  },
  {
    number: "04",
    title: "Kubernetes & Helm",
    description:
      "Work with Kubernetes application deployments, Services, container orchestration and Helm. BuildOrbit includes a historically completed Amazon EKS application deployment, while QuickServe provides additional local Minikube practice with replicas, resource configuration, HPA and troubleshooting.",
    tools: ["Kubernetes", "Amazon EKS", "Minikube", "Helm", "HPA"],
  },
  {
    number: "05",
    title: "Infrastructure as Code",
    description:
      "Use Terraform for AWS infrastructure provisioning in BuildOrbit, including VPC, subnets, IAM configuration, EKS cluster and managed node group. Also practise Terraform fundamentals and initial AWS EC2 configuration separately.",
    tools: ["Terraform", "AWS VPC", "Subnets", "IAM", "EKS"],
  },
  {
    number: "06",
    title: "Configuration Management",
    description:
      "Use Ansible inventories and playbooks to configure remote Ubuntu hosts, install and configure NGINX, validate services and verify idempotent execution.",
    tools: ["Ansible", "Ubuntu", "SSH", "YAML"],
  },
  {
    number: "07",
    title: "Monitoring & Observability",
    description:
      "Work with Prometheus and Grafana monitoring in the BuildOrbit EKS project. Separately practise a local Kubernetes monitoring environment using Prometheus, Blackbox Exporter, Grafana and Alertmanager for metrics collection, dashboards and alert configuration.",
    tools: ["Prometheus", "Grafana", "Alertmanager", "Blackbox Exporter"],
  },
  {
    number: "08",
    title: "Linux & Web Infrastructure",
    description:
      "Work with Ubuntu Linux, command-line operations, permissions, networking, web servers and service troubleshooting. Practise NGINX configuration and resolve port conflicts involving Apache.",
    tools: ["Linux", "Ubuntu", "NGINX", "Apache", "Bash"],
  },
];

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
            Building practical experience across CI/CD automation, cloud
            infrastructure, containerization, Kubernetes orchestration,
            infrastructure as code, configuration management and observability
            through hands-on projects and labs.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {infrastructureAreas.map((area) => (
            <article
              key={area.number}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:border-[var(--accent)] sm:p-8"
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

        {/* QuickServe featured project */}
        <article className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9">
          <div className="flex flex-col gap-6">
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-wider text-[var(--accent-soft)]">
                FEATURED DEVOPS PROJECT · AWS EC2
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                QuickServe
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                A hands-on DevOps engineering project demonstrating automated
                application delivery, containerization and cloud deployment.
                GitHub Actions builds and publishes versioned Docker images to
                GitHub Container Registry, then authenticates with AWS through
                OIDC and IAM to deploy the image remotely to EC2 using Systems
                Manager.
              </p>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                The AWS deployment was successfully tested, including container
                replacement and application access through the EC2 endpoint.
                Additional repository environments cover Jenkins image
                publishing, local Minikube and Helm exercises, Ansible
                configuration management, and a local monitoring stack.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Docker & NGINX",
                  "GitHub Actions",
                  "Jenkins",
                  "GHCR",
                  "AWS EC2",
                  "OIDC & IAM",
                  "AWS SSM",
                  "Kubernetes & Helm",
                  "Ansible",
                  "Prometheus & Grafana",
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

            <div className="flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
              <a
                href="https://github.com/GitWithKomal/QuickServe"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
              >
                Source Code <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://gitwithkomal.github.io/QuickServe/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
              >
                Live Application <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/GitWithKomal/QuickServe/actions"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
              >
                CI/CD Workflows <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/GitWithKomal/QuickServe/actions/runs/42997207347"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
              >
                AWS Deployment Proof <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>

        {/* BuildOrbit featured project */}
        <article className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9">
          <div className="flex flex-col gap-6">
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-wider text-[var(--accent-soft)]">
                FEATURED DEVOPS PROJECT · AWS EKS
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                BuildOrbit
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                A cloud-native, multi-tier application deployment project
                comprising a React frontend, Node.js and Express backend, and
                MongoDB database. The project demonstrates Docker
                containerization, Amazon ECR image storage, Terraform-based AWS
                infrastructure provisioning and Kubernetes orchestration on
                Amazon EKS.
              </p>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                The EKS deployment was completed historically. GitHub Actions
                workflows support the project delivery process, while Helm,
                Prometheus and Grafana are included in the deployment and
                monitoring setup. A separate GitHub Pages dashboard presents the
                project architecture and deployment evidence.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "AWS",
                  "Amazon EKS",
                  "Amazon ECR",
                  "Terraform",
                  "Docker",
                  "Kubernetes",
                  "GitHub Actions",
                  "Helm",
                  "Ansible",
                  "Prometheus",
                  "Grafana",
                  "React",
                  "Node.js",
                  "MongoDB",
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

            <div className="flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
              <a
                href="https://gitwithkomal.github.io/BuildOrbit/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
              >
                Live Dashboard <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/GitWithKomal/BuildOrbit"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
              >
                Source Code <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/GitWithKomal/BuildOrbit/actions"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
              >
                CI/CD Workflows <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/GitWithKomal/BuildOrbit/actions/runs/44269829107"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
              >
                Deployment Proof <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/GitWithKomal/BuildOrbit/tree/main/public/evidence"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
              >
                Evidence Screenshots <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default DevOps;
