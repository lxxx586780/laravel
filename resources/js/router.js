import Vue from "vue";
import VueRouter from "vue-router";
//import index from './components/ExampleComponent.vue';
//import index from './src/index.vue';
import home from './src/home.vue';
import about from './src/about.vue';
import user from './src/user.vue';
import phone from './src/phone/phone.vue';


Vue.use(VueRouter); //全局方法 Vue.use() 使用插件，需要在你调用 new Vue() 启动应用之前完成：


export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        // //重定向首页
        // {
        //     name: '/',
        //     path: '/',
        //     redirect: '/home'
        // },
        // {
        //     name: 'index',
        //     path: '/index',
        //     // component: resolve => void (require(['./components/ExampleComponent.vue'], resolve)),
        //     component: index
        // },
        {
            name: 'home',
            path: '/home',
            component: home,
            children: [
                // 当进入到home时，下面的组件显示
                // {
                //     path: "",
                //     component: phone
                // },
                {
                    name: 'phone',
                    path: 'phone',
                    component: phone
                },


            ]

        },
        {
            name: 'about',
            path: '/about',
            component: about
        },
        //user组件测试
        {
            name: 'user',
            path: '/user/:id',
            component: user
        }

    ]
})
