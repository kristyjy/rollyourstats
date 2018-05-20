<template>
  <section>
    <h1>Roll Your Stats</h1>
    <Button @click.native="onRollCharacter">Roll a random character</Button>
  </section>
</template>

<script>
import Button from './Button.vue';
import { mapGetters, mapActions } from 'vuex';
import * as dice from '../utils/random';

export default {
  name: 'Intro',
  components: {
    Button
  },
  computed: {
    ...mapGetters({
      backgrounds: 'getBackgrounds',
    })
  },
  methods: {
    ...mapActions([
      'setStats',
      'setBackground'
    ]),
    onRollCharacter(e) {
      e.preventDefault();
      this.setStats(dice.rollStats());
      this.setBackground(dice.getRandomBackground(this.backgrounds));
    }
  }
}
</script>

<style scoped>
section {
  padding: 3rem 2rem;
  text-align: center;
}
</style>