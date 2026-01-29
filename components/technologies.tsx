"use client";

import React, { useState } from "react";
import {
  Shield,
  ShieldAlert,
  Flame,
  Waves,
  FileSearch,
  Scan,
  Terminal,
  Zap,
  Activity,
  Code2
} from "lucide-react";

const allTechnologies = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextjs" },
  { name: "Tailwind", slug: "tailwind" },
  { name: "Node.js", slug: "nodejs" },
  { name: "Express", slug: "express" },
  { name: "ASP.NET", slug: "dotnet" },
  { name: "PHP", slug: "php" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "MySQL", slug: "mysql" },
  { name: "SQL Server", slug: "mysql" },
  { name: "C", slug: "c" },
  { name: "C++", slug: "cpp" },
  { name: "Linux", slug: "linux" },
  { name: "Git", slug: "git" },
  { name: "HTML5", slug: "html" },
  { name: "CSS3", slug: "css" },
];

const securityTools = [
  { name: "Nmap", slug: "https://nmap.org/images/nmap-logo-64px.svg", fallback: Shield },
  { name: "Nessus", slug: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Tenable_logo.svg", fallback: ShieldAlert },
  { name: "Metasploit", slug: "metasploit", fallback: Flame },
  { name: "Wireshark", slug: "wireshark", fallback: Waves },
  { name: "Burp Suite", slug: "burpsuite", fallback: FileSearch },
  { name: "Nikto", slug: "https://cirt.net/nikto2/nikto_logo.gif", fallback: Scan },
  { name: "Netcat", slug: "bash", fallback: Terminal },
];

function TechIcon({ name, slug, fallback: Fallback }: { name: string, slug: string, fallback: any }) {
  const [error, setError] = useState(false);

  // Determine the primary URL to try
  const getPrimaryUrl = (s: string) => {
    if (s.startsWith("http")) return s;
    // Prefer simpleicons for specialized tools for distinct colors
    const specialized = ["nmap", "tenable", "metasploit", "wireshark", "burpsuite"];
    if (specialized.includes(s)) {
      return `https://cdn.simpleicons.org/${s}`;
    }
    return `https://skillicons.dev/icons?i=${s}`;
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="mb-3 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
          <Fallback className="h-10 w-10 md:h-12 md:w-12 text-primary" />
        </div>
        <span className="text-xs font-semibold text-muted-foreground group-hover:text-white transition-colors text-center px-1">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-3 p-3 rounded-xl bg-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getPrimaryUrl(slug)}
          alt={name}
          className="h-10 w-10 md:h-12 md:w-12 object-contain"
          onError={() => setError(true)}
          loading="lazy"
        />
      </div>
      <span className="text-xs font-semibold text-muted-foreground group-hover:text-white transition-colors text-center px-1">
        {name}
      </span>
    </div>
  );
}

export function Technologies() {
  return (
    <section id="technologies" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Development Technologies Section */}
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-10 text-center">
          Development Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-24">
          {allTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="aspect-square flex flex-col items-center justify-center p-4 rounded-xl bg-[#1c203a]/50 border border-white/5 hover:border-[#6387f2]/50 hover:bg-[#1c203a] transition-all duration-300 group cursor-default"
            >
              <TechIcon name={tech.name} slug={tech.slug} fallback={Code2} />
            </div>
          ))}
        </div>

        {/* Security Tools Section */}
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-10 text-center">
          Security Tools & Technologies (Hands-On)
        </h2>

        <div className="flex flex-col gap-4">
          {/* First Row: 4 items */}
          <div className="flex flex-wrap justify-center gap-4">
            {securityTools.slice(0, 4).map((tool) => (
              <div
                key={tool.name}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-1rem)] lg:w-[calc(16.666%-1rem)] aspect-square flex flex-col items-center justify-center p-4 rounded-xl bg-[#1c203a]/50 border border-white/5 hover:border-[#6387f2]/50 hover:bg-[#1c203a] transition-all duration-300 group cursor-default"
              >
                <TechIcon name={tool.name} slug={tool.slug} fallback={tool.fallback} />
              </div>
            ))}
          </div>

          {/* Second Row: Remaining 3 items */}
          <div className="flex flex-wrap justify-center gap-4">
            {securityTools.slice(4).map((tool) => (
              <div
                key={tool.name}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-1rem)] lg:w-[calc(16.666%-1rem)] aspect-square flex flex-col items-center justify-center p-4 rounded-xl bg-[#1c203a]/50 border border-white/5 hover:border-[#6387f2]/50 hover:bg-[#1c203a] transition-all duration-300 group cursor-default"
              >
                <TechIcon name={tool.name} slug={tool.slug} fallback={tool.fallback} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

