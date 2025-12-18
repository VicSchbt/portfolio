import type { ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-24 px-6 py-10 md:px-10 md:py-16">
        <header className="flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Portfolio
          </span>
          <nav className="flex gap-6 text-sm text-slate-300">
            <a href="#projects" className="hover:text-accent transition-colors">
              Work
            </a>
            <a href="#experience" className="hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
        </header>

        <main className="flex flex-1 flex-col gap-24">{children}</main>

        <footer className="border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Victoire Schubert. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}


