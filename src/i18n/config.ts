export type Locale = (typeof locales)[number];

export const locales = [
  'en',
  'zh',
  'fr',
  'es',
  'ja',
  'ru',
  'pt',
  'de',
  'it',
  'sv',
  'tr',
  'nl',
  'nb',
  'pl',
  'id',
  'uk',
  'fi',
] as const;
export const defaultLocale: Locale = 'en';
