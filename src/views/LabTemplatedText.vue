<template>
  <v-container class="lab-templated-text" fill-height fluid pa-0>
    <v-layout column fill-height>
      <v-flex shrink>
        <header>
          <h1>Lab. Templated Text</h1>
          <v-layout align-center>
            <v-menu open-on-hover offset-y>
              <template v-slot:activator="{ on }">
                <v-btn
                  class="lab-templated-text__menu-btn"
                  v-on="on"
                  text
                  width="220"
                >
                  <span
                    >LANGUAGE:
                    {{ getLanguageNameInEnglish(selectedLanguage.id) }}</span
                  >
                  <v-spacer />
                  <span>▼</span>
                </v-btn>
              </template>
              <v-list class="lab-templated-text__menu-content">
                <v-list-item
                  v-for="lang in languages"
                  :key="lang.id"
                  @click="selectedLanguage = lang"
                >
                  <v-list-item-title>
                    {{ getLanguageNameInEnglish(lang.id) }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-divider vertical />
            <v-menu open-on-hover offset-y>
              <template v-slot:activator="{ on }">
                <v-btn
                  class="lab-templated-text__menu-btn"
                  v-on="on"
                  text
                  width="180"
                >
                  <span>COLOR: </span>
                  <span :class="`${selectedColor}--text`">{{
                    selectedColor.replace(/^./, x => x.toUpperCase())
                  }}</span>
                  <v-spacer />
                  <span>▼</span>
                </v-btn>
              </template>
              <v-list class="lab-templated-text__menu-content">
                <v-list-item
                  v-for="(color, i) in colors"
                  :key="i"
                  @click="selectedColor = color"
                >
                  <v-list-item-title>
                    <div :class="`${color}--text`">
                      {{ color.replace(/^./, x => x.toUpperCase()) }}
                    </div>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-divider vertical />
          </v-layout>
        </header>
      </v-flex>
      <v-flex class="lab-templated-text__body" grow>
        <v-layout column>
          <v-card class="lab-templated-text__card-of-templated-text">
            <v-card-title>
              TemplatedText
            </v-card-title>
            <v-divider />
            <v-card-text>
              <v-layout column>
                <TemplatedText
                  v-for="(item, index) in [
                    [persistentLanguage, persistentLanguage],
                    [persistentLanguage, -1],
                    [selectedLanguage, -1],
                    [selectedLanguage, selectedLanguage],
                    [-1, -1], // test
                  ]"
                  :key="index"
                  :template-text="templates[item[0].id]"
                  :texts-by-insert-keys="textsets[item[1].id]"
                >
                  <span :class="classListsByInsertKeys[wordingKey.Person]">{{
                    wordingKey.Person
                  }}</span>
                  <span :class="classListsByInsertKeys[wordingKey.Action]">{{
                    wordingKey.Action
                  }}</span>
                  <span :class="classListsByInsertKeys[wordingKey.Target]">{{
                    wordingKey.Target
                  }}</span>
                  <span :class="classListsByInsertKeys[wordingKey.Tool]">{{
                    wordingKey.Tool
                  }}</span>
                </TemplatedText>
              </v-layout>
            </v-card-text>
          </v-card>
          <v-card class="lab-templated-text__card-of-templated-text-old">
            <v-card-title>
              TemplatedTextOld
            </v-card-title>
            <v-divider />
            <v-card-text>
              <v-layout column>
                <TemplatedTextOld
                  v-for="(item, index) in [
                    [persistentLanguage, persistentLanguage],
                    [persistentLanguage, -1],
                    [selectedLanguage, -1],
                    [selectedLanguage, selectedLanguage],
                    [-1, -1], // test
                  ]"
                  :key="index"
                  :template-text="templates[item[0].id]"
                  :texts-by-insert-keys="textsets[item[1].id]"
                  :class-lists-by-insert-keys="classListsByInsertKeys"
                />
              </v-layout>
            </v-card-text>
          </v-card>
          <v-card class="lab-templated-text__card-of-templated-text-neo">
            <v-card-title>
              TemplatedTextNeo
            </v-card-title>
            <v-divider />
            <v-card-text>
              <v-layout column>
                <TemplatedTextNeo
                  v-for="lang in [persistentLanguage, selectedLanguage]"
                  :key="lang.id"
                  :template="templates[lang.id]"
                >
                  <span
                    :class="classListsByInsertKeys[wk]"
                    v-for="wk in [
                      wordingKey.Person,
                      wordingKey.Action,
                      wordingKey.Target,
                      wordingKey.Tool,
                    ]"
                    :key="wk"
                    :tag="wk"
                    >{{ textsets[lang.id][wk] }}</span
                  >
                </TemplatedTextNeo>
                <TemplatedTextNeo :template="templates[selectedLanguage.id]" />
                <TemplatedTextNeo />
              </v-layout>
            </v-card-text>
          </v-card>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script  lang="ts">
