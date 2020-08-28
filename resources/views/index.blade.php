<!doctype html>
<html lang="{{ app()->getlocale()}}">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport"
           content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     {{--  防止CSRF攻击 可以赋值给ajax header 如果是form中直接使用@csrf即可 --}}
     <meta name="csrf-token" content="{{ csrf_token() }}">
     <link rel="stylesheet" href="{{ mix('css/app.css') }}">
     <title>Document</title>
 </head>
 <body>
 {{--id 为 app与 app.js中const app = new Vue({el: '#app',<<=【这个一致】});--}}
<div><h1>我是index.blade.php页面的组成部分</h1></div>
<div id="app">
   



     {{--   app.js中 组件名为example-component Vue.component('example-component', require('./components/ExampleComponent.vue').default);
        
     --}}
     
     <index-component></index-component>

 </div>
 {{--必须放置在下方--}}
 <script src="{{ mix('js/app.js') }}"></script>
 </body>
 </html>