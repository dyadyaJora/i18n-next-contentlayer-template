export const fallbackLng: string = 'en';
export const languages: string[] = [fallbackLng, 'de', 'ru'];
export const defaultNS: string = 'translation';
export const cookieName: string = 'i18next';
export const selfNames: any = {'en': 'English', 'de': 'Deutsch', 'ru': 'Русский'};

interface I18nOptions {
  supportedLngs: string[];
  fallbackLng: string;
  lng: string;
  fallbackNS: string;
  defaultNS: string;
  ns: string[];
  backend: {
    loadPath: string;
  };
}

export function getOptions(lng: string = fallbackLng, ns: string = defaultNS): I18nOptions {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns: ['translation', ns],
    backend: {
      loadPath: 'app/i18n/locales/{{lng}}/{{ns}}.json'
    }
  };
}
