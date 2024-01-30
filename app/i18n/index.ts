import { createInstance, i18n, TFunction, InitOptions } from 'i18next';
import { getOptions } from './settings';
import Backend from 'i18next-fs-backend';

const initI18next = async (lng: string, ns: string): Promise<i18n> => {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(Backend)
    .init(getOptions(lng, ns), (err: Error) => {
      if (err) {
        console.error(err);
      }
    });

  return i18nInstance;
};

export async function useTranslation(lng: string, ns: string, options: InitOptions = {}): Promise<{ t: TFunction; i18n: i18n }> {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns),
    i18n: i18nextInstance
  };
}
