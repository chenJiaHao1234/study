<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveDOM from "@better-scroll/observe-dom";
import ObserveImage from "@better-scroll/observe-image";

BScroll.use(Pullup);
BScroll.use(ObserveDOM);
BScroll.use(ObserveImage);

export default {
  data() {
    return {
      scroll: null,
    };
  },

  props: {
    probeType: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    // 派发 scroll 的场景分为两种：
    // 1. 手指作用在滚动区域（content DOM）上;
    // 2. 调用 scrollTo 方法或者触发 momentum 滚动动画（其实底层还是调用 scrollTo 方法）
    // 对于 v2.1.0 版本，对 probeType 做了一次统一
    // 1. probeType 为 0，在任何时候都不派发 scroll 事件，
    // 2. probeType 为 1，仅仅当手指按在滚动区域上，每隔 momentumLimitTime 毫秒派发一次 scroll 事件，
    // 3. probeType 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件，
    // 4. probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画

    // (2) 在BScroll中不能正常监听点击事件。如果需要就加上 click: true

    // (3) pillUpLoad 滑动到底部后执行

    // 👇更好的滚动效果
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: true,
      observeDOM: true,
      observeImage: true,
    });

    // 获取当前滚动的坐标
    this.scroll.on("scroll", (position) => {
      this.$emit("scrollposition", position);
    });

    // 当滑动到底部时执行
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
      this.$emit("pullingUp");
      // 👇监测到上拉刷新的动作之后，pullingUp 事件的消费机会只有一次，
      // 👇因此你需要调用 finishPullUp()
      // 👇来告诉 BetterScroll 来提供下一次 pullingUp 事件的消费机会。
      this.scroll.finishPullUp();
    });
  },

  methods: {
    scrollTo(x, y, time) {
      //👇如果没有传递参数默认值为1000
      this.scroll.scrollTo(x, y, (time = 300));
    },
  },
};
</script>

<style scoped>
</style>