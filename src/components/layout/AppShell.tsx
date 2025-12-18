import type { ReactNode } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { supportedLanguages } from "../../i18n/messages";
import { useTranslations } from "../../i18n/useTranslations";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-24 px-6 py-10 md:px-10 md:py-16">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Portfolio
            </span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
              <a
                href="#projects"
                className="hover:text-accent transition-colors"
              >
                {t.navigation.work}
              </a>
              <a
                href="#experience"
                className="hover:text-accent transition-colors"
              >
                {t.navigation.experience}
              </a>
              <a
                href="#contact"
                className="hover:text-accent transition-colors"
              >
                {t.navigation.contact}
              </a>
            </nav>
            <div className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900 px-1 py-0.5 text-xs">
              {supportedLanguages.map((langCode) => (
                <button
                  key={langCode}
                  type="button"
                  onClick={() => setLanguage(langCode)}
                  className={`rounded-full px-2 py-0.5 transition-colors ${
                    language === langCode
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-300 hover:text-accent"
                  }`}
                  aria-pressed={language === langCode}
                >
                  {langCode.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-24">{children}</main>

        <footer className="border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Victoire Schubert. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}


