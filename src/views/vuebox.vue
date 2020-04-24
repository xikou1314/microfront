<template>
  <div class="box">
    vue
    <button @click="goSpa">前往spa</button>
    <router-view></router-view>
    <micro type="spa" name="vuedemo1" frame="vue"></micro>
  </div>
</template>

<script>
  import micro from '../components/micro';

  export default {
    name: 'VueBox',
    components: { micro },
    props: {
    },
    computed: {

    },
    created() {
      console.log('vuebox');
      console.log(this.$router.options.routes);
    },
    methods: {
      goSpa() {
        this.$router.push('/container/vuebox/vuedemo1');
      }
    }
  };
</script>

<style lang="scss" scoped>
.box {
    margin: 0 auto;
}
</style>
