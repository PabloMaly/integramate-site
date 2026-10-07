import { getRelativeLocaleUrl } from 'astro:i18n';
import { en, type Dictionary } from './en';
import { es } from './es';

export type Locale = 'en' | 'es';

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localeUrl(locale: Locale, path = ''): string {
  return getRelativeLocaleUrl(locale, path);
}
