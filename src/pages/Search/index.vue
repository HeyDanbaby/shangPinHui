<template>
  <div>
    <TypeNav></TypeNav>

    <!-- <h1>params参数-------{{$route.params.keyword}}--------{{keyword}}</h1>
    <h1>query参数-------{{$route.query.k}}-----------{{k}}</h1>
    <h1>路由传递的props属性里的params参数------{{keyword}}--{{a}}----{{b}}</h1> -->
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  // 路由组件可以传递props
  // props: ['keyword'],
  // props: ['keyword', 'a', 'b'],
  // props: ['keyword', 'k'],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  beforeCreate() {},
  created() {},
  mounted() {},
};
</script>

<style scoped></style>
