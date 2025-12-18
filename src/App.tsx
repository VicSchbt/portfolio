import portfolioData from "./data/portfolio.json";
import type { PortfolioData } from "./types/portfolio";
import AppLayout from "./layout/AppLayout";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ContactSection } from "./sections/ContactSection";
import { useLanguage } from "./i18n/LanguageContext";

const typedPortfolioData = portfolioData as PortfolioData;

function App() {
  const { language } = useLanguage();
  const { about, projects, experience, contact } = typedPortfolioData;

  return (
    <AppLayout>
      <HeroSection about={about[language]} />
      <ProjectsSection projects={projects[language]} />
      <ExperienceSection experience={experience[language]} />
      <ContactSection contact={contact[language]} />
    </AppLayout>
  );
}

export default App;
