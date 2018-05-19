<template>
  <section>
    <ul>
      <li>{{ stat.STR }}: {{ getStats.str }}</li>
      <li>{{ stat.DEX }}: {{ getStats.dex }}</li>
      <li>{{ stat.CON }}: {{ getStats.con }}</li>
      <li>{{ stat.INT }}: {{ getStats.int }}</li>
      <li>{{ stat.WIS }}: {{ getStats.wis }}</li>
      <li>{{ stat.CHA }}: {{ getStats.cha }}</li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import * as stat from '../constants/stats';

export default {
  name: 'Stats',
  data() {
    return {
      stat
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