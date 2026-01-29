import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Travel Addis",
    type: "Web Application",
    description:
      "A web-based application focused on travel and location-based information.",
    role: "Full-stack developer",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    link: "https://travel-addis.netlify.app/",
  },
  {
    title: "RealTimeBook",
    type: "Real-Time Booking System",
    description:
      "A system designed to support real-time booking and availability management.",
    role: "Application developer",
    technologies: ["JavaScript", "Backend APIs", "Database Integration"],
    link: "https://realtimebook.onrender.com/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-10 text-center">
          Selected Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:bg-card/80 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-primary mb-3">{project.type}</p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                <span className="text-foreground">Role:</span> {project.role}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#6387f2] hover:bg-[#6387f2]/90 text-white font-bold h-12 rounded-xl shadow-lg shadow-[#6387f2]/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-auto"
              >
                Visit Site
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
