import { Braces } from "lucide-react";

function Habilidades() {
  return (
    <section id="habilidades" className="border-b border-border">
      <div className="mx-auto max-w-content px-5 py-24 lg:px-8 lg:py-32">
        <p className="section-label">03 / Habilidades</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-12">
          <h2 className="section-title lg:col-span-5">
            Ferramentas e linguagens que uso para dar forma às ideias.
          </h2>
          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {[
              ["Base", "HTML · CSS · JavaScript"],
              ["Linguagens", "JavaScript · TypeScript"],
              ["Interfaces", "React · Next.js"],
              ["Estilo", "Tailwind CSS · CSS responsivo"],
            ].map(([title, skills], index) => (
              <div
                key={title}
                className="group bg-background p-6 transition-colors hover:bg-secondary"
              >
                <div className="flex items-start justify-between">
                  <Braces
                    className="text-primary transition-transform motion-safe:group-hover:rotate-6"
                    size={22}
                  />
                  <span className="font-mono text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-mono text-xs uppercase text-muted-foreground">
                  {title}
                </h3>
                <p className="mt-2 font-display text-xl font-bold">{skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
