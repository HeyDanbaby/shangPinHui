<template>
  <div>
    <div class="swiper-container" id="floor1Swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(carousel, index) in carouselComponentList"
          :key="carousel.id"
        >
          <img :src="carousel.imageUrl" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
// 引入swiper
import Swiper from "swiper";
export default {
  name: "Carousel",
  components: {},
  props: ["carouselComponentList"],
  data() {
    return {};
  },
  watch: {
    carouselComponentList: {
      immediate: true, // 立即监听 不管数据有无变化
      handler(newValue, oldValue) {
        console.log("Floor组件中的list数据已经变化了"); // watch监听不到  因为list由父亲给的 从来没有变化
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            // direction: "vertical", // 垂直切换选项
            // 不设置，默认水平切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true, // 点击小圆球的时候也切换图片
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style scoped></style>
