<template>
  <div class="pagination">
    <button>上一页</button>
    <button>1</button>
    <button>···</button>

    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>

    <button>···</button>
    <button>{{ totalPage }}</button>
    <button>下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: "Pagination",
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    // 总共多少页
    totalPage() {
      // 向上取整ceil
    return  Math.ceil(this.total/this.pageSize)
    },
    // 连续页码的起始数字、结束数字 (连续的页码数至少是5条)
    startNumAndEndNum() {
      // 解构 变量在下面就不用.this了
      const {continues, pageNo, totalPage} = this
      let startNum = 0
      let endNum = 0
      // 不正常的现象： eg 总共：4页 但是连续码数至少5页
      if(totalPage < continues) {
        startNum = 1;
        endNum = totalPage;
      }
      // 正常现象：连续页码数至少5页 总页数大于5
      // 连续页码数是5 起始数字=当前页-2  结束数字=当前页+2  eg:当前页码：8   6 7 8 9 10
      // 连续页码数是7 起始数字=当前页-3  结束数字=当前页+3  eg:当前页码：8   5 6 7 8 9 10 11
      // 连续页码数是9 起始数字=当前页-4  结束数字=当前页+4  eg:当前页码：8   4 5 6 7 8 9 10 11 12
      // 故：连续页码数不固定 起始结尾数也不固定 不能写死
      else{
        // 向下取整parseInt
        startNum = pageNo - parseInt(continues / 2)  // eg:当前页码：pageNo=8  continues=5  5/2=2.5向下取整2  起始数8-2=6
        endNum =  pageNo + parseInt(continues / 2)  // eg:当前页码：pageNo=8  continues=5  5/2=2.5向下取整2  结束8+2=10
        // 前提：分页器连续页码数的起始数不能是：负数，0
        // 不正常的现象：startNum = 负数，0; 也就是startNum < 1
        // 当前页1   -1 0 1 2 3 => 1 2 3 4 5   起始数：1 结束数：就是连续页码数
        // 当前页2    0 1 2 3 4 => 1 2 3 4 5
          if(startNum < 1) {
             startNum = 1
             endNum = continues
          }
          // 不正常的现象：结尾数endNum > 总页数totalPage
          if(endNum > totalPage) {
            endNum = totalPage
            startNum = totalPage-continues
            // pageNo当前页：31 totalPage=31
            // 29 30 31 32 33 不正常
            // 27 28 29 30 31 应该是
          }

      }

      }
  }
};
</script>

<style lang="scss" scoped>
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
