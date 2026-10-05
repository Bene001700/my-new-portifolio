import { ArrowDown } from "lucide-react";

function Inicio() {
  return (
    <section className="p-5">
      <div className="flex flex-col gap-6 items-start justify-center">
        <p className="text-primary font-mono text-xs font-semibold uppercase flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-primary"></span>
          Desenvolvedor Front-End
        </p>
        <h1 className="reveal max-w-[12ch] font-display text-[clamp(3.25rem,7.6vw,7rem)] font-extrabold leading-[0.9]">
          Interfaces que unem <span className="text-ring">clareza </span>e
          código.
        </h1>
        <p className="text-lg tex font-font01">
          Olá, sou Ebenezer Silva. Transformo ideias em experiências web
          responsivas, acessíveis e cuidadosas em cada detalhe.
        </p>
        <div className="flex flex-col justify-start font-font01 gap-3">
          <a className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-[transform,background-color,color,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:-translate-y-0.5 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 cursor-pointer">
            Explorar Projetos
            <span>
              <ArrowDown className="w-5 h-5" />
            </span>
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-[transform,background-color,color,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:-translate-y-0.5 border border-border bg-background text-foreground hover:border-foreground h-12 min-h-12 px-7 cursor-pointer">
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
