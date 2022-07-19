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
  </div>
</template>

<script>
import Listcontainer from './ListContainer/index.vue'
import Recommend from './Recommend/index.vue'
import Rank from './Rank/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'
export default {
name: '',
  components: {
    Listcontainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  beforeCreate() {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
</style>