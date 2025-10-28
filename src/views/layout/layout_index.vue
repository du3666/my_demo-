<template>
  <div class="layout">
    <div class="header">
      <h1>Header</h1>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <van-tabbar v-model="active" active-color="#ee0a24">
  <van-tabbar-item icon="home-o" to="/recommend">首页</van-tabbar-item>
  <van-tabbar-item icon="diamond-o" to="/match">赛事</van-tabbar-item>
  <van-tabbar-item icon="notes-o" to="/data">数据</van-tabbar-item>
  <van-tabbar-item icon="user-o" to="/InfoIndex">我的</van-tabbar-item>    
</van-tabbar>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const active = ref(0);
</script>

<style scoped>
.layout {
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>