<template>
  <div class="box">
    vue
    <button @click="goSpa">前往spa</button>
    <button @click="sendMsg">发送信息到vue</button>
    <AsyncComponent :url="url" :textarea.sync="textarea"></AsyncComponent>
    <AsyncComponent :url="url" :textarea.sync="textarea"></AsyncComponent>
    <router-view></router-view>
    <micro type="spa" name="vuedemo1" frame="vue"></micro>
  </div>
</template>

<script>
  import micro from '../components/micro';
  import AsyncComponent from '../components/async-component/async-component';
  export default {
    name: 'VueBox',
    components: { micro, AsyncComponent },
    date() {
      return {
        url: '',
        textarea: ''
      };
    },
    props: {
    },
    computed: {

    },
    created() {
      console.log('vuebox');
      console.log(this.$router.options.routes);
      var components = JSON.parse(sessionStorage.getItem('components'));
      components.forEach(val => {
        if (val.componentname === 'componenta') {
          this.url = val.path;
        }
      });
    },
    methods: {
      goSpa() {
        this.$router.push('/container/vuebox/vuedemo1');
      },
      sendMsg() {
        window.BaseMessager.trigger('vuedemo1', '这里是传递给vuedemo1的信息');
      }
    }
  };
</script>

<style lang="scss" scoped>
.box {
    margin: 0 auto;
}
</style>
