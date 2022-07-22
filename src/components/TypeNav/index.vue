<template>
  <!-- 商品分类导航 -->

  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 三级联动 -->
        <!-- 过渡动画 -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <!-- 最好的方案：把点击事件goSeach函数给父亲，事件委托 -->
            <div class="all-sort-list2" @click="goSearch">
              <!-- 一级分类 -->
              <div
                class="item"
                v-for="(c1, index) in pageCategoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex === index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                  <!-- 最好的方案：把点击事件给父亲，事件委托 -->
                  <!-- 方案2：goSeach函数 但是如果1000个 就要回调1000次 也不是最好的方案 -->
                  <!-- <a @click="goSearch">{{ c1.categoryName }}</a> -->
                  <!-- 方案1：router-link跳转路由会出现卡顿 因为router-link本身是一个vue自带组件 -->
                  <!-- <router-link to="/search">{{ c1.categoryName }}</router-link> -->
                </h3>
                <!-- 二级、三级分类 -->
                <div
                  class="item-list clearfix"
                  :style="{
                    display: currentIndex === index ? 'block' : 'none',
                  }"
                >
                  <div
                    class="subitem"
                    v-for="(c2, index2) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                        <!-- <a @click="goSearch">{{ c2.categoryName }}</a> -->
                        <!-- <router-link to="/search">{{
                        c2.categoryName
                      }}</router-link> -->
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index3) in c2.categoryChild"
                          :key="c3.categoryList"
                        >
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                          <!-- <a @click="goSearch">{{ c3.categoryName }}</a> -->
                          <!-- <router-link to="/search">{{
                          c3.categoryName
                        }}</router-link> -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
// 引入mapState变量，就能更简单的使用vuex里的数据
import { mapState } from "vuex";
// 引入lodash
// 第一种引入方式：把lodash全部的功能函数引入  使用：_.函数名称  建议：按需引入
// import _ from 'lodash'
// console.log(_);
// 第二种引入方式：按需引入lodash中的函数 —— 节流throttle函数  使用：函数名称
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  components: {},
  props: {},
  data() {
    return {
      // 存储用户鼠标移到哪一个一级分类的元素的下标值
      currentIndex: -1, // 初始值为-1   鼠标还没移上去
      // 控制一级分类显示与隐藏
      show: true,
    };
  },
  // 发请求经常在mounted生命周期函数中进行，组件挂载完毕，可以向服务器发请求
  mounted() {
    // 派发action，获取数据(后期性能优化：由于Search、home组件都用到TypeNav，要发2次请求，把它转移到APP.vue根组件中，只会请求1次)
    // this.$store.dispatch("categoryList");

    // 当组件挂载完毕，判断typeNav当前的路由是否为search，因为在search页面隐藏，home页面进去默认是展开的，让show的属性变为false
    // 就是判断typeNav当前的路由不是home，即为search页面, 隐藏
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState({
      // pageCategoryList: (store)=>{return store.home.categoryList} // 拿到home小仓库的数据 给 页面
      pageCategoryList: (store) => store.home.categoryList,
    }),
  },
  methods: {
    // 鼠标进入修改响应式数据currentIndex属性
    // changeIndex(index) {
    //   // index：鼠标移到一级分类的元素的下标值 把它赋值给currentIndex
    //   // console.log(index);
    //   this.currentIndex = index;
    // },
    // 节流功能
    changeIndex: throttle(function (index) {
      // console.log(index);
      this.currentIndex = index;
    }, 100), // 0.05s执行1次

    // leaveIndex() {
    //   this.currentIndex = -1;
    // },
    goSearch(event) {
      // 点击事件路由跳转最好的方案：编程式导航 + 事件委托
      // 事件委托存在的问题：1. 点击的不一定是a标签 2. 怎么区分是一级、二级、三级分类的a标签
      // this.$router.push("/search");
      let element = event.target; // event.target：浏览器默认给的当前点击的标签
      // console.log(Element);
      // event.target.dataset    浏览器提供的 dataset属性：可以获取节点所有的属性和属性值 ！！！得到的是小写的
      console.log("event.target.dataset: ", event.target.dataset);
      let { categoryname, category1id, category2id, category3id } =
        element.dataset; // 把categoryname/category1id等属性从所有的里面解构出来
      if (categoryname) {
        // 这里路由跳转的参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        // 一级、二级、三级分类的a标签
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        // 处理并封装路由跳转所需要的参数
        // 判断：当路由跳转的时候，要携带params参数
        if (this.$route.params) {
          location.params = this.$route.params;
        }
        // console.log(location, query);
        location.query = query;
        // // console.log(location);
        this.$router.push(location);
      }
    },
    enterShow() {
      // 当鼠标移入的时候，商品列表显示
      if (this.$route.path !== "/home") {
        this.show = true;
      }
    },
    leaveShow() {
      this.currentIndex = -1; // 控制home页面的一级分类的背景颜色的
      if (this.$route.path !== "/home") {
        // 当鼠标移入的时候，商品列表隐藏
        this.show = false;
      }
    },
  },
};
// 生命周期函数 8 个
// beforeCreate,
// created, 请求数据
// beforeMount,
// mounted, 请求数据
// beforeUpdate,
// updated,
// beforeDestroy,
// destroyed,
</script>

<style scoped lang="scss">
// cur 动态绑定一级分类的class
.cur {
  background-color: #e1251b;
  h3 a {
    color: #fff !important;
  }
}
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          // 通过JavaScript控制显示与隐藏
          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
      }
    }
    // 过渡动画的样式
    // 过渡动画开始状态(进入)
    .sort-enter {
      height: 0px;
    }
    // 过渡动画的结束状态(进入)
    .sort-enter-to {
      height: 461px;
    }
    // 定义动画的事件、速率
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