/* tslint:disable:member-ordering */

// --------------------------------------------------
// Vue
// --------------------------------------------------
import { Component, Vue } from 'vue-property-decorator';

// --------------------------------------------------
// Models
// --------------------------------------------------
import { Language } from '@/models/Language';

// --------------------------------------------------
// Data
// --------------------------------------------------
import { LanguageId } from '@/data/ids';

// --------------------------------------------------
// Stores
// --------------------------------------------------
import { catalog } from '@/store/stores/catalog';

// --------------------------------------------------
// Components
// --------------------------------------------------
import TemplatedText from '@/components/TemplatedText.vue';
import TemplatedTextOld from '@/components/TemplatedTextOld.vue';
import TemplatedTextNeo from '@/components/TemplatedTextNeo.vue';
import { texts, TEXT_CATEGORY_ID } from '../store/stores/texts';

enum WordKey {
  Person,
  Action,
  Target,
  Tool,
}

const templates = {
  [LanguageId.English]: `[[${WordKey.Person}]] [[${WordKey.Action}]] [[${WordKey.Target}]] with [[${WordKey.Tool}]].`,
  [LanguageId.Japanese]: `[[${WordKey.Person}]]は[[${WordKey.Tool}]]で[[${WordKey.Target}]]を[[${WordKey.Action}]]ます。`,
  [LanguageId.Italian]: `[[${WordKey.Person}]] [[${WordKey.Action}]] [[${WordKey.Target}]] con [[${WordKey.Tool}]].`,
};

const textsets = {
  [LanguageId.English]: {
    [WordKey.Person]: 'Bob',
    [WordKey.Action]: 'crushes',
    [WordKey.Target]: 'the apple',
    [WordKey.Tool]: 'a hammer',
  },
  [LanguageId.Japanese]: {
    [WordKey.Person]: 'ボブ',
    [WordKey.Action]: '砕き',
    [WordKey.Target]: 'りんご',
    [WordKey.Tool]: '金槌',
  },
  [LanguageId.Italian]: {
    [WordKey.Person]: 'Bob',
    [WordKey.Action]: 'schiaccia',
    [WordKey.Target]: 'la mela',
    [WordKey.Tool]: 'un martello',
  },
};

// --------------------------------------------------
// Component
// --------------------------------------------------
@Component({
  components: {
    TemplatedText,
    TemplatedTextOld,
    TemplatedTextNeo,
  },
})
export default class LabWording extends Vue {
  // --------------------------------------------------
  // LanguageId
  // --------------------------------------------------
  private readonly languages = catalog.languages.values;
  private persistentLanguage = catalog.languages.get(LanguageId.English);
  private selectedLanguage = catalog.languages.get(LanguageId.Japanese);
  private getLanguageNameInEnglish(languageId: string) {
    return texts.get(
      LanguageId.English,
      TEXT_CATEGORY_ID.LanguageName,
      languageId
    );
  }

  // --------------------------------------------------
  // Color
  // --------------------------------------------------
  private readonly colors: string[] = ['blue', 'purple', 'brown'];
  private selectedColor = this.colors[0];

  // --------------------------------------------------
  // WordKey
  // --------------------------------------------------
  private readonly wordingKey = WordKey;

  // --------------------------------------------------
  // Arguments of TemplatedText
  // --------------------------------------------------
  private get templates() {
    return templates;
  }
  private get textsets() {
    return textsets;
  }
  private get classListsByInsertKeys() {
    return {
      [WordKey.Person]: [`${this.selectedColor}--text`],
      [WordKey.Action]: ['green--text'],
      [WordKey.Target]: ['red--text'],
      [WordKey.Tool]: ['orange--text', 'font-italic'],
    };
  }
}
</script>

<style lang="stylus" scoped>
.lab-templated-text {
  &__body {
    padding: 16px;

    .v-card {
      + .v-card {
        margin-top: 16px;
      }
    }
  }

  &__menu-btn {
    height: 48px !important;
    justify-content: left !important;
    text-transform: none !important;
    color: rgba(black, 0.8);
  }

  &__menu-content {
    font-weight: bold;
    opacity: 0.95;
  }
}
</style>
