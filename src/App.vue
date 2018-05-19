<template>
  <div id="app">
    <Intro />
    <Stats />
  </div>
</template>

<script>
import '../node_modules/normalize.css/normalize.css';
import './css/variables.css';
import store from './store';
import Intro from './components/Intro.vue';
import Stats from './components/Stats.vue';

export default {
  name: 'app',
  store,
  components: {
    Intro,
    Stats
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--font-primary), sans-serif;
  font-size: 62.5%;
  color: var(--dark);
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  font-size: 16px;
}

h1,
h2,
h3,
h4 {
  font-weight: normal;
  text-align: center;
  margin: 0 0 1rem;
}
</style>
