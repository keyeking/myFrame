<template>
  <div class="comprehensiveCard">
    <el-card shadow="hover">
      <template #header>
        <div class="card-header">
          <span class="header">综合图</span>
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

<script>
export default {
  name: 'comprehensiveCard',
  setup() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.comprehensiveCard {
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
    height: 180px;
  }
}
</style>
