import { useTranslations } from "../i18n/useTranslations";

const navigationItems = [
  { href: "#projects", translationKey: "work" as const },
  { href: "#experience", translationKey: "experience" as const },
  { href: "#contact", translationKey: "contact" as const },
];

const NavBar = () => {
  const t = useTranslations();

  return (
    <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
      {navigationItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="hover:text-accent transition-colors"
        >
          {t.navigation[item.translationKey]}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
