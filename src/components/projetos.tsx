import { ArrowUpRight } from "lucide-react";
import { RiGithubLine } from "react-icons/ri";

const projects = [
  {
    index: "01",
    title: "Product Preview Card",
    description:
      "Um card de visualização previa de um produto. Nele consta uma descrição preço do produto.",
    tags: ["HTML", "CSS"],
    image: "/assets/product-preview-card-component-main-two-rho.png",
    alt: "Interface produto preview card componente",
    liveUrl: "https://product-preview-card-component-main-two-rho.vercel.app/",
    repoUrl:
      "https://github.com/Bene001700/product-preview-card-component-main",
  },
  {
    index: "02",
    title: "Preview card",
    description:
      "Uma cartão de apresentação de conteúdo com informações prévias titulos e etc...",
    tags: ["HTML", "CSS"],
    image: "/assets/preview-card-main-seven.png",
    alt: "Interface preview card",
    liveUrl: "https://preview-card-main-seven.vercel.app/",
    repoUrl: "https://github.com/Bene001700/preview-card-main",
  },
  {
    index: "03",
    title: "Pagina de receita",
    description:
      "Uma pagina de receita descriminando os Ingredientes e o modo de preparo.",
    tags: ["HTML", "CSS"],
    image: "/assets/recipe-page-main-one-jet.png",
    alt: "Interface de uma Pagina de receita",
    liveUrl: "https://recipe-page-main-one-jet.vercel.app/",
    repoUrl: "https://github.com/Bene001700/recipe-page-main",
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
                  src={project.image}
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
                <div className="flex gap-2 pb-6">
                  <a
                    href={project.liveUrl}
                    aria-label={`Ver projeto ${project.title} no ar`}
                    className="inline-flex items-center gap-1.5 border border-project-line px-3 py-2 font-mono text-[0.68rem] font-semibold uppercase text-project-ink transition-colors duration-200 hover:border-project-coral hover:text-project-coral"
                    target="_blank"
                  >
                    Ver no ar <ArrowUpRight size={13} />
                  </a>
                  <a
                    href={project.repoUrl}
                    aria-label={`Ver código de ${project.title} no GitHub`}
                    className="inline-flex items-center gap-1.5 border border-project-line px-3 py-2 font-mono text-[0.68rem] font-semibold uppercase text-project-ink transition-colors duration-200 hover:border-project-coral hover:text-project-coral"
                    target="_blank"
                  >
                    <RiGithubLine size={13} /> Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;
