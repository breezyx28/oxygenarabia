import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useMemo } from "react";

// Constants for better maintainability
const LANGUAGES = {
  EN: "en",
  AR: "ar",
} as const;

const DIRECTIONS = {
  LTR: "ltr",
  RTL: "rtl",
} as const;

const STORAGE_KEYS = {
  LANGUAGE: "i18nextLng",
  DIRECTION: "documentDirection",
} as const;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Initialize language and direction on component mount
  useEffect(() => {
    const initializeLanguage = () => {
      // Try to get language from localStorage first, then from i18n, then default to 'en'
      const savedLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE) as
        | keyof typeof LANGUAGES
        | null;
      const currentLang = savedLang || i18n.language || LANGUAGES.EN;

      // Ensure the language is valid, fallback to 'en' if not
      const validLang = Object.values(LANGUAGES).includes(currentLang as any)
        ? currentLang
        : LANGUAGES.EN;

      // Set direction based on language
      const direction =
        validLang === LANGUAGES.AR ? DIRECTIONS.RTL : DIRECTIONS.LTR;

      // Update document and body
      document.documentElement.dir = direction;
      document.body.dir = direction;

      // Update i18n if needed
      if (validLang !== i18n.language) {
        i18n.changeLanguage(validLang);
      }

      // Save to localStorage
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, validLang);
      localStorage.setItem(STORAGE_KEYS.DIRECTION, direction);
    };

    initializeLanguage();
  }, [i18n]);

  const toggleLanguage = useCallback(() => {
    const newLang =
      i18n.language === LANGUAGES.EN ? LANGUAGES.AR : LANGUAGES.EN;
    const newDirection =
      newLang === LANGUAGES.AR ? DIRECTIONS.RTL : DIRECTIONS.LTR;

    // Update i18n
    i18n.changeLanguage(newLang);

    // Update document direction
    document.documentElement.dir = newDirection;
    document.body.dir = newDirection;

    // Save to localStorage
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, newLang);
    localStorage.setItem(STORAGE_KEYS.DIRECTION, newDirection);
  }, [i18n]);

  // Memoized flag components to prevent unnecessary re-renders
  const SaudiFlag = useMemo(
    () => () => <img className="w-8 h-6" src="/icons/png/saudi-flag.png" />,
    []
  );

  const USFlag = useMemo(
    () => () =>
      (
        <svg className="w-8 h-6" viewBox="0 0 24 16">
          <rect width="24" height="16" fill="#B22234" />
          <rect width="24" height="1.23" y="1.23" fill="white" />
          <rect width="24" height="1.23" y="3.69" fill="white" />
          <rect width="24" height="1.23" y="6.15" fill="white" />
          <rect width="24" height="1.23" y="8.61" fill="white" />
          <rect width="24" height="1.23" y="11.07" fill="white" />
          <rect width="24" height="1.23" y="13.53" fill="white" />
          <rect width="9.6" height="8.61" fill="#3C3B6E" />
        </svg>
      ),
    []
  );

  // Determine current flag and text
  const { CurrentFlag, languageText } = useMemo(() => {
    const isArabic = i18n.language === LANGUAGES.AR;
    return {
      CurrentFlag: isArabic ? USFlag : SaudiFlag,
      languageText: isArabic ? "EN" : "AR",
    };
  }, [i18n.language, SaudiFlag, USFlag]);

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-2 py-1 rounded-md"
      aria-label={`Switch to ${languageText} language`}
    >
      <CurrentFlag />
      {/* <span className="text-xs font-medium text-white">{languageText}</span> */}
    </button>
  );
};

export default LanguageSwitcher;
