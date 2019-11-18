import { LanguageId } from '@/data/ids';
import { inEnglish } from './inEnglish';
import { inJapanese } from './inJapanese';
import { TextsInSpecificLanguage } from './__utils';

const texts: { [key: string]: TextsInSpecificLanguage } = {
  [LanguageId.English]: inEnglish,
  [LanguageId.Japanese]: inJapanese,
};
const TEXTS_DATA: Array<{
  languageId: string;
  categoryId: string;
  keyInCategory: string;
  text: string;
}> = [];

for (const [languageId, o2] of Object.entries(texts)) {
  for (const [categoryId, o3] of Object.entries(o2)) {
    for (const [keyInCategory, text] of Object.entries(o3)) {
      TEXTS_DATA.push({ languageId, categoryId, keyInCategory, text });
    }
  }
}

export { TEXTS_DATA };
export const DEFAULT_LANGUAGE_ID = '' + LanguageId.English;
