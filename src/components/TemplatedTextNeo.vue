<template>
  <span class="templated-text-neo">
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

function createHtmlSpanElement(text: string) {
  const elem = document.createElement('span');
  elem.textContent = text;
  return elem;
}

// --------------------------------------------------
// Component
// --------------------------------------------------
@Component
export default class TemplatedTextNeo extends Vue {
  // ex. '[[key1]] is [[key2]]'
  @Prop() private readonly template?: string;

  private readonly elementsByTags: HashByString<Element> = {};

  private mounted() {
    this.__takeupTaggedElements();
    this.__resolve();
  }

  private __takeupTaggedElements() {
    for (const e of Array.from(this.$el.children)) {
      const tag = e.getAttribute('tag');
      if (tag == null) {
        throw new Error(`Element does not have 'tag' attribute.`);
      }
      e.remove();
      this.elementsByTags[tag] = e;
    }
    // console.log('tagged-elements:', this.elementsByTags.entries);
  }

  @Watch('template')
  private __resolve() {
    const template: string = this.template || '';

    // # template --> terms
    const regex4Split = /(?<=.)(?=\[\[)|(?<=\]\])(?=.)/g;
    const regex4ExtractTag = /(?<=\[\[).*?(?=\]\])/g;
    const terms = template.split(regex4Split).map(t => {
      const match = t.match(regex4ExtractTag);
      return {
        value: t,
        tag: match == null ? null : match[0],
      };
    });
    // console.log(terms);

    // # terms, taggedElements --> elements
    const elems = terms.map(t => {
      if (t.tag == null) {
        return createHtmlSpanElement(t.value);
      } else {
        const tagged = this.elementsByTags[t.tag];
        return tagged == null ? createHtmlSpanElement(t.value) : tagged;
      }
    });
    // console.log(
    //   elems.map(e => ({
    //     text: e.textContent,
    //     element: e,
    //   }))
    // );

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
.templated-text-neo {
}
</style>
