<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from "./components/index.vue";

export default {
  name: "App",
  components: {
    Index,
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
