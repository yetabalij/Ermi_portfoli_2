import { BookOpen, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Generative AI — Practical & Applied Perspectives",
    type: "Book",
    publisher: "Amazon Kindle",
    role: "Author",
    link: "https://www.amazon.com/dp/B0DZBYDWW3",
  },
  {
    title: "Generative AI Book Chapter",
    type: "Academic Chapter",
    publisher: "Springer Nature",
    role: "Contributing Author",
    link: "https://link.springer.com/chapter/10.1007/978-3-032-04056-5_10",
  },
];

export function Publications() {
  return (
    <section id="publications" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-10 text-center">
          Publications & Books
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:bg-card/80 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#6387f2]">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
              </div>

              <p className="text-sm text-primary mb-2">{pub.type}</p>

              <div className="mb-6 flex-grow">
                <p className="text-xs text-muted-foreground mb-1">
                  <span className="text-foreground">Role:</span> {pub.role}
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground">Publisher:</span> {pub.publisher}
                </p>
              </div>

              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#6387f2] hover:bg-[#6387f2]/90 text-white font-bold h-12 rounded-xl shadow-lg shadow-[#6387f2]/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-auto"
              >
                Visit
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
