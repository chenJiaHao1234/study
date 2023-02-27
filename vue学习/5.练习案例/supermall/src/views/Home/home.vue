<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>

    <!-- 组件不能直接监听点击需要加 .native -->
    <returntop
      class="returntop"
      @click.native="returntop()"
      v-show="conentposition"
      >123</returntop
    >

    <tab-control
      :titles="['流行', '经典', '新款']"
      @tabclick="tabclick"
      ref="tabcontrol1"
      class="tabcontrol"
      v-show="tabFixed"
    ></tab-control>

    <better-scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scrollposition="scrollposition"
      @pullingUp="pullingUp"
    >
      <home-swiper
        :banners="banners"
        class="home-swiper"
        @swiperimgload="swiperimgload"
      ></home-swiper>
      <homer-recommend :recommends="recommends"></homer-recommend>
      <home-feature></home-feature>
      <tab-control
        :titles="['流行', '经典', '新款']"
        @tabclick="tabclick"
        ref="tabcontrol2"
      ></tab-control>
      <goods-list :goodslist="goods[currenttype].list"></goods-list>
    </better-scroll>
  </div>
</template>

<script>
// 公共组件
import navBar from "@/components/common/navbar/navBar.vue";
import BetterScroll from "@/components/common/BetterScroll/BetterScroll.vue";
import Returntop from "@/components/common/ReturnTop/Returntop.vue";

import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

// home组件
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomerRecommend from "./childComps/HomerRecommend.vue";
import homeFeature from "./childComps/HomeFeatureView.vue";

// 网络请求
import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currenttype: "pop",
      conentposition: false,
      tabOffsetTop: 0,
      tabFixed: false,
      positionY: 0,
      deactivatedPage: false,
    };
  },

  created() {
    // 👇请求轮播图数据
    this.getHomeMultidata();

    // 👇请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  methods: {
    // 👇请求轮播图数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        // console.log(this.recommends);
      });
    },

    // 👇网络请求得到数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        for (let i of res.data.data.list) {
          this.goods[type].list.push(i);
        }
        this.goods[type].page += 1;
      });
    },

    swiperimgload() {
      console.log(this.$refs.tabcontrol2.$el.offsetTop - 49);
      this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop - 49;
    },

    // 👇根据点击进行不同的网络请求
    tabclick(index) {
      console.log(index);
      if (index === 0) {
        this.currenttype = "pop";
      } else if (index === 1) {
        this.currenttype = "new";
      } else {
        this.currenttype = "sell";
      }

      // 让组件里面记录的两个num互通
      this.$refs.tabcontrol1.num = index;
      this.$refs.tabcontrol2.num = index;
    },

    // 👇返回顶部
    returntop() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    // 返回顶部图标的显示和隐藏
    scrollposition(position) {
      if (-position.y > 1000) {
        this.conentposition = true;
      } else {
        this.conentposition = false;
      }

      if (-position.y >= this.tabOffsetTop) {
        this.tabFixed = true;
      } else {
        this.tabFixed = false;
      }
    },

    // 上拉加载更多
    pullingUp() {
      console.log("上拉加载更多");
      if (!this.deactivatedPage) {
        this.getHomeGoods(this.currenttype);
      }
    },
  },

  activated() {
    this.$refs.scroll.scrollTo(0, this.positionY, 0);
    this.deactivatedPage = false;
  },

  deactivated() {
    this.positionY = this.$refs.scroll.scroll.y;
    this.deactivatedPage = true;
  },

  // 注册组件
  components: {
    navBar,
    HomeSwiper,
    HomerRecommend,
    homeFeature,
    TabControl,
    GoodsList,
    BetterScroll,
    Returntop,
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: pink;
}

.content {
  height: calc(100vh - 49px);
  overflow: hidden;
}

.returntop {
  position: absolute;
  right: 10px;
  bottom: 60px;
  z-index: 99;
}

.tabcontrol {
  position: fixed;
  top: 49px;
  left: 0;
  right: 0;
  z-index: 99;
}
</style>