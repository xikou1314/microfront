import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login';
import Container from '@/views/container';
import VueBox from '@/views/vuebox';
import AngularBox from '@/views/angularBox';
import IframeBox from '@/views/iframebox';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/container',
      name: 'Container',
      redirect: '/container/vuebox',
      component: Container,
      children: [
        {
          path: '/container/vuebox',
          name: 'VueBox',
          component: VueBox
        },
        {
          path: '/container/angularbox',
          name: 'AngularBox',
          component: AngularBox
        },
        {
          path: '/container/iframebox',
          name: 'IframeBox',
          component: IframeBox
        }
      ]
    }
  ]
});
