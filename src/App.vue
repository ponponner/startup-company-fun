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
            <span>({{ getLanguageName(currentLanguage) }})</span>
            <span> ▼</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(lang, index) in languages"
            :key="index"
            @click="currentLanguage = lang"
          >
            <v-list-item-title>{{ getLanguageName(lang) }}</v-list-item-title>
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
// --------------------------------------------------
// Lib
// --------------------------------------------------
import { Component, Watch, Vue } from 'vue-property-decorator';

// --------------------------------------------------
// Model & Data
// --------------------------------------------------
import { Language, LANGUAGES } from '@/models/language';
import { TextCategory, glbTexts, changeTextsByLanguage } from '@/models/text';

// --------------------------------------------------
// Views & Components
// --------------------------------------------------
import ProductionRequirements from './views/ProductionRequirements.vue';

@Component({
  components: {
    ProductionRequirements,
  },
})
export default class App extends Vue {
  private items = [
    { title: 'Production Requirements', path: '/production-requirements' },
  ];

  //
  private currentLanguage: Language = Language.Japanese;
  private languages: Language[] = LANGUAGES;
  private getLanguageName(language: Language): string {
    return glbTexts[TextCategory.LanguageName][language];
  }
  @Watch('currentLanguage', { immediate: true })
  private onLanguageChange(language: Language) {
    changeTextsByLanguage(this.currentLanguage);
  }
}
</script>

<style lang="stylus">
.v-toolbar {
  background: #EEE !important;
}

.v-content {
  background: #EEE !important;
}
</style>
