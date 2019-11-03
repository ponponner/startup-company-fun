<template>
  <v-container class="home" fill-height>
    <v-layout column fill-height align-center justify-center>
      <h1>
        <span>STARTUP COMPANY</span>
        <span class="orange--text">☆</span>
        <span>FUN</span>
      </h1>
      <h3>CALCULATOR & TOOL</h3>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="stylus">
.home {
  background: transparent !important;

  h1, h3 {
    white-space: nowrap;
  }
}
</style>

