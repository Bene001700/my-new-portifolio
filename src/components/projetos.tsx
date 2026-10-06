const projects = [
  {
    index: "01",
    title: "Dashboard analítico",
    description:
      "Um estudo de interface para transformar dados complexos em decisões rápidas, com filtros, indicadores e visualização responsiva.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/assets/project-dashboard.jpg",
    alt: "Interface demonstrativa de dashboard analítico",
  },
  {
    index: "02",
    title: "Planejador de estudos",
    description:
      "Uma experiência organizada para planejar tarefas e acompanhar rotinas, combinando calendário, quadros e prioridades.",
    tags: ["Next.js", "React", "CSS"],
    image: "/assets/project-planner.jpg",
    alt: "Interface demonstrativa de planejador de estudos",
  },
  {
    index: "03",
    title: "Sistema de componentes",
    description:
      "Uma biblioteca visual criada para manter consistência, acelerar entregas e garantir acessibilidade em diferentes telas.",
    tags: ["React", "HTML", "Tailwind CSS"],
    image: "/assets/project-system.jpg",
    alt: "Interface demonstrativa de sistema de componentes",
  },
];
function Projetos() {
  return (
    <section
      id="projetos"
      className="border-t border-project-line bg-project-paper text-project-ink"
    >
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-6 border-b border-project-line pb-9 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-project-coral">
              02 / Projetos
            </p>
          </div>
        </div>
        <div className="grid gap-x-7 gap-y-12 pt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.index}
              className="group flex min-w-0 flex-col"
            >
              <div className="relative aspect-\[16/10] overflow-hidden bg-project-line/25">
                <img
                  src={`/src${project.image}`}
                  alt={project.alt}
                  loading="lazy"
                  width={1200}
                  height={752}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.045]"
                />
                <span className="absolute right-3 top-3 bg-project-paper px-2.5 py-1.5 font-mono text-[0.65rem] font-semibold text-project-ink">
                  {project.index} / 03
                </span>
              </div>
              <div className="flex flex-1 flex-col border-b border-project-line pt-5 transition-colors duration-300 group-hover:border-project-coral">
                <p className="font-mono text-[0.65rem] font-semibold uppercase text-project-coral">
                  Estudo de interface
                </p>
                <h3 className="mt-2 font-display text-xl font-bold leading-snug sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-project-ink/70">
                  {project.description}
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 py-6 font-mono text-[0.68rem] text-project-ink/65">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;
