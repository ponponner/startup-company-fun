<template>
  <v-app>
    <v-app-bar app flat absolute>
      <v-toolbar-title class="headline text-uppercase">
        <v-btn text @click="$router.push('/').catch(e => {})">
          <v-layout column>
            <H4>
              <span>STARTUP COMPANY</span>
              <span class="orange--text">☆</span>
              <span>FUN</span>
            </H4>
            <h6>CALCULATOR</h6>
          </v-layout>
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text>
            <span>Language </span>
            <span>({{ getLanguageNameInDefault(selectedLanguage) }})</span>
            <span> ▼</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(lang, index) in languages"
            :key="index"
            @click="selectedLanguage = lang"
          >
            <v-list-item-title>{{
              getLanguageNameInDefault(lang)
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
/* tslint:disable:member-ordering */

// --------------------------------------------------
// Lib
// --------------------------------------------------
import { Hash } from '@/helpers/collections';

// --------------------------------------------------
// Vue
// --------------------------------------------------
import { Component, Watch, Vue } from 'vue-property-decorator';

// --------------------------------------------------
// Models
// --------------------------------------------------
import { Language } from '@/models';

// --------------------------------------------------
// Stores
// --------------------------------------------------
import { catalog } from '@/store/stores/catalog';
import { texts, TEXT_CATEGORY_ID } from '@/store/stores/texts';

// --------------------------------------------------
// Component
// --------------------------------------------------
@Component
export default class App extends Vue {
  private get languages(): Language[] {
    return catalog.languages.values;
  }
  private get selectedLanguage(): Language {
    return catalog.languages.get(texts.selectedLanguageId);
  }
  private set selectedLanguage(newValue: Language) {
    texts.selectLanguage(newValue.id);
  }

  private getLanguageNameInDefault(language: Language): string {
    return texts.getInDefault(TEXT_CATEGORY_ID.LanguageName, language.id);
  }
}
</script>

<style lang="stylus">
@import './styles/styles';
</style>
