import { TextCategoryId } from '@/data/ids';
import { texts } from '@/store/stores/texts';

export class EmployeeLevel {
  public readonly id: string;
  public get name(): string {
    return texts.getInSelected(TextCategoryId.EmployeeLevelName, this.id);
  }

  constructor(id: string) {
    this.id = id;
  }
}
