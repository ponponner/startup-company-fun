import { TextCategoryId } from '@/data/ids';
import { texts } from '@/store/stores/texts';

export class ProductType {
  public static get rowComponentName(): string {
    return texts.getInSelected(TextCategoryId.RawComponentName, '0');
  }

  public readonly id: string;
  public get name(): string {
    return texts.getInSelected(TextCategoryId.ProductTypeName, this.id);
  }
  constructor(id: string) {
    this.id = id;
  }
}
