<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(slide, index) in SonSkuImageList"
        :key="slide.id"
      >
        <img :src="slide.imgUrl" :class="{ active: currentIndex === index }"  @click="changeCurrentIndex(index)"/>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
// 1、引入Swiper包
import Swiper from "swiper";
import { watch } from "vue";
export default {
  name: "ImageList",
  props: ["SonSkuImageList"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  watch: {
    SonSkuImageList(newValue, oldValue) {
      this.$nextTick(() => {
        var mySwiper = new Swiper(".swiper-container", {
          // direction: "vertical", // 垂直切换选项
          // 不设置，默认水平切换选项
          // loop: true, // 循环模式选项
          // 如果需要分页器
          // pagination: {
          //   el: ".swiper-pagination",
          //   clickable: true, // 点击小圆球的时候也切换图片
          // },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          // 显示图片的个数
          slidesPerView: 3,
          // 每一次切换的个数
          sldesPerGroup: 1,
        });
      });
    },
  },
  methods: {
    changeCurrentIndex(index) {
      this.currentIndex = index;
      this.$bus.$emit('getIndex', this.currentIndex)
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      // &:hover {
      //   border: 2px solid #f60;
      //   padding: 1px;
      // }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>
