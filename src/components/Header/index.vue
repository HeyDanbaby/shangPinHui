<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <!-- <a href="###">登录</a> -->
            <!-- <a href="###" class="register">免费注册</a> -->
            <!-- 声明式导航，to属性 去哪一个界面的路由 -->
            <router-link to="/login">登录</router-link>
            <router-link class="register" to="/register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <!-- 点击logo跳转到首页 用router-link声明式导航 -->
        <!-- <a class="logo" title="尚品汇" href="###" target="_blank">
          <img src="./images/logo.png" alt="" />
        </a> -->
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
            @keyup.enter="goSearch"
          />
          <!-- 点击搜索 跳转到搜索页面  -->
          <!-- 编程式导航 -->
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    // 搜索按钮的回调函数：需要向search路由进行跳转
    goSearch() {
      // console.log('测试')
      // 路由传参
      // 第一种：字符串形式
      // ① params参数
      // this.$router.push("/search/" + this.keyword);
      // ② query参数
      // this.$router.push("/search/" + "?k=" + this.keyword.toUpperCase()); // toUpperCase() 大写
      // ③ 2种参数结合
      // this.$router.push("/search/" + this.keyword + "?k=" + this.keyword.toUpperCase());

      // 第二种：模板字符串
      // ① params参数
      // this.$router.push(`/search/${this.keyword}`);
      // ② query参数
      // this.$router.push(`/search/?k=${this.keyword.toUpperCase()}`)
      // ③ 2种参数结合
      // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)

      // 第三种：对象的写法 配置路由时加上params的name属性
      // http://127.0.0.1:8080/search/abc?k=ABC
      // this.$router.push({name:"search", params:{keyword:this.keyword}, query:{k:this.keyword.toUpperCase()}})
      let location = {
        name: "search",
        params: { keyword: this.keyword || undefined },
      };
      if (this.$route.query) {
        location.query = this.$route.query;
      }
      this.$router.push(location);
      // 面试题1：路由传递参数(对象写法)，path是否可以结合params参数一起使用？
      // this.$router.push({path:'/search', params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}})
      // 答：不可以。路由跳转的时候，对象的写法可以是name、path，但是：path这种写法不能与params参数一起使用

      // 面试题2：如何指定params参数可传可不传？
      // eg1: 配置路由的时候，占位了params参数，但是路由跳转的时候你没有传递params参数
      // this.$router.push({name:"search",query:{k:this.keyword.toUpperCase()}})
      // http://127.0.0.1:8080/?k=111N 此时的路径变成了这样是不对的，因为路径里压根没有/search 只有query参数
      // http://127.0.0.1:8080/search/?k=111N 没有传递params参数，至少路径应该显示成这样
      // 如何指定params参数可传可不传？
      // 答：在配置路由的时候，在占位的后面加上一个问号，此时params参数可传可不传。

      // 面试题3：params参数可以传递 也可以不传递，但是如果传递的是空串，如何解决？
      // this.$router.push({name:"search", params:{keyword: '' || undefined}, query:{k:this.keyword.toUpperCase()}})
      // 答：传递空串的时候，URL出现问题，使用undefined解决：params参数传递(空串)

      // 面试题4：路由组件能不能传递props数据
      // 答：可以的 有3种写法 推荐函数写法
      // this.$router.push({name:"search", params:{keyword:this.keyword}, query:{k:this.keyword.toUpperCase()}})
      // console.log(this);   // this：指向的是当前组件的实例 VueComponent{}
      // console.log(this.$router);
      // console.log(this.$route);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
