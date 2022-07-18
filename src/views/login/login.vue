<template>
  <div class="login"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'login',
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less">
.login {
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  opacity: 0.3;
  background: rgba(79, 79, 79, 0.5);
}
</style>
