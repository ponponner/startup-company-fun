import { TextCategoryId } from '@/data/ids';
import { texts } from '@/store/stores/texts';

export class Language {
  public readonly id: string;
  public get name(): string {
    return texts.getInSelected(TextCategoryId.LanguageName, this.id);
  }
  constructor(id: string) {
    this.id = id;
  }
}
