import type { ReactNode } from "react";
import LanguageToggle from "../components/LanguageToggle";
import NavBar from "../components/NavBar";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex max-w-5xl flex-col gap-24 px-6 py-10 md:px-10 md:py-16">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className=" font-semibold font-mono tracking-[0.2em] text-pink-600">
              Portfolio
            </span>
          </div>
          <div className="flex items-center gap-4">
            <NavBar />
            <LanguageToggle />
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-24">{children}</main>

        <footer className="border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Victoire Schubert. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default AppLayout;