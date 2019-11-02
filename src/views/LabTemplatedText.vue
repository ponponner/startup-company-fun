<template>
  <v-container class="lab-templated-text" fill-height fluid pa-0>
    <v-layout column fill-height>
      <v-flex class="lab-templated-text__header" shrink>
        <h1>LAB. TEMPLATED TEXT</h1>
        <div class="lab-templated-text__menues">
          <v-layout align-center>
            <v-menu
              class="lab-templated-text__menu--language"
              open-on-hover
              offset-y
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  class="lab-templated-text__menu-button"
                  v-on="on"
                  text
                  width="220"
                >
                  <span>LANGUAGE: {{ languageNames[selectedLanguage] }}</span>
                  <v-spacer />
                  <span>▼</span>
                </v-btn>
              </template>
              <v-list class="lab-templated-text__menu-content">
                <v-list-item
                  v-for="lng in languages"
                  :key="lng"
                  @click="selectedLanguage = lng"
                >
                  <v-list-item-title>
                    {{ languageNames[lng] }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-divider vertical />
            <v-menu
              class="lab-templated-text__menu--color"
              open-on-hover
              offset-y
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  class="lab-templated-text__menu-button"
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
        </div>
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
                  :template-text="templates[item[0]]"
                  :texts-by-insert-keys="textsets[item[1]]"
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
                  :template-text="templates[item[0]]"
                  :texts-by-insert-keys="textsets[item[1]]"
                  :class-lists-by-insert-keys="classListsByInsertKeys"
                />
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

import { Component, Vue } from 'vue-property-decorator';

import { Language, LANGUAGES } from '@/models/language';
import { TextCategory, glbTexts } from '@/models/text';

import TemplatedText from '@/components/TemplatedText.vue';
import TemplatedTextOld from '@/components/TemplatedTextOld.vue';

enum WordKey {
  Person,
  Action,
  Target,
  Tool,
}

const templates = {
  [Language.English]: `[[${WordKey.Person}]] [[${WordKey.Action}]] [[${WordKey.Target}]] with [[${WordKey.Tool}]].`,
  [Language.Japanese]: `[[${WordKey.Person}]]は[[${WordKey.Tool}]]で[[${WordKey.Target}]]を[[${WordKey.Action}]]ます。`,
  [Language.Italian]: `[[${WordKey.Person}]] [[${WordKey.Action}]] [[${WordKey.Target}]] con [[${WordKey.Tool}]].`,
};

const textsets = {
  [Language.English]: {
    [WordKey.Person]: 'Bob',
    [WordKey.Action]: 'crushes',
    [WordKey.Target]: 'the apple',
    [WordKey.Tool]: 'a hammer',
  },
  [Language.Japanese]: {
    [WordKey.Person]: 'ボブ',
    [WordKey.Action]: '砕き',
    [WordKey.Target]: 'りんご',
    [WordKey.Tool]: '金槌',
  },
  [Language.Italian]: {
    [WordKey.Person]: 'Bob',
    [WordKey.Action]: 'schiaccia',
    [WordKey.Target]: 'la mela',
    [WordKey.Tool]: 'un martello',
  },
};

@Component({
  components: {
    TemplatedText,
    TemplatedTextOld,
  },
})
export default class LabWording extends Vue {
  // --------------------------------------------------
  // Language
  // --------------------------------------------------
  private readonly languages = LANGUAGES;
  private readonly languageNames = glbTexts[TextCategory.LanguageName];
  private persistentLanguage = Language.English;
  private selectedLanguage = Language.Japanese;

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
$opacity = 0.15;

.lab-templated-text {
  &__header {
    padding: 1em 0.5em;
    padding-bottom: 0;

    h1 {
      margin: 0.1em 1em;
      color: rgba(black, $opacity) !important;
    }
  }

  &__body {
    padding: 1em;
    background: #FAFAFA;

    .v-card {
      margin: 0.5em 0;

      &__text {
        font-weight: bold;
      }
    }
  }

  &__menu-button {
    justify-content: left !important;
    text-transform: none !important;
  }

  &__menu-content {
    font-weight: bold;
    opacity: 0.95;
  }
}
</style>
