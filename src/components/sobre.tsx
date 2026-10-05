function Sobre() {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-content gap-12 px-5 py-24">
        <div className="">
          <p className=" section-label">01 / Sobre</p>
          <h2 className="section-title mt-4">
            Construir bem começa por entender.
          </h2>
        </div>
        <div>
          <p className="text-2xl font-medium leading-snug">
            Desenvolvo experiências digitais com base sólida em front-end,
            buscando equilibrar tecnologia, usabilidade e qualidade visual.
          </p>
          <div className="mt-10 grid gap-8 border-t border-border pt-8">
            <div>
              <h3 className="font-display font-bold">Como trabalho</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Organizo cada interface em componentes claros, mantenho o código
                legível e considero diferentes telas desde o início.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold">Em evolução constante</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Minha trajetória é construída por estudo e prática contínua no
                ecossistema JavaScript, sem atalhos ou experiências inventadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
