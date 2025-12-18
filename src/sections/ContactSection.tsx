import type { Contact } from "../types/portfolio";
import { useTranslations } from "../i18n/useTranslations";

type ContactSectionProps = {
  contact: Contact;
};

export function ContactSection({ contact }: ContactSectionProps) {
  const t = useTranslations();

  return (
    <section id="contact" aria-labelledby="contact-heading" className="space-y-6">
      <header className="space-y-2">
        <h2
          id="contact-heading"
        >
          {t.contact.heading}
        </h2>
        <p className="max-w-2xl text-sm text-slate-400">
          {t.contact.ctaPrefix}
        </p>
      </header>

      <div className="flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 text-sm text-slate-300">
          <p>
            Based in <span className="font-medium text-slate-100">{contact.location}</span>
          </p>
          <p>
            {t.contact.emailIntro}{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-accent hover:text-accentMuted transition-colors"
            >
              {contact.email}
            </a>
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          {contact.social.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-accent hover:text-accent transition-colors"
            >
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


