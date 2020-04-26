import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login';
import Container from '@/views/container';
import VueBox from '@/views/vuebox';
import AngularBox from '@/views/angularBox';
import IframeBox from '@/views/iframebox';
import IframeBox2 from '@/views/iframebox2';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/test/main/',
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
        },
        {
          path: '/container/iframebox2',
          name: 'IframeBox2',
          component: IframeBox2
        }
      ]
    }
  ]
});
