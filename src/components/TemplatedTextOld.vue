<template>
  <span class="templated-text-old"> </span>
</template>

<script lang="ts">
/* tslint:disable:member-ordering */

// --------------------------------------------------
// Lib.
// --------------------------------------------------
import { HashByString } from '@/helpers/collections';

// --------------------------------------------------
// Vue
// --------------------------------------------------
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

// --------------------------------------------------
// Component
// --------------------------------------------------
@Component
export default class TemplatedTextOld extends Vue {
  private mounted() {
    this.__resolve();
  }

  // --------------------------------------------------
  // texts
  // --------------------------------------------------
  // ex. '[[key1]] is [[key2]]'
  @Prop() private readonly templateText?: string;
  // ex. { key1: 'Apple', key2: 'fruit' }
  @Prop() private readonly textsByInsertKeys?: HashByString<string>;
  // ex. { key1: ['red--text'], key2: ['blue--text'] }
  @Prop() private readonly classListsByInsertKeys?: HashByString<string[]>;

  // --------------------------------------------------
  // resolve
  // --------------------------------------------------
  @Watch('templateText')
  @Watch('textsByInsertKeys')
  @Watch('classListsByInsertKeys')
  private __resolve() {
    const templateText: string = this.templateText || '';
    const textsByInsertKeys: HashByString<string> =
      this.textsByInsertKeys || {};
    const classListsByInsertKeys: HashByString<string[]> =
      this.classListsByInsertKeys || {};

    // templateText --> terms
    const regex4Split = /(?<=.)(?=\[\[)|(?<=\]\])(?=.)/g;
    const regex4ExtractInsertKey = /(?<=\[\[).*?(?=\]\])/g;
    const terms = templateText.split(regex4Split).map(t => {
      const match = t.match(regex4ExtractInsertKey);
      return {
        insertKey: match == null ? null : match[0],
        value: t,
      };
    });
    // console.log(terms);

    // terms, ... --> elements
    const elems = terms.map(t => {
      const elem = document.createElement('span');
      if (t.insertKey == null) {
        elem.textContent = t.value;
      } else {
        elem.textContent = textsByInsertKeys[t.insertKey] || t.value;
        elem.classList.add(...(classListsByInsertKeys[t.insertKey] || []));
      }
      return elem;
    });
    // console.log(elems.map(o => o.textContent));

    // remove & append elements
    const container = this.$el;
    container.innerHTML = '';
    for (const e of elems) {
      container.appendChild(e);
    }
  }
}
</script>

<style lang="stylus">
.templated-text-old {
}
</style>
