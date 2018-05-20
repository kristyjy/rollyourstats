<template>
  <section>
    <ul>
      <li>{{ stat.STR }}: {{ getStats.str }} ({{ m.getAbilityMod(getStats.str)}})</li>
      <li>{{ stat.DEX }}: {{ getStats.dex }} ({{ m.getAbilityMod(getStats.dex)}})</li>
      <li>{{ stat.CON }}: {{ getStats.con }} ({{ m.getAbilityMod(getStats.con)}})</li>
      <li>{{ stat.INT }}: {{ getStats.int }} ({{ m.getAbilityMod(getStats.int)}})</li>
      <li>{{ stat.WIS }}: {{ getStats.wis }} ({{ m.getAbilityMod(getStats.wis)}})</li>
      <li>{{ stat.CHA }}: {{ getStats.cha }} ({{ m.getAbilityMod(getStats.cha)}})</li>
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
    ...mapGetters([
      'getStats',
      'getClass',
      'getRace',
      'getBackground'
    ])
  }
}
</script>

<style scoped>

</style>