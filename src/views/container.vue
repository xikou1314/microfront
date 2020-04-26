<template>
  <div class="container">
    <el-container>
        <el-header>Header</el-header>
        <el-container>
        <el-aside width="200px">
            <el-menu default-active="/container/vuebox" :router="true">
            <el-menu-item index="/container/vuebox">
                <i class="el-icon-menu"></i>
                <span slot="title">vue</span>
            </el-menu-item>
            <el-menu-item index="/container/angularbox">
                <i class="el-icon-document"></i>
                <span slot="title">angular</span>
            </el-menu-item>
            <el-menu-item index="/container/iframebox">
                <i class="el-icon-setting"></i>
                <span slot="title">iframe</span>
            </el-menu-item>
            <el-menu-item index="/container/iframebox2">
                <i class="el-icon-setting"></i>
                <span slot="title">iframe2</span>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-main>
            <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
        </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
      name: 'Container',
      data() {
        return {};
      },
      methods: {

      }
  };
</script>

<style lang="scss">
  .container {
    margin: 0 auto;
  }
</style>
