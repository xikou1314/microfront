<template>
  <div class="box">
    vue2
    <button @click="goSpa">前往spa</button>
    <router-view></router-view>
    <micro type="spa" name="vuedemo2" frame="vue"></micro>
  </div>
</template>

<script>
  import micro from '../components/micro';

  export default {
    name: 'AngularBox',
    components: { micro },
    props: {
    },
    computed: {

    },
    created() {
      console.log('angularbox');
      console.log(this.$router.options.routes);
    },
    methods: {
      goSpa() {
        this.$router.push('/container/angularbox/vuedemo2');
      }
    }
  };
</script>

<style lang="scss" scoped>
.box {
    margin: 0 auto;
}
</style>
