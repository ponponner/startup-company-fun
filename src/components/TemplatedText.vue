<template>
  <span class="templated-text">
    <slot></slot>
  </span>
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
export default class TemplatedText extends Vue {
  private mounted() {
    this.__takeupTemplateElements();
    this.__resolve();
  }

  // --------------------------------------------------
  // texts
  // --------------------------------------------------
  // ex. '[[key1]] is [[key2]]'
  @Prop() private readonly templateText?: string;
  // ex. { key1: 'Apple', key2: 'fruit' }
  @Prop() private readonly textsByInsertKeys?: HashByString<string>;

  // --------------------------------------------------
  // template elements
  // --------------------------------------------------
  private readonly templateElements: HashByString<Element> = {};

  private __takeupTemplateElements() {
    // select
    const elems = Array.from(this.$el.children);
    // remove
    elems.forEach(e => e.remove());
    // keep
    for (const e of elems) {
      if (e.textContent != null) {
        this.templateElements[e.textContent.trim()] = e;
      }
    }
    // console.log(this.templateElements);
  }

  // --------------------------------------------------
  // resolve
  // --------------------------------------------------
  @Watch('templateText')
  @Watch('textsByInsertKeys')
  private __resolve() {
    const templateText: string = this.templateText || '';
    const textsByInsertKeys: HashByString<string> =
      this.textsByInsertKeys || {};

    // # templateText --> terms
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

    // # terms, ... --> elements
    const elems = terms.map(t => {
      if (t.insertKey == null) {
        const elem = document.createElement('span');
        elem.textContent = t.value;
        return elem;
      } else {
        const tmplElem = this.templateElements[t.insertKey];
        const elem =
          tmplElem != null ? tmplElem : document.createElement('span');
        const text = textsByInsertKeys[t.insertKey];
        elem.textContent = text == null ? t.value : text;
        return elem;
      }
    });
    // console.log(elems.map(e => e.textContent));

    // # remove & append elements
    const container = this.$el;
    container.innerHTML = '';
    for (const e of elems) {
      container.appendChild(e);
    }
  }
}
</script>

<style lang="stylus">
.templated-text {
}
</style>
