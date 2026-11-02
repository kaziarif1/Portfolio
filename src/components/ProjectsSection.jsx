import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  FileText,
  Gauge,
  Github,
  Workflow,
} from "lucide-react";

const projects = [
  {
    id: "k6-performance",
    title: "Performance Testing with k6",
    description:
      "A k6-based performance testing assignment for running load scenarios and reviewing application behavior under test.",
    icon: Gauge,
    visualClass: "from-cyan-500/15 to-blue-500/20",
    tags: ["k6", "JavaScript", "Performance Testing"],
    githubUrl: "https://github.com/kaziarif1/Assignment-on-k6",
  },
  {
    id: "postman-api-testing",
    title: "API Testing with Postman",
    description:
      "A Postman project for organizing API requests and checking endpoint behavior and responses.",
    icon: Workflow,
    visualClass: "from-orange-500/15 to-amber-500/20",
    tags: ["Postman", "API Testing"],
    githubUrl: "https://github.com/kaziarif1/API-Testing-using-postman",
  },
  {
    id: "dmoney-playwright",
    title: "dMoney Playwright Automation",
    description:
      "End-to-end browser test automation for the dMoney web application, built with Playwright and JavaScript.",
    icon: ClipboardCheck,
    visualClass: "from-violet-500/15 to-fuchsia-500/20",
    tags: ["Playwright", "JavaScript", "End-to-End"],
    githubUrl: "https://github.com/kaziarif1/dMoney-Playwright-Automation",
  },
  {
    id: "blog-management",
    title: "Blog Management Application",
    description:
      "A responsive Next.js and Tailwind CSS frontend integrated with a REST API for blog and user management, search, filtering, and role-based access.",
    icon: FileText,
    visualClass: "from-emerald-500/15 to-lime-500/20",
    tags: ["Next.js", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/kaziarif1/blog-management-application",
  },
  {
    id: "student-attendance",
    title: "Student Attendance Management System",
    description:
      "A PHP and MySQL application with admin and teacher panels for class management, daily attendance, and report generation with Excel export.",
    icon: BarChart3,
    visualClass: "from-rose-500/15 to-orange-500/20",
    tags: ["PHP", "MySQL", "Bootstrap", "Excel Export"],
    githubUrl: "https://github.com/kaziarif1/student-attendance-management-system",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Selected <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Recent work in performance testing, API testing, browser automation,
          and web application development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <article
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div
                  className={`h-48 overflow-hidden grid place-items-center bg-gradient-to-br ${project.visualClass}`}
                  aria-hidden="true"
                >
                  <div className="h-24 w-24 rounded-3xl bg-background/75 border border-border shadow-lg grid place-items-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <ProjectIcon className="h-11 w-11 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5">
                    {project.description}
                  </p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span>View on GitHub</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kaziarif1"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
