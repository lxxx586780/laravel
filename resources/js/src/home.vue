<template>
     <div>
         <h1>home</h1>
         <p>{{msg}}</p>
 <!-- router-link 的to属性要注意，路由是先进入到home,然后才进入相应的子路由如 phone,所以书写时要把 home 带上 -->
         <p>
             <router-link to="/home/phone">手机</router-link>
             <router-link to="/home/tablet">平板</router-link>
             <router-link to="/home/computer">电脑</router-link>
             <router-link :to="{ name: 'user', params: { userId: 456 }}">User</router-link> 
         </p>
          <!-- 作为子页面的综合页面，是要显示东西的，就必须加上router-view,而不只是router-link -->
          <router-view></router-view>
     </div>
 </template>
 <script>
    export default {
         data () {
             return {
                 msg: "我是home 组件"
             }
         }
     }
 </script>