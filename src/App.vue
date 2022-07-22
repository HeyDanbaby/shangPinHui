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
  // 性能优化：APP组件中的回调只会执行一次
  mounted() {
    // 把放在TypeNav里的派发的action放在这里，就可以只请求一次
    // 派发action：获取三级分类列表的数据
      this.$store.dispatch("categoryList");
  },
};
</script>

<style lang="scss"></style>
