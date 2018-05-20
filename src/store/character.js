const state = {
  class: '',
  race: '',
  background: '',
  alignment: '',
  str: 0,
  dex: 0,
  con: 0,
  int: 0,
  wis: 0,
  cha: 0
}

const getters = {
  getStats(state) {
    return {
      str: state.str,
      dex: state.dex,
      con: state.con,
      int: state.int,
      wis: state.wis,
      cha: state.cha
    }
  },
  getClass(state) {
    return state.class;
  },
  getRace(state) {
    return state.race;
  },
  getBackground(state) {
    return state.background;
  },
  getAlignment(state) {
    return state.alignment;
  }
}

const actions = {
  // Expects array | Example: [10, 12, 13, 14, 15, 18]
  setStats({commit}, stats) {
    commit('setStats', stats);
  },
  setClass({commit}, classStr) {
    commit('setClass', classStr);
  },
  setRace({commit}, race) {
    commit('setRace', race);
  },
  setBackground({commit}, background) {
    commit('setBackground', background);
  },
  setAlignment({commit}, alignment) {
    commit('setAlignment', alignment);
  }
}

const mutations = {
  setStats(state, stats) {
    state.str = stats[0];
    state.dex = stats[1];
    state.con = stats[2];
    state.int = stats[3];
    state.wis = stats[4];
    state.cha = stats[5];
  },
  setClass(state, classStr) {
    state.class = classStr;
  },
  setRace(state, race) {
    state.race = race;
  },
  setBackground(state, background) {
    state.background = background;
  },
  setAlignment(state, alignment) {
    state.alignment = alignment;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}