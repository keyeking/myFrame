<template>
  <div class="leftCard">
    <pieEcharts class="pieEcharts" />
    <lineEcharts class="lineEcharts" />
    <barEcharts class="barEcharts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pieEcharts from './private/pieEcharts.vue'
import barEcharts from './private/barEcharts.vue'
import lineEcharts from './private/lineEcharts.vue'
export default defineComponent({
  name: 'leftCard',
  components: {
    pieEcharts,
    barEcharts,
    lineEcharts,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less">
.leftCard {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: @padding;
  box-sizing: border-box;

  .pieEcharts {
    flex: 1;
    margin-bottom: @margin-bottom;
  }
  .barEcharts {
    flex: 1;
    margin-bottom: @margin-bottom;
  }
  .lineEcharts {
    flex: 1;
    margin-bottom: @margin-bottom;
  }
}
</style>
