import { Server, Code, Shield, Cpu } from "lucide-react";

const expertiseAreas = [
  {
    title: "Enterprise Architecture & Systems",
    icon: Server,
    skills: [
      "Enterprise Architecture Management (TOGAF)",
      "ESB, API Management & API Gateways",
      "System integration & platform design",
      "Quality assurance & testing strategy",
    ],
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    skills: [
      "Network & system security auditing",
      "Security policy, standards & controls",
      "SWIFT security compliance assessment",
      "Secure system evaluation",
    ],
  },
  {
    title: "Software Development",
    icon: Code,
    skills: [
      "Full-stack web application development",
      "REST API design & implementation",
      "System software development (C/C++)",
      "Agile development practices",
    ],
  },
  {
    title: "AI & Emerging Technologies",
    icon: Cpu,
    skills: [
      "Generative AI (author & practitioner)",
      "Responsible AI adoption",
      "Applied AI for enterprise and decision support",
    ],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-10">
          Core Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#6387f2]">
                  <area.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {area.title}
                </h3>
              </div>
              <ul className="space-y-2 text-left">
                {area.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground text-sm flex items-start gap-2"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6387f2] opacity-40" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
