import { useLanguage } from "./LanguageContext";
import { messages } from "./messages";

export function useTranslations() {
  const { language } = useLanguage();
  return messages[language];
}


