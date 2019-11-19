/* tslint:disable:member-ordering */

// --------------------------------------------------
// Lib.
// --------------------------------------------------
import { Hash } from '@/helpers/collections';

// --------------------------------------------------
// Vuex
// --------------------------------------------------
import {
  Module,
  VuexModule,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import store from '@/store';

// --------------------------------------------------
// Data
// --------------------------------------------------
import {
  TextCategoryId as TEXT_CATEGORY_ID,
  LanguageId as LANGUAGE_ID,
} from '@/data/ids';
import { TEXTS_DATA, DEFAULT_LANGUAGE_ID } from '@/data/texts';

// --------------------------------------------------
// Module
// --------------------------------------------------
@Module({ dynamic: true, store, name: 'texts', namespaced: true })
class TextStore extends VuexModule {
  // --------------------------------------------------
  // Common
  // --------------------------------------------------
  constructor(module: any) {
    super(module);

    // ------------------------------
    // Language
    // ------------------------------
    this.defaultLanguageId = DEFAULT_LANGUAGE_ID;
    this.selectedLanguageId = LANGUAGE_ID.Japanese;

    // ------------------------------
    // Text
    // ------------------------------
    this.texts = new Hash();
    this.set(...TEXTS_DATA);
  }

  // --------------------------------------------------
  // Language
  // --------------------------------------------------
  public readonly defaultLanguageId: string;
  public selectedLanguageId: string;

  @Mutation
  public selectLanguage(languageId: string) {
    this.selectedLanguageId = languageId;
  }

  // --------------------------------------------------
  // Text
  // --------------------------------------------------
  private readonly texts: Hash<Hash<Hash<string>>>;

  public get get() {
    return (languageId: string, categoryId: string, keyInCategory: string) => {
      return this.texts
        .get(languageId)
        .get(categoryId)
        .get(keyInCategory);
    };
  }
  public get getInSelected() {
    return (categoryId: string, keyInCategory: string) => {
      return this.get(this.selectedLanguageId, categoryId, keyInCategory);
    };
  }
  public get getInDefault() {
    return (categoryId: string, keyInCategory: string) => {
      return this.get(this.defaultLanguageId, categoryId, keyInCategory);
    };
  }

  @Mutation
  public set(
    ...defs: Array<{
      languageId: string;
      categoryId: string;
      keyInCategory: string;
      text: string;
    }>
  ) {
    for (const { languageId, categoryId, keyInCategory, text } of defs) {
      const hash1 = this.texts;
      const hash2 =
        hash1.tryGet(languageId) || hash1.set(languageId, new Hash());
      const hash3 =
        hash2.tryGet(categoryId) || hash2.set(categoryId, new Hash());
      hash3.set(keyInCategory, text);
    }
  }
}

export const texts = getModule(TextStore);
export { TEXT_CATEGORY_ID };
