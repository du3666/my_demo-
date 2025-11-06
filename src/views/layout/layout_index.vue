<template>
  <div class="layout">  
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#3775F6">
  <van-tabbar-item icon="home-o" to="/recommend">首页</van-tabbar-item>
  <van-tabbar-item icon="diamond-o" to="/match">赛事</van-tabbar-item>
  <van-tabbar-item icon="notes-o" to="/data">数据</van-tabbar-item>
  <van-tabbar-item icon="user-o" to="/InfoIndex">我的</van-tabbar-item>    
</van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import "@/utils/vant-ui.js"
const active = ref(0);
</script>

<style scoped>
/* .layout {
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */
</style>