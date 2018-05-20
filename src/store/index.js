import Vue from 'vue';
import Vuex from 'vuex';

import character from './character';
import options from './options';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    character,
    options
  }
});