/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import HeaderComponent from "./components/HeaderComponent"; //headerのコンポーネント読み込み

require('./bootstrap');
import Vue from "vue"; // Vueを読み込む
import VueRouter from "vue-router";

window.Vue = Vue;
import router from "./router.js"; // 追記

Vue.use(VueRouter)




/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', HeaderComponent);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const router = new VueRouter({
//     mode: 'history',
//     routes: [
//         {
//             path: '/product_lists',
//             name: 'product.list',
//             component: ProductListComponent
//         },
//     ]
// });

const app = new Vue({
    el: '#app',
});
