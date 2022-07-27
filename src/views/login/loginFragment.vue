<template>
  <div class="login-fragment">
    <el-card class="box-card bg"> </el-card>
    <el-tabs type="border-card" class="tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label tab">
            <span class="iconfont icon-account_pwd icon"></span>
            <span>账号密码登录</span>
          </span>
        </template>
        <div class="vertify">
          <el-row :gutter="2" justify="end" align="middle">
            <el-col :span="6" :push="1"
              ><span class="main-font-size">手机号</span></el-col
            >
            <el-col :span="18" :pull="1">
              <el-input
                type="primary"
                size="large"
                placeholder="请输入手机号"
                v-model="username"
              ></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="2" justify="end" align="middle">
            <el-col :span="6" :push="1"
              ><span class="main-font-size">密码</span></el-col
            >
            <el-col :span="18" :pull="1">
              <el-input
                type="primary"
                size="large"
                placeholder="请输入密码"
                v-model="password"
                show-password
              ></el-input>
            </el-col>
            <el-col :span="6"> </el-col>
          </el-row>
          <el-row :gutter="2" justify="center" align="middle">
            <el-col :span="2"></el-col>
            <el-col :span="6">
              <el-button
                class="loading-btn"
                type="primary"
                size="large"
                @click="login"
                >登录</el-button
              >
            </el-col>
            <el-col :span="10"></el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label tab">
            <span class="iconfont icon-yanzhengma icon"></span>
            <span class="main-font-size">验证码登录</span>
          </span>
        </template>
        <div class="vertify">
          <el-row :gutter="2" justify="end" align="middle">
            <el-col :span="6" :push="1"
              ><span class="main-font-size">手机号</span></el-col
            >
            <el-col :span="18" :pull="1">
              <el-input
                type="primary"
                size="large"
                placeholder="请输入手机号"
              ></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="2" justify="end" align="middle">
            <el-col :span="6" :push="1"
              ><span class="main-font-size">验证码</span></el-col
            >
            <el-col :span="10" :pull="1">
              <el-input
                type="primary"
                size="large"
                placeholder="请输入验证码"
              ></el-input>
            </el-col>
            <el-col :span="2"> </el-col>
            <el-col :span="6" :pull="1">
              <el-button class="btn-font-size" type="default" size="large"
                >发送验证码</el-button
              >
            </el-col>
          </el-row>
          <el-row :gutter="2" justify="center" align="middle">
            <el-col :span="2"></el-col>
            <el-col :span="6">
              <el-button class="load-btn" type="primary" size="large"
                >登录 / 注册</el-button
              >
            </el-col>
            <el-col :span="10"></el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import type { Store } from 'vuex'

export default defineComponent({
  name: 'loginFragment',
  setup(props, context) {
    const {
      appContext: {
        config: { globalProperties },
      },
    } = getCurrentInstance() as any
    const store: Store<any> = useStore()
    interface stateType {
      username: string
      password: string
    }
    const state = reactive<stateType>({
      username: '',
      password: '',
    })
    const login = () => {
      interface dataType {
        username: string
        password: string
      }
      let data: dataType = {
        username: state.username,
        password: state.password,
      }
      const formData = new FormData()
      Object.keys(data).forEach((key: string) => {
        formData.append(key, data[key as keyof typeof data])
      })
      // globalProperties.$api.login.loginAccount(data).then((res: any) => {
      //   console.log(res)
      // })
      // globalProperties.$http.
      globalProperties.$utils.localStorage.set(data, 10)
      globalProperties.$router.push({ name: 'home' })
    }
    return {
      ...toRefs(state),
      login,
    }
  },
})
</script>

<style scoped lang="less">
.login-fragment {
  width: 30%;
  height: 100%;
  position: absolute;
  right: 0;
  .bg {
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
  }
  .tabs {
    position: absolute;
    top: 25%;
    left: 10%;
    width: 80%;
    .tab {
      .icon {
        margin-right: 10px;
      }
    }
    .load-btn {
      padding: 12px 90px;
    }
    .loading-btn {
      padding: 12px 111px;
    }
  }
}
.main-font-size {
  font-size: @main-font-size;
}
.btn-font-size {
  font-size: @btn-font-size;
}
.el-row {
  margin-bottom: 20px;
}
/deep/.el-button--large {
  padding: 12px 10px;
}
</style>
