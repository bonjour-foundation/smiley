interface Translation {
  [key: string]: string;
}

interface Translations {
  de: Translation;
  en: Translation;
}

const DEFAULT_LANGUAGE: 'en' = 'en';

const SUPPORTED_LANGUAGES: string[] = ['de', 'en'];

const TRANSLATIONS: Translations = {
  de: {
    question: 'Wie fühlen Sie sich heute?',
    super: 'sehr gut',
    well: 'gut',
    okay: 'soso lala',
    not_well: 'nicht so gut',
    bad: 'nicht gut'
  },
  en: {
    question: 'How do you feel today?',
    super: 'super',
    well: 'well',
    okay: 'okay',
    not_well: 'not so well',
    bad: 'bad'
  }
};

// Source: ngx-translate / https://github.com/ngx-translate/core/blob/a13b700db0e3a509e0e81ef4fe846b7e87f1396b/projects/ngx-translate/core/src/lib/translate.service.ts#L506
const initBrowserLang = (): string | undefined => {
  if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
    return undefined;
  }

  let browserLang: string | null =
    window.navigator.languages && window.navigator.languages.length > 0 ? window.navigator.languages[0] : null;
  // @ts-ignore
  browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

  if (typeof browserLang === 'undefined') {
    return undefined;
  }

  if (browserLang.indexOf('-') !== -1) {
    browserLang = browserLang.split('-')[0];
  }

  if (browserLang.indexOf('_') !== -1) {
    browserLang = browserLang.split('_')[0];
  }

  return browserLang;
};

const browserLang: string | undefined = initBrowserLang();

export const translate = (key: string, customLang?: 'de' | 'en'): string => {
  const lang: string | undefined = customLang || browserLang;
  return TRANSLATIONS[lang !== undefined && SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE][key];
};
