import { Award, BookOpen, Briefcase, Calendar } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Calendar,
      value: "5+",
      label: "Years of Development",
      color: "#6387f2",
    },
    {
      icon: Award,
      value: "2+",
      label: "Years of Security Audit",
      color: "#f2d230",
    },
    {
      icon: Briefcase,
      value: "2+",
      label: "Years of Enterprise Architecture",
      color: "#6387f2",
    },
    {
      icon: BookOpen,
      value: "AI",
      label: "Development & Research",
      color: "#f2d230",
    },
  ];

  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-[#6387f2]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#f2d230]/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-10">
          About
        </h2>

        {/* Highlight Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-[#6387f2]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <div className="flex flex-col items-center gap-3">
                <div
                  className="p-3 rounded-lg transition-all duration-300"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon
                    className="h-6 w-6 transition-all duration-300"
                    style={{ color: item.color }}
                  />
                </div>
                <div className="text-center">
                  <div
                    className="text-2xl font-bold mb-1 transition-all duration-300"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </div>
                  <div className="text-xs text-muted-foreground leading-tight">
                    {item.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Card container with border and shadow */}
        <div className="p-8 md:p-10 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-[#6387f2]/30 transition-all duration-300 shadow-lg hover:shadow-xl">
          <p className="text-muted-foreground text-lg leading-relaxed text-justify">
            I have more than{" "}
            <span className="text-[#ffffff] font-normal">nine years</span> of
            professional experience spanning application and system development, network and system security auditing, and enterprise architecture and quality assurance.
            Currently I am working as a{" "}
            <span className="text-[#ffffff] font-normal">
              Senior Enterprise Architect and Quality Assurance Expert at Bunna Bank S.C.
            </span>{" "}
            I am also the author of a{" "}
            <span className="text-[#ffffff] font-normal">
              published book on Generative AI
            </span>{" "}
            and <span className="text-[#ffffff] font-normal">
              a contributing author to a Springer academic book chapter
            </span>,
            reflecting my applied and research-oriented engagement with emerging
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
