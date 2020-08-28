<template>
  <div id="app">
    <header>
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script scope>
export default {};
</script>

<style scoped>
</style>