<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios';
  import routerUtil from './util/router-util';
  export default {
    name: 'app',
    data() {
      return {
      };
    },
    created() {
      axios.get('/static/service.json').then(res => {
        // 加载远程组件和远程应用
        // 加载完远程应用后 对远程应用进行注册 对应的挂载节点也需要进行创建
        console.log('服务内容');
        console.log(res);
        sessionStorage.setItem('services', JSON.stringify(res.data));
        var subRoute = [];
        res.data.forEach(val => {
          subRoute.push({
              fatherName: val.fatherName,
              name: val.appname,
              path: '/container/' + val.father + '/' + val.appname
            });
        });
        var routes = this.$router.options.routes;
        var mergedRoute = routerUtil.mergeSubInRoute(routes, subRoute);
        console.log(mergedRoute);
        this.$router.options.routes = routes;
        this.$router.addRoutes(routes);
        // this.$router.push('/container/vuebox/vuedemo1');
        // 注册路由
      });

      axios.get('/static/component.json').then(res => {
        // 加载远程组件和远程应用
        // 加载完远程应用后 对远程应用进行注册 对应的挂载节点也需要进行创建
        console.log('组件内容');
        console.log(res);
      });
    },
      methods: {
      }
  };
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 40px;
  }
</style>
