<template>
  <div class="box">
    iframe
    <button @click="sendMsg">发送信息到iframe4</button>
    <micro src="/test/vuedemo4/" name="vuedemo4" type="iframe" class="height"></micro>
  </div>
</template>

<script>
  import micro from '../components/micro';

  export default {
    name: 'IframeBox2',
    components: { micro },
    props: {
    },
    computed: {

    },
    created() {
      console.log('创建');
    },
    methods: {
      sendMsg() {
        window.BaseMessager.trigger('vuedemo4', '这是main传递给vuedemo4的信息');
      }
    }
  };
</script>

<style lang="scss" scoped>
.box {
    margin: 0 auto;
}
.height {
  height: 800px;
}
</style>
