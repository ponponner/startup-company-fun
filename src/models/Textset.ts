import { Hash } from '@/helpers/collections';
import { TextsetDefinition } from './TextsetDefinition';

export class Textset {
  private hash1: Hash<Hash<string>> = new Hash();

  constructor(defs?: TextsetDefinition[]) {
    if (defs == null) {
      return;
    }
    this.upsertAll(defs);
  }

  public get(category: string, keyInCategory?: string): string | undefined {
    const hash2 = this.hash1.get(category);
    if (hash2 == null) {
      return undefined;
    }
    if (keyInCategory == null) {
      return hash2.get('0');
    }
    return hash2.get(keyInCategory);
  }
  public set(category: string, keyInCategory: string, text: string) {
    let hash2 = this.hash1.get(category);
    if (hash2 == null) {
      this.hash1.set(category, (hash2 = new Hash()));
    }
    hash2.set(keyInCategory, text);
  }
  public upsertAll(defs: TextsetDefinition[]) {
    defs.forEach(item => {
      this.set(item.category, item.keyInCategory, item.text);
    });
  }
  public clear() {
    this.hash1 = new Hash();
  }
  public getTextsetDefinitions(): TextsetDefinition[] {
    const def: TextsetDefinition[] = [];
    for (const e1 of this.hash1.entries) {
      for (const e2 of e1.value.entries) {
        def.push(new TextsetDefinition(e1.key, e2.key, e2.value));
      }
    }
    return def;
  }
}
