import Vue from "vue";
// Vueを読み込む
import VueRouter from "vue-router";
// Vue Routerを読み込む
// import ExampleComponent from "./components/admin/ProductListComponent"
import ProductListComponent from "./components/admin/ProductListComponent"
// Componentsを読み込む

Vue.use(VueRouter)


const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/product_lists', //URL
                name: 'product.list', //ルーティングの名前
                component: ProductListComponent //16行目のURLに飛んだらこのコンポーネントが表示される
            },
            //ここにrouteを追加していく
        ]
    });

    const app = new Vue({
        el: '#app',
        router
    });