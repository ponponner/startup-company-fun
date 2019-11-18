export class TextsetDefinition {
  public readonly category: string;
  public readonly keyInCategory: string;
  public readonly text: string;

  constructor(category: string, keyInCategory: string, text: string) {
    this.category = category;
    this.keyInCategory = keyInCategory;
    this.text = text;
  }
}
