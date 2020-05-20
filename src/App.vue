<template>
  <div>
    <!-- 组件内容展示的位置 -->
    <router-view></router-view>
    © ADORN GEROKY张子祺
    
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>


全局加载样式 main.js
// 加载模板需要的css文件
import "@/assets/images/css/common.css";
