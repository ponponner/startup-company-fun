import { TextCategoryId } from '@/data/ids';
import { texts } from '@/store/stores/texts';

export class EmployeeType {
  public readonly id: string;
  public get name(): string {
    return texts.getInSelected(TextCategoryId.EmployeeTypeName, this.id);
  }
  constructor(id: string) {
    this.id = id;
  }
}
