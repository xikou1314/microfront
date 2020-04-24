<template>
  <div class="box">
    iframe
    <micro name="https://www.baidu.com/" type="iframe"></micro>
  </div>
</template>

<script>
  import micro from '../components/micro';

  export default {
    name: 'IframeBox',
    components: { micro },
    props: {
    },
    computed: {

    },
    created() {
      console.log('创建');
    },
    methods: {

    }
  };
</script>

<style lang="scss" scoped>
.box {
    margin: 0 auto;
}
</style>
