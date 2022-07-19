<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- Footer组件：在Home、Search显示 在Login、Register隐藏 -->
    <!-- <Footer v-show="$route.path === '/home'||$route.path === '/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  components: {
    Header,
    Footer,
  }, 
};
</script>

<style lang="scss"></style>
