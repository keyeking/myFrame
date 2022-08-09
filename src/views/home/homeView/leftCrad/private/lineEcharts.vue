<template>
  <div class="lineEcharts">
    <el-card shadow="hover">
      <template #header>
        <div class="card-header">
          <span class="header"
            ><svg class="icon icon-icon-zhexiantu" aria-hidden="true">
              <use xlink:href="#icon-icon-zhexiantu"></use></svg
            >折线图</span
          >
          <el-button class="btn" text type="primary"
            >详情<span
              ><svg class="icon icon-xiangyoujiantou" aria-hidden="true">
                <use xlink:href="#icon-xiangyoujiantou"></use></svg></span
          ></el-button>
        </div>
      </template>
      <div class="container"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'lineEcharts',
  setup() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.lineEcharts {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header {
      font-size: @main-font-size;
    }
    .icon-icon-zhexiantu {
      font-size: 18px;
      margin-right: 10px;
    }
    .btn {
      .icon-xiangyoujiantou {
        font-size: 12px;
        color: #409eff;
      }
    }
  }
  .container {
    width: 100%;
    height: 180px;
  }
}
</style>
