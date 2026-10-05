import { ArrowDown } from "lucide-react";

function Inicio() {
  return (
    <section className="p-5">
      <div className="flex flex-col gap-6 items-start justify-center">
        <p className="text-primary font-mono text-xs font-semibold uppercase flex items-center justify-center gap-2">
          <span className="w-8 h-0.5 inline-block bg-aceent"></span>
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
          <a className="flex items-center cursor-pointer hover:bg-ring justify-center w-fit h-12 px-7 rounded-full text-white bg-aceent text-sm border font-semibold gap-2">
            Explorar Projetos
            <span>
              <ArrowDown className="w-5 h-5" />
            </span>
          </a>
          <a className="flex items-center justify-center w-fit px-7 h-12  rounded-full border border-input text-black hover:border-black transition-all cursor-pointer font-semibold  text-sm">
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
