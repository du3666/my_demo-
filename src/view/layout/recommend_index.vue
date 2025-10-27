<template>
  <div class="layout">
    <div class="header">
      <h1>Header</h1>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <h1>Footer</h1>
    </div>
  </div>
</template>

<script setup lang="ts">

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
