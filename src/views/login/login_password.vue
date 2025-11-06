<template>
  <div class="login_password">
    <div class="navbar">
      <van-nav-bar
  title="密码登录"
  left-arrow
  @click-left="onClickLeft"
/>
    </div>
    <div class="login_form">
      <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="myId"
      label="学号"
      placeholder="学号"
      :rules="[{ required: true, message: '请输入学号' },
      {pattern: /^[0-9]{8}$/, message: '请输入正确的8位学号'}
      ]"
    />
    <van-field
      v-model="password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请输入密码' },
      {pattern: /^[0-9a-zA-Z]{6,12}$/, message: '请输入6-12位密码'}
      ]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      登录
    </van-button>
  </div>
</van-form>

</div>
<div class="bottom_text">
    还没有账号？<div class="goto_register" @click="onClickRegister">去注册</div>
</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router';

    // 顶部导航栏区域
    const onClickLeft = () => history.back();
    // const onClickRight = () => {};

    // 表单区域
    const username = ref('');
    const password = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
    };

    // 底部文字区域
    const onClickRegister = () => {
      // 跳转到注册页面
      router.push('/register');
    };
</script>

<style scoped>
/* .login {
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */
 .navbar {
  width: 100%;
 }

.login_form {
  margin-top: 20px;
  width: 100%;
  padding: 10px;
}
.van-field {
  margin-bottom: 10px;
  font-size: 16px;
}
.van-button {
  font-size: 16px;
}

/* 底部文字区域 */
.bottom_text {
  /* margin-bottom: 50px; */
  /* display: absolute; */
  position: absolute;
  bottom: 80px;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
}
.goto_register {
  display: inline-block;
  color: #4095E5;
}
</style>