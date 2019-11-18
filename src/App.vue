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
            <h6>CALCULATOR & TOOL</h6>
          </v-layout>
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text>
            Tools ▼
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="$router.push(item.path).catch(e => {})"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text>
            <span>Language </span>
            <span>({{ selectedLanguage.name }})</span>
            <span> ▼</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(lang, index) in languages"
            :key="index"
            @click="selectedLanguage = lang"
          >
            <v-list-item-title>{{ lang.name }}</v-list-item-title>
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
import { Component, Watch, Vue } from 'vue-property-decorator';

// --------------------------------------------------
// Models
// --------------------------------------------------
import { Language } from '@/models';

// --------------------------------------------------
// Stores
// --------------------------------------------------
import { texts } from '@/store/stores/texts';
import { catalog } from '@/store/stores/catalog';

// --------------------------------------------------
// Component
// --------------------------------------------------
@Component
export default class App extends Vue {
  private items = [
    { title: 'Production Requirements', path: '/production-requirements' },
    { title: 'Lab/TemapltedText', path: '/lab-templated-text' },
  ];

  private get languages(): Language[] {
    return catalog.languages.values;
  }
  private get selectedLanguage(): Language {
    return catalog.languages.get(texts.selectedLanguageId);
  }
  private set selectedLanguage(newValue: Language) {
    texts.selectLanguage(newValue.id);
  }
}
</script>

<style lang="stylus">
@import './styles/styles';
</style>
