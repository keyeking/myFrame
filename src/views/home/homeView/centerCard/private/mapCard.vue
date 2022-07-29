<template>
  <div class="mapCard">
    <el-card shadow="hover">
      <template #header>
        <div class="card-header">
          <span class="header">barEcharts</span>
          <el-button class="btn" text type="primary"
            >详情<span
              ><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiangyoujiantou"></use></svg></span
          ></el-button>
        </div>
      </template>
      <div class="container"></div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'mapCard',
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less">
.mapCard {
  width: 100%;
  margin-bottom: @margin-bottom;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header {
      font-size: @main-font-size;
    }
    .btn {
      .icon {
        font-size: 12px;
        color: #409eff;
      }
    }
  }
  .container {
    height: 408px;
  }
}
</style>
