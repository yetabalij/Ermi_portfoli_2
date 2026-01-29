"use client";

import { ArrowDown, Mail, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#6387f2]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#f2d230]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <span className="inline-block text-[#6387f2] text-sm font-medium tracking-wider uppercase mb-4">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Ermias Tsegu
          </h1>
          <p className="text-primary text-lg md:text-xl font-medium mb-6 text-justify">
            Enterprise Architect · Software Engineer · Security & AI Specialist
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            I design and build software systems, secure enterprise platforms, and
            help organizations adopt technology responsibly from application
            development to architecture, security, and AI.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="gap-2 bg-transparent border-border hover:border-[#6387f2] hover:text-[#6387f2] hover:bg-[#6387f2]/10"
              onClick={() => scrollTo("experience")}
            >
              <Briefcase className="h-4 w-4" />
              Experience
            </Button>
            <Button
              variant="outline"
              className="gap-2 bg-transparent border-border hover:border-[#6387f2] hover:text-[#6387f2] hover:bg-[#6387f2]/10"
              onClick={() => scrollTo("technologies")}
            >
              <FileText className="h-4 w-4" />
              Skills
            </Button>
            <Button
              variant="outline"
              className="gap-2 bg-transparent border-border hover:border-[#6387f2] hover:text-[#6387f2] hover:bg-[#6387f2]/10"
              onClick={() => scrollTo("projects")}
            >
              <FileText className="h-4 w-4" />
              Projects
            </Button>
            <Button
              variant="outline"
              className="gap-2 bg-transparent border-border hover:border-[#6387f2] hover:text-[#6387f2] hover:bg-[#6387f2]/10"
              onClick={() => scrollTo("publications")}
            >
              <FileText className="h-4 w-4" />
              Publications
            </Button>
            <Button
              variant="outline"
              className="gap-2 bg-transparent border-border hover:border-[#6387f2] hover:text-[#6387f2] hover:bg-[#6387f2]/10"
              onClick={() => scrollTo("education")}
            >
              <FileText className="h-4 w-4" />
              Education
            </Button>
            <Button
              className="gap-2 bg-[#6387f2] hover:bg-[#5070d0] text-white"
              onClick={() => scrollTo("contact")}
            >
              <Mail className="h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#6387f2]/30 animate-[spin_20s_linear_infinite]" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-[#6387f2]/20 blur-2xl scale-110" />
            {/* Image container */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#6387f2] shadow-2xl shadow-[#6387f2]/20 bg-white">
              <Image
                src="/images/ermias-profile-v3.jpg"
                alt="Ermias Tsegu"
                fill
                className="object-cover object-center scale-x-[-1] -translate-x-[10px]"
                priority
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#f2d230] rounded-full" />
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#6387f2] rounded-full" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-[#6387f2] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
}
