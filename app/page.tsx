import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Expertise } from "@/components/expertise";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Publications } from "@/components/publications";
import { Education } from "@/components/education";
import { Technologies } from "@/components/technologies";
import { EnterpriseQA } from "@/components/enterprise-qa";
import { AIResearch } from "@/components/ai-research";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Publications />
      <Technologies />
      <EnterpriseQA />
      <AIResearch />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
