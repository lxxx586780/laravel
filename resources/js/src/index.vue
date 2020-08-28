<template>

<div id='app'>
    
     <header>
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
     <div><h1>ACBBBBB</h1></div>
        <router-view></router-view>
    </div>
</template>

<script scope>
    export default {
        
    }
</script>

<style scoped>

</style>