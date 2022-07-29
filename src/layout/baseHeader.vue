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
            <el-col :span="16"
              ><div class="header-center">
                <el-menu
                  :default-active="activeIndex"
                  :router="true"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect"
                >
                  <template v-for="items in menu" :key="items.path">
                    <el-menu-item
                      @click="changeRoute(items)"
                      :index="items.path"
                      v-show="!items.children"
                      ><span>{{ items.label }}</span></el-menu-item
                    >
                    <el-sub-menu :index="items.path" v-show="items.children">
                      <template #title
                        ><span>{{ items.label }}</span></template
                      >
                      <el-menu-item
                        v-for="item in items.children"
                        :key="item.path"
                        :index="item.path"
                        @click="changeRoute(item)"
                        >{{ item.label }}</el-menu-item
                      >
                    </el-sub-menu>
                  </template>
                </el-menu>
              </div></el-col
            >
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
                  <span class="themes" @click="changeTheme">
                    <el-tooltip
                      class="box-item"
                      effect="light"
                      :content="item.msg"
                      placement="bottom"
                      v-for="item in themeIcons"
                      :key="item.value"
                    >
                      <svg
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
                    <el-dropdown>
                      <span class="el-dropdown-link user"> admin </span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item
                            v-for="item in dropdownItem"
                            :key="item.value"
                            >{{ item.label }}</el-dropdown-item
                          >
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </span>
                  <span class="out" @click="out">
                    <el-tooltip
                      class="box-item"
                      effect="light"
                      content="退出"
                      placement="bottom"
                    >
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-tuichu"></use>
                      </svg>
                    </el-tooltip>
                  </span>
                </div></div
            ></el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  getCurrentInstance,
  ref,
  reactive,
  onMounted,
} from 'vue'
import type { ComputedRef, Ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
export default defineComponent({
  setup() {
    const {
      appContext: {
        config: { globalProperties },
      },
    } = getCurrentInstance() as any
    onMounted(() => {})
    // 默认第一个高亮
    const activeIndex: ComputedRef<string> = computed(() => {
      return globalProperties.$route.path
    })
    // 获取今天日期
    const calendar: ComputedRef<string> = computed(() => {
      return globalProperties.$utils.time.formatDate(new Date().getTime(), '1')
    })
    interface menuType {
      label: string
      value: string
      path: string
      children?: object
    }
    const menu: menuType[] = reactive([
      { label: '整体态势', value: '0', path: '/home' },
      { label: '团队总览', value: '1', path: '/teamOverview' },
      {
        label: '业绩分析',
        value: '2',
        path: '/overallAnalysis',
        children: [
          { label: '总体分析', value: '2-1', path: '/overallAnalysis' },
          { label: '团队分析', value: '2-2', path: '/teamAnalysis' },
        ],
      },
      { label: '成员分布', value: '3', path: '/members' },
      { label: '我的团队', value: '4', path: '/myTeam' },
    ])
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
    // 切换主题颜色
    const isDark = useDark()
    const toggleDark = useToggle(isDark)
    let isTheme: Ref<number> = ref(0)
    const changeTheme = (): void => {
      isTheme.value === 0 ? (isTheme.value = 1) : (isTheme.value = 0)
      toggleDark()
    }

    // 退出
    const out = () => {
      globalProperties.$utils.localStorage.clear()
      globalProperties.$router.push({ name: 'login' })
    }
    // 个人
    interface dropdownItemType {
      label: string
      value: number
    }
    const dropdownItem: dropdownItemType[] = reactive([
      { label: '个人中心', value: 0 },
    ])
    // 跳转路由
    const changeRoute = (item: any) => {
      globalProperties.$router.push({ path: item.path })
    }
    return {
      calendar,
      isTheme,
      changeTheme,
      themeIcons,
      menu,
      toggleDark,
      activeIndex,
      out,
      dropdownItem,
      changeRoute,
    }
  },
})
</script>

<style scoped lang="less">
.home-header {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px -4px @main-color;
  .header {
    .header-left {
      height: 50px;
      width: 100%;
      .github {
        font-size: 26px;
        line-height: 50px;
        margin-left: 40px;
        cursor: pointer;
      }
    }
    .header-center {
      height: 50px;
      width: 100%;
      /deep/.el-menu--horizontal {
        border: none;
        height: 100%;
        justify-content: space-evenly;
      }
    }
    .header-right {
      height: 50px;
      width: 100%;
      display: flex;
      .calendar {
        margin-left: 20px;
        .date {
          font-size: 18px;
          line-height: 50px;
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
          line-height: 50px;
          margin-right: 10px;
        }
      }
      .admin {
        margin-left: 20px;
        .my {
          font-size: 20px;
          line-height: 50px;
          margin-right: 10px;
          cursor: pointer;
          .user {
            font-size: @header-font-size;
            margin-left: 10px;
            line-height: 50px;
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
