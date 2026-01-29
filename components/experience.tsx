const experiences = [
  {
    title: "Senior Enterprise Architect & Quality Assurance Expert",
    company: "Bunna Bank",
    period: "May 2023 – Present",
    responsibilities: [
      "Implementing enterprise-wide architecture management practices",
      "Performing baseline enterprise architecture for key business units",
      "Leading ESB, API Management, and API Gateway initiatives",
      "Conducting software requirements analysis for enterprise systems",
      "Designing and executing QA strategies for web and mobile applications",
    ],
    tags: ["TOGAF", "API Management", "QA Strategy", "ESB"],
  },
  {
    title: "Network & System Security Evaluator and Auditor",
    company: "Information Network Security Administrator (INSA)",
    period: "Oct 2021 – May 2023",
    responsibilities: [
      "Conducted network and system security audits for multiple organizations",
      "Built and enforced security policies, procedures, and standards",
      "Performed SWIFT security compliance assessments for banks",
    ],
    tags: ["Network Security", "Compliance", "Audit", "SWIFT"],
  },
  {
    title: "Senior Application Software Developer",
    company: "INSA",
    period: "Mar 2021 – Oct 2021",
    responsibilities: [
      "Designed and implemented secure web-based applications",
      "Led development tasks and contributed to system design decisions",
    ],
    tags: ["Full-stack", "App Security", "System Design"],
  },
  {
    title: "Application Software Developer",
    company: "INSA",
    period: "Dec 2018 – Mar 2021",
    responsibilities: [
      "Developed full-stack web applications using modern and legacy stacks",
      "Worked on multiple production systems across different domains",
    ],
    tags: ["Web Dev", "Production Systems", "Modern Stacks"],
  },
  {
    title: "System Software Developer",
    company: "INSA",
    period: "Dec 2015 – Dec 2018",
    responsibilities: [
      "Participated in the design and development of a GIS platform",
      "Designed and documented platform modules",
      "Developed core platform components using C and C++",
      "Worked on APIs, SDKs, static and dynamic libraries",
    ],
    tags: ["C/C++", "GIS", "System Programming", "Low-level"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12 text-center">
          Experience
        </h2>

        <div className="relative pl-0 md:pl-0">
          {/* Vertical Yellow Line - Starts from the first item dot and goes to the bottom */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-[#f2d230]" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10 group">
                {/* Yellow Dot at each experience level */}
                <div className="absolute left-0 top-[7px] w-2.5 h-2.5 -translate-x-[4.5px] rounded-full bg-[#f2d230] shadow-[0_0_8px_rgba(242,210,48,0.5)]" />

                <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-[#f2d230] transition-colors leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-[#f2d230] font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-[#f2d230] mt-1.5 opacity-60">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:text-right text-left">
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap border border-border px-3 py-1 rounded-full group-hover:border-[#f2d230]/50 group-hover:text-[#f2d230] transition-colors bg-background/50">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
