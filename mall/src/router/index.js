import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//懒加载页面
const Home = () => import("views/home/Home");
const Cart = () => import("views/cart/Cart");
const Category = () => import("views/category/Category");
const User = () => import("views/user/User");
const Detail = () => import("views/detail/Detail");
const routes = [
  {
    path: "/",
    redirect: "Home",
  },
  {
    path: "/Home",
    component: Home,
  },
  {
    path: "/Category",
    component: Category,
  },
  {
    path: "/User",
    component: User,
  },
  {
    path: "/Cart",
    component: Cart,
  },
  {
    path: "/Detail/:iid", //动态路由用params传参
    component: Detail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
