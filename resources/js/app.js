/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
//App为首页，确定谁的vue当主页，
//再通过laravel的MCV结果的View页面index.blade.php中<index-component></index-component>
//链接下面的Vue.component('index-component',require('./src/index.vue').default)的默认页，
//就搭建起了关联，形成了一个完整的vue的vue-router和页面的展示。
//尽量不要改变APP from app.vue，这个会产生不正常的逻辑，至于为什么还没有想明白0828
//就上面这句话，是可以操作的。关键是用好 <router-view></router-view>这个显示组件，
//不然会重复出现。
//import App from './App.vue';
import App from './src/index.vue';
import router from './router.js';



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('index-component',require('./src/index.vue').default)
//Vue.component('index-component',require('./App.vue').default)


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    //components: { App }, // vue1.0的写法
    render: h => h(App),// vue2.0的写法
 })
;