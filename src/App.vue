<template>
  <router-view />
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
}
.icon {
  width: 1em;
  height: 1em; //宽高可设成100% 这样可以根据父级元素改变图标大小
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
