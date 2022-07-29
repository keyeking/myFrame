<template>
  <div class="centerCard">
    <mapCard class="mapCard" />
    <comprehensiveCard class="comprehensiveCard" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import mapCard from './private/mapCard.vue'
import comprehensiveCard from './private/comprehensiveCard.vue'
export default defineComponent({
  name: 'centerCard',
  components: {
    mapCard,
    comprehensiveCard,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less">
.centerCard {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: @padding;
  box-sizing: border-box;
  .mapCard {
    flex: 6;
  }
  .comprehensiveCard {
    flex: 4;
  }
}
</style>
