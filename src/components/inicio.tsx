import { Button } from "@radix-ui/themes";
import { ArrowDown } from "lucide-react";

function Inicio() {
  return (
    <section
      id="inicio"
      className="mx-auto grid min-h-[min(94vh,54rem)] max-w-content grid-cols-1 content-between px-5 pb-8 pt-24 lg:grid-cols-12 lg:px-8 lg:pb-10 lg:pt-28"
    >
      <div className="grid items-start gap-12 lg:col-span-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-9">
          <p className="reveal flex items-center gap-2 font-mono text-xs font-semibold uppercase text-primary">
            <span className="h-px w-8 bg-primary" />
            Desenvolvedor Front-end
          </p>
          <h1 className="reveal mt-7 max-w-[12ch] font-display text-[clamp(3.25rem,7.6vw,7rem)] font-extrabold leading-[0.9]">
            Interfaces que unem <span className="text-primary">clareza</span> e
            código.
          </h1>
          <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Olá, sou Ebenezer Silva. Transformo ideias em experiências web
            responsivas, acessíveis e cuidadosas em cada detalhe.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <Button asChild size="3">
              <a
                href="#projetos"
                className="inline-flex  items-center justify-center gap-2 rounded-full text-sm font-semibold transition-[transform,background-color,color,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:-translate-y-0.5 bg-primary text-primary-foreground hover:bg-primary/90 h-12 min-h-12 px-7"
              >
                Explorar projetos <ArrowDown size={16} />
              </a>
            </Button>
            <Button asChild variant="outline" size="3">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full  text-sm font-semibold transition-[transform,background-color,color,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:-translate-y-0.5 border border-border bg-background text-foreground hover:border-foreground h-12 min-h-12 px-7"
              >
                Entrar em contato
              </a>
            </Button>
          </div>
        </div>
        <aside
          className="reveal hidden border-l border-border pl-7 lg:col-span-3 lg:block"
          aria-label="Resumo do portfólio"
        >
          <p className="font-mono text-[0.68rem] font-semibold uppercase text-muted-foreground">
            Portfólio / 2026
          </p>
          <p className="mt-6 font-display text-6xl font-extrabold leading-none text-primary">
            ES.
          </p>
          <div className="mt-10 space-y-4 border-t border-border pt-5 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Foco</span>
              <span className="text-right font-medium">Interfaces web</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Stack</span>
              <span className="text-right font-medium">React + TypeScript</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Princípios</span>
              <span className="text-right font-medium">Clareza + acesso</span>
            </div>
          </div>
        </aside>
      </div>
      <div className="mt-14 flex items-end justify-between border-t border-border pt-5 font-mono text-[0.68rem] uppercase text-muted-foreground lg:col-span-12">
        <span>JavaScript · React · Next.js</span>
        <a
          href="#sobre"
          className="hidden items-center gap-2 transition-colors hover:text-foreground sm:flex"
        >
          Role para descobrir <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}

export default Inicio;
