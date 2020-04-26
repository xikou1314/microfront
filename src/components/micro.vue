<template>
    <div class="micro">
        <template v-if="type === 'spa'">
            <div :id="name" v-if="frame === 'vue'">
              <div id="vue">
              </div>
            </div>
            <div :id="name" v-else-if="frame === 'react'">  
            </div>
            <div :id="name" v-else-if="frame === 'angular'">  
            </div>
        </template>
        <template v-else>
            <iframe :src="src" class="frame" scrolling="no" :id="name"></iframe>
        </template>
    </div>
</template>

<script>
  import * as singleSpa from 'single-spa'; // 导入single-spa
  import spautil from '../util/single-spa-util';
  export default {
    name: 'Micro',
    props: {
      // 要跳转的系统
      name: {
        type: String,
        default: ''
      },
      // spa使用的框架 vue angular react
      frame: {
        type: String,
        default: ''
      },
      // 类型 spa iframe
      type: {
          type: String,
          default: 'spa'
      },
      src: {
        type: String,
        default: ''
      }
    },
    inheritAttrs: true,
    data() {
      return {
        resData: '',
        mode: ''
      };
    },
    watch: {
    },
    created() {
        // 从session中拿出name对应的manifest.json 注册spa并控制路由进行加载
        if (this.type === 'spa' && (!window.registeredApp || window.registeredApp.indexOf(this.name) === -1)) {
          var services = JSON.parse(sessionStorage.getItem('services'));
          var service = null;
          services.forEach(val => {
            if (val.appname === this.name) {
              service = val;
            }
          });

          singleSpa.registerApplication( // 注册微前端服务
            service.appname,
            async () => {
              let tmp = null;
              await spautil.getManifest(service.manifest, service.chunkname).then(() => {
                tmp = window[service.appname];
              });
              return tmp;
            },
            location => location.pathname.indexOf(service.appname) > -1 // 配置微前端模块前缀
          );
          singleSpa.start();

          if (window.registeredApp) {
            window.registeredApp.push(service.appname);
          } else {
            window.registeredApp = [service.appname];
          }
        }
    }
  };
</script>

<style lang="scss">
.micro {
    margin: 0 auto;
    .frame {
      width: 100%;
      height: 100%;
      overflow-x:auto;
      overflow-y:hidden;
      border: none;
    }
}
</style>
