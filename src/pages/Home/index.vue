<template>
  <div>
    <!-- 使用三级联动的全局组件 全局组件直接使用，不需要引入-->
    <TypeNav></TypeNav> 
    <Listcontainer/> 
    <Recommend/> 
    <Rank/> 
    <Like/> 
    <Floor/> 
    <Brand/> 
    <!-- <button @click="add">+1</button>
    <span>store里的数据: {{ count }} </span>
    <button>-1</button> -->
  </div>
</template>

<script>
import Listcontainer from "./ListContainer/index.vue";
import Recommend from "./Recommend/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";
// 引入 mapState 辅助函数
import { mapState } from "vuex";

export default {
  name: "",
  components: {
    Listcontainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    //  this.$store.state.count
    // ...mapState(["count"]),
  },
  methods: {
    // add() {
    //   // this.$store.dispatch() 执行actions里面的方法
    //   this.$store.dispatch("add", 1);
    // },
  },
};
</script>

<style scoped></style>
