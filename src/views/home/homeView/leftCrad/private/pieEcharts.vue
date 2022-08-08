<template>
  <div class="pieEcharts">
    <el-card shadow="hover">
      <template #header>
        <div class="card-header">
          <span class="header">
            <svg class="icon icon-meiguibingtu" aria-hidden="true">
              <use xlink:href="#icon-meiguibingtu"></use>
            </svg>
            总收益分布</span
          >
          <el-button class="btn" text type="primary"
            >详情<span
              ><svg class="icon icon-xiangyoujiantou" aria-hidden="true">
                <use xlink:href="#icon-xiangyoujiantou"></use></svg></span
          ></el-button>
        </div>
      </template>
      <div id="container"></div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
import pieOption from '../data/pieData'
export default defineComponent({
  name: 'pieEcharts',
  setup() {
    const {
      appContext: {
        config: { globalProperties },
      },
    } = getCurrentInstance() as any
    onMounted(() => {
      initEchart()
    })
    const initEchart = () => {
      return new Promise<HTMLElement | null>((resolve, reject) => {
        const container: HTMLElement | null =
          document.getElementById('container')
        resolve(container)
      }).then((container: HTMLElement | null) => {
        globalProperties.$echarts.init(container).setOption(pieOption)
      })
    }
    return {
      initEchart,
    }
  },
})
</script>

<style scoped lang="less">
.pieEcharts {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header {
      font-size: @main-font-size;
    }
    .icon-meiguibingtu {
      font-size: 18px;
    }
    .btn {
      .icon-xiangyoujiantou {
        font-size: 12px;
        color: #409eff;
      }
    }
  }
  #container {
    width: 100%;
    height: 180px;
  }
}
</style>
