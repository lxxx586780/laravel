<template>

<div id='app'>
     <h2>我是index.vue页面，也就是VUE的初始页面</h2>
    <header>
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <!--  增加两个到user组件的导航，可以看到这里使用了不同的to属性 -->
       <router-link to="/user/123">User123</router-link>
       <router-link to="/user/456">User456</router-link>
    </header>
    <router-view></router-view>
    </div>
</template>

<script scope>
    export default {
        
    }
</script>

<style scoped>

</style>