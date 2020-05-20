import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  linkActiveClass:"active",
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("components/index.vue")
    },
    {
      path: "/login/",
      name: "login",
      component: () => import("components/login.vue")
    },
    {
      path: "/User_Account_Page/",
      name: "User_Account_Page",
      component:  () => import("components/User_Account_Page.vue")
    },
    {
      path: '/usercenter/',
      //UserCenter.vue 写公共部分+routerlink
      component: () => import("components/usercenter/UserCenter.vue"),
      //如果访问/usercenter/ => /usercenter/index/
      redirect: '/usercenter/index/',
      children:[
          {
              path: 'note/',
              name: 'usercenter_note',
              component: () => import("components/usercenter/UserCenterNote.vue"),
          },
          {
              path: 'categories/',
              name: 'usercenter_categories',
              component: () => import("components/usercenter/UserCenterCategories.vue"),
          },
          
      ]
     }  
  ]
});
