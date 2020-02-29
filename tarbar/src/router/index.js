import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
const View = () => import("../views/view/View.vue");
const Message = () => import("../views/message/Message.vue");
const Cart = () => import("../views/cart/Cart.vue");
const User = () => import("../views/user/User.vue");
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/View"
    },
    {
      path: "/View",
      component: View
    },
    {
      path: "/Message",
      component: Message
    },
    {
      path: "/User",
      component: User
    },
    {
      path: "/Cart",
      component: Cart
    }
  ],
  mode: "history"
});
