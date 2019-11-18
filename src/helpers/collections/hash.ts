import { Vue } from 'vue-property-decorator';

export interface HashByNumber<TValue> {
  [key: number]: TValue | undefined;
}
export interface HashByString<TValue> {
  [key: string]: TValue | undefined;
}

export interface PrimitiveHash<TValue> {
  [key: string]: TValue;
}

export interface HashEntry<TValue> {
  key: string;
  value: TValue;
}

export class Hash<TValue> {
  public static fromEntries<TValue>(
    entries: Array<HashEntry<TValue>>
  ): Hash<TValue> {
    const hash = new Hash<TValue>();
    for (const e of entries) {
      hash.set(e.key, e.value);
    }
    return hash;
  }

  private hash: { [key: string]: TValue | undefined } = {};

  public get keys(): string[] {
    return Object.keys(this.hash);
  }
  public get values(): TValue[] {
    return this.keys.map(k => this.hash[k] as TValue);
  }
  public get entries(): Array<HashEntry<TValue>> {
    return this.keys.map(k => ({ key: k, value: this.hash[k] as TValue }));
  }
  public get size(): number {
    return this.keys.length;
  }

  public clear() {
    this.hash = {};
  }
  public remove(key: string) {
    Vue.delete(this.hash, key);
  }
  public get(key: string): TValue {
    const value = this.hash[key];
    if (value == null) {
      throw new Error(`Cannot find value of the key: ${value}`);
    }
    return value;
  }
  public tryGet(key: string): TValue | undefined {
    return this.hash[key];
  }
  public has(key: string): boolean {
    return this.keys.find(k => k === key) !== undefined;
  }
  public set(key: string, value: TValue): TValue {
    return Vue.set(this.hash, key, value);
  }
}
