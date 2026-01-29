import { Linkedin, Github, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ermias Tsegu. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/ermias-tsegu-gizaw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#6387f2] hover:bg-[#5070d0] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-white" />
          </a>
          <a
            href="https://github.com/yetabalij"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#6387f2] hover:bg-[#5070d0] transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-white" />
          </a>
          <a
            href="https://x.com/ermiastsegu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#6387f2] hover:bg-[#5070d0] transition-colors"
            aria-label="GitHub"
          >
            <Twitter className="h-5 w-5 text-white" />
          </a>
          <a
            href="https://www.youtube.com/@insightful-words"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#6387f2] hover:bg-[#5070d0] transition-colors"
            aria-label="GitHub"
          >
            <Youtube className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
