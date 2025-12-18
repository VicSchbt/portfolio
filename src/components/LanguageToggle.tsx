import { useLanguage } from "../i18n/LanguageContext";
import { supportedLanguages } from "../i18n/messages";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-pink-700 bg-pink-800 p-1 text-sm">
      {supportedLanguages.map((langCode) => (
        <button
          key={langCode}
          type="button"
          onClick={() => setLanguage(langCode)}
          className={`rounded-full px-2 py-0.5 transition-colors ${
            language === langCode
              ? "bg-pink-100 text-pink-900"
              : "text-pink-300 hover:text-pink-100"
          }`}
          aria-pressed={language === langCode}
        >
          {langCode.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
