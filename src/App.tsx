import portfolioData from "./data/portfolio.json";
import type { PortfolioData } from "./types/portfolio";
import { AppShell } from "./components/layout/AppShell";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ContactSection } from "./sections/ContactSection";

const typedPortfolioData = portfolioData as PortfolioData;

function App() {
  const { about, projects, experience, contact } = typedPortfolioData;

  return (
    <AppShell>
      <HeroSection about={about} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experience={experience} />
      <ContactSection contact={contact} />
    </AppShell>
  );
}

export default App;


