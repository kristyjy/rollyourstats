<template>
  <section>
    <ul v-if="stats.str > 0">
      <li>{{ stat.STR }}: {{ stats.str }} ({{ m.getAbilityMod(stats.str)}})</li>
      <li>{{ stat.DEX }}: {{ stats.dex }} ({{ m.getAbilityMod(stats.dex)}})</li>
      <li>{{ stat.CON }}: {{ stats.con }} ({{ m.getAbilityMod(stats.con)}})</li>
      <li>{{ stat.INT }}: {{ stats.int }} ({{ m.getAbilityMod(stats.int)}})</li>
      <li>{{ stat.WIS }}: {{ stats.wis }} ({{ m.getAbilityMod(stats.wis)}})</li>
      <li>{{ stat.CHA }}: {{ stats.cha }} ({{ m.getAbilityMod(stats.cha)}})</li>
    </ul>
    <ul v-if="background">
      <li>Background: {{ background.name }}</li>
      <li v-if="background.name"><strong>{{ background.feature.name }}:</strong> {{ background.feature.description }}</li>
      <li><strong>Personality Trait:</strong> {{ background.trait }}</li>
      <li><strong>Ideal:</strong> {{ background.ideal }}</li>
      <li><strong>Bond:</strong> {{ background.bond }}</li>
      <li><strong>Flaw:</strong> {{ background.flaw }}</li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import * as stat from '../constants/stats';
import * as m from '../utils/math';

export default {
  name: 'Stats',
  data() {
    return {
      stat,
      m
    }
  },
  computed: {
    ...mapGetters({
      stats: 'getStats',
      classStr: 'getClass',
      race: 'getRace',
      background: 'getBackground'
    })
  }
}
</script>

<style scoped>

</style>