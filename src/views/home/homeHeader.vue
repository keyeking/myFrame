<template>
  <div class="home-header">
    <el-row>
      <el-col :span="24">
        <div class="header">
          <el-row>
            <el-col :span="2"
              ><div class="header-left">
                <el-tooltip
                  class="box-item"
                  effect="light"
                  content="GitHub"
                  placement="bottom"
                >
                  <span class="github">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-github"></use>
                    </svg>
                  </span>
                </el-tooltip></div
            ></el-col>
            <el-col :span="16"><div class="header-center"></div></el-col>
            <el-col :span="6"
              ><div class="header-right">
                <div class="calendar">
                  <span class="date">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-icon--date"></use></svg
                  ></span>
                  <span class="calend">{{ calendar }}</span>
                </div>
                <div class="theme">
                  <span class="themes">
                    <el-tooltip
                      class="box-item"
                      effect="light"
                      :content="item.msg"
                      placement="bottom"
                      v-for="item in themeIcons"
                      :key="item.value"
                    >
                      <svg
                        @click="changeTheme"
                        class="icon"
                        aria-hidden="true"
                        v-show="isTheme === item.value"
                      >
                        <use :xlink:href="item.icon"></use>
                      </svg>
                    </el-tooltip>
                  </span>
                </div>
                <div class="admin">
                  <span class="my">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-wode"></use>
                    </svg>
                    <span class="user">admin</span>
                  </span>
                  <span class="out">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-tuichu"></use>
                    </svg>
                  </span>
                </div></div
            ></el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  getCurrentInstance,
  ref,
  reactive,
} from 'vue'
import type { ComputedRef, Ref } from 'vue'

export default defineComponent({
  setup() {
    const {
      appContext: {
        config: { globalProperties },
      },
    } = getCurrentInstance() as any
    const calendar: ComputedRef<string> = computed(() => {
      return globalProperties.$utils.time.formatDate(new Date().getTime(), '1')
    })
    // 定义图标的类型接口
    interface themeIconsType {
      icon: string
      value: number
      msg: string
    }
    const themeIcons: themeIconsType[] = reactive([
      { icon: '#icon-taiyang', value: 0, msg: '白天模式' },
      { icon: '#icon-yueliang', value: 1, msg: '黑夜模式' },
    ])
    let isTheme: Ref<number> = ref(0)
    const changeTheme = (): void => {
      isTheme.value === 0 ? (isTheme.value = 1) : (isTheme.value = 0)
      console.log(isTheme.value)
    }
    return {
      calendar,
      isTheme,
      changeTheme,
      themeIcons,
    }
  },
})
</script>

<style scoped lang="less">
.home-header {
  height: 40px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px -4px @main-color;
  .header {
    .header-left {
      height: 40px;
      width: 100%;
      .github {
        font-size: 26px;
        line-height: 40px;
        margin-left: 40px;
        cursor: pointer;
      }
    }
    .header-center {
      height: 40px;
      width: 100%;
      background: blue;
    }
    .header-right {
      height: 40px;
      width: 100%;
      display: flex;
      .calendar {
        margin-left: 20px;
        .date {
          font-size: 18px;
          line-height: 40px;
          margin-right: 10px;
        }
        .calend {
          font-size: @header-font-size;
        }
      }
      .theme {
        margin-left: 20px;
        .themes {
          font-size: 20px;
          line-height: 40px;
          margin-right: 10px;
        }
      }
      .admin {
        margin-left: 20px;
        .my {
          font-size: 20px;
          line-height: 40px;
          margin-right: 10px;
          cursor: pointer;
          .user {
            font-size: @header-font-size;
            margin-left: 10px;
          }
        }

        .out {
          margin-left: 20px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
