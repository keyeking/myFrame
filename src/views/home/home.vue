<template>
  <div>
    <homeHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import homeHeader from './homeHeader.vue'
export default defineComponent({
  name: 'home',
  components: {
    homeHeader,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less"></style>
