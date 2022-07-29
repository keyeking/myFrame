<template>
  <div class="home animate">
    <leftCrad class="leftCrad" />
    <centerCard class="centerCard" />
    <rightCard class="rightCard" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import leftCrad from './homeView/leftCrad/leftCrad.vue'
import centerCard from './homeView/centerCard/centerCard.vue'
import rightCard from './homeView/rightCard/rightCard.vue'
export default defineComponent({
  name: 'home',
  components: {
    leftCrad,
    centerCard,
    rightCard,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less">
.home {
  display: flex;
  width: 100%;
  height: 100%;
  .leftCrad {
    flex: 3;
  }
  .centerCard {
    flex: 6;
  }
  .rightCard {
    flex: 3;
  }
}
</style>
