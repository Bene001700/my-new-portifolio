import { Mail, MessageCircle } from "lucide-react";

import { Button } from "./ui/button";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
function Contantos() {
  return (
    <section id="contato" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-content px-5 py-24 lg:px-8 lg:py-32">
        <p className="font-mono text-xs font-semibold uppercase">
          04 / Contato
        </p>
        <h2 className="mt-6 max-w-[12ch] font-display text-[clamp(3rem,7vw,6.4rem)] font-extrabold leading-[0.94]">
          Tem uma ideia? Vamos conversar.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="inverse">
            <a href="mailto:ebenezersilva7@gmail.com">
              <Mail size={17} />
              E-mail
            </a>
          </Button>
          <Button asChild variant="inverse">
            <a
              href="https://w.app/ebenezersilva"
              aria-label="WhatsApp"
              target="_blank"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </Button>
          <Button asChild variant="inverse">
            <a
              href="https://www.linkedin.com/in/ebenezer-silva/"
              aria-label="Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <RiLinkedinLine size={17} />
              Linkedin
            </a>
          </Button>
          <Button asChild variant="inverse">
            <a
              href="https://github.com/Bene001700/"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine size={17} />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contantos;
