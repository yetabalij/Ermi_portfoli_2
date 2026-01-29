import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "MSc in Computer Science (Networking & Security)",
    institution: "Addis Ababa University",
  },
  {
    degree: "BSc in Electrical & Computer Engineering (Computer Engineering)",
    institution: "Hawassa University",
  },
];

const certifications = [
  {
    name: "TOGAF 9 Foundation",
    issuer: "The Open Group",
    year: "2024",
  },
  {
    name: "Certified Network Security Specialist (CNSS)",
    issuer: "ICSI",
  },
  {
    name: "Network Security Expert (NSE 1)",
    issuer: "NSE Institute",
  },
];

export function Education() {
  return (
    <section id="education" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-10 text-center">
          Education & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Education Card */}
          <div className="flex flex-col p-8 rounded-2xl bg-[#1c203a]/40 border border-white/5 hover:border-[#6387f2]/30 hover:bg-[#1c203a]/60 transition-all duration-500 group relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-[#6387f2]/10 text-[#6387f2] border border-[#6387f2]/20">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">Education</h2>
            </div>

            <div className="space-y-8 relative z-10">
              {education.map((edu) => (
                <div key={edu.degree} className="flex items-start gap-4 group/item">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6387f2] opacity-40 group-hover/item:opacity-100 transition-opacity" />
                  <div className="text-left">
                    <h3 className="font-bold text-white leading-tight group-hover/item:text-[#6387f2] transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-primary mt-2 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="flex flex-col p-8 rounded-2xl bg-[#1c203a]/40 border border-white/5 hover:border-[#6387f2]/30 hover:bg-[#1c203a]/60 transition-all duration-500 group relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-[#6387f2]/10 text-[#6387f2] border border-[#6387f2]/20">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">Certifications</h2>
            </div>

            <div className="space-y-6 relative z-10">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-start gap-4 group/item">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6387f2] opacity-40 group-hover/item:opacity-100 transition-opacity" />
                  <div className="text-left">
                    <h3 className="font-semibold text-white leading-tight group-hover/item:text-[#6387f2] transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-primary mt-2 font-medium text-left">
                      {cert.issuer}
                      {cert.year && ` · ${cert.year}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
