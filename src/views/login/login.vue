<template>
  <div class="login">
    <loginFragment />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginFragment from './loginFragment.vue'
export default defineComponent({
  components: {
    loginFragment,
  },
  name: 'login',
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('@/assets/img/login-bg.png') no-repeat;
  background-size: 70%;
}
</style>
