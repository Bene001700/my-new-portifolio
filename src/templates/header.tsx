import { Button } from "@radix-ui/themes";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ["Sobre", "#sobre"],
    ["Projetos", "#projetos"],
    ["Habilidades", "#habilidades"],
    ["Contato", "#contato"],
  ] as const;
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 lg:px-8">
          <a
            href="#inicio"
            className="font-display text-lg font-semibold"
            aria-label="Ir ao início"
          >
            ES<span className="text-primary">.</span>
          </a>
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Navegação principal"
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild>
              <a
                href="#contato"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-[transform,background-color,color,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:-translate-y-0.5 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-5"
              >
                Vamos conversar <ArrowUpRight size={16} />
              </a>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="3"
            className="md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav
            className="border-t border-border bg-background px-5 py-5 md:hidden"
            aria-label="Navegação móvel"
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border py-3 font-display text-2xl font-bold"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
