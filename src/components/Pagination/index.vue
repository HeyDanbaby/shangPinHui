<template>
  <div class="pagination">
    <button :disabled="pageNo === 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <!--pageNo:1  上一页 1···12345···31 下一页 共 91 条 => 前面多了1 
        pageNo:2  上一页 1···12345···31 下一页 共 91 条 => 前面多了1
        pageNo:3  上一页 1···12345···31 下一页 共 91 条 => 前面多了1
        pageNo:4  上一页 1···23456···31 下一页 共 91 条 => 正确
        综上：起始数字startNum>1 前面的1就是要的
     -->
    <button
      v-if="startNumAndEndNum.startNum > 1"
      @click="$emit('getPageNo', 1)"
      :class="{active: pageNo === 1}"
    >
      1
    </button>
    <!-- pageNo=1,2,3 这个前面的省略号应该不显示 此时的startNum=1 
        综上：startNum>1 这个省略号就显示
    -->
    <button v-if="startNumAndEndNum.startNum > 1">···</button>
    <!-- 中间连续页码的部分 -->
    <button
      v-for="(page, index) in startNumAndEndNum.endNum"
      :key="index"
      v-if="page >= startNumAndEndNum.startNum"
      @click="$emit('getPageNo', page)"
      :class="{active: pageNo === page}"
    >
      {{ page }}
    </button>
    <!-- pageNo=28,29,30,31 后面的省略号不显示 此时的endNum=31或者30
          综上：endNum < 30 就要后面的省略号
    -->
    <button v-if="startNumAndEndNum.endNum < totalPage - 1">···</button>
    <!--pageNo=31 上一页 1···27 28 29 30 31···31 下一页 共 91 条 =>  后面多了31
        pageNo=30 上一页 1···27 28 29 30 31···31 下一页 共 91 条 =>  后面多了31
        pageNo=29 上一页 1···27 28 29 30 31···31 下一页 共 91 条 =>  后面多了31
        pageNo=28 上一页 1···26 27 28 29 30···31 下一页 共 91 条 =>  正确
        综上：endNum<31即totalPage 就显示后面的31
    -->
    <button
      v-if="startNumAndEndNum.endNum < totalPage"
      @click="$emit('getPageNo', totalPage)"
      :class="{active: pageNo === totalPage}"
    >
      {{ totalPage }}
    </button>
    <button :disabled="pageNo === totalPage" @click="$emit('getPageNo', pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 总共多少页
    totalPage() {
      // 向上取整ceil
      return Math.ceil(this.total / this.pageSize);
    },
    // 连续页码的起始数字、结束数字 (连续的页码数至少是5条)
    startNumAndEndNum() {
      // 解构 变量在下面就不用.this了
      const { continues, pageNo, totalPage } = this;
      let startNum = 0;
      let endNum = 0;
      // 不正常的现象： eg 总共：4页 但是连续码数至少5页
      if (totalPage < continues) {
        startNum = 1;
        endNum = totalPage;
      }
      // 正常现象：连续页码数至少5页 总页数大于5
      // 连续页码数是5 起始数字=当前页-2  结束数字=当前页+2  eg:当前页码：8   6 7 8 9 10
      // 连续页码数是7 起始数字=当前页-3  结束数字=当前页+3  eg:当前页码：8   5 6 7 8 9 10 11
      // 连续页码数是9 起始数字=当前页-4  结束数字=当前页+4  eg:当前页码：8   4 5 6 7 8 9 10 11 12
      // 故：连续页码数不固定 起始结尾数也不固定 不能写死
      else {
        // 向下取整parseInt
        startNum = pageNo - parseInt(continues / 2); // eg:当前页码：pageNo=8  continues=5  5/2=2.5向下取整2  起始数8-2=6
        endNum = pageNo + parseInt(continues / 2); // eg:当前页码：pageNo=8  continues=5  5/2=2.5向下取整2  结束8+2=10
        // 前提：分页器连续页码数的起始数不能是：负数，0
        // 不正常的现象：startNum = 负数，0; 也就是startNum < 1
        // 当前页1   -1 0 1 2 3 => 1 2 3 4 5   起始数：1 结束数：就是连续页码数
        // 当前页2    0 1 2 3 4 => 1 2 3 4 5
        if (startNum < 1) {
          startNum = 1;
          endNum = continues;
        }
        // 不正常的现象：结尾数endNum > 总页数totalPage
        if (endNum > totalPage) {
          endNum = totalPage;
          startNum = totalPage - continues;
          // pageNo当前页：31 totalPage=31
          // 29 30 31 32 33 不正常
          // 27 28 29 30 31 应该是
        }
      }
      return { startNum, endNum };
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: skyblue;
}
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
