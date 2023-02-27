<template>
  <div class="detail" v-if="ress">
    <!-- 顶部导航栏 -->
    <detail-nav-ber
      :title="title"
      class="DetailNavBer"
      @reference="reference"
      ref="scrollIndex"
    ></detail-nav-ber>

    <!-- 滚动区域 -->
    <detail-better-scroll
      class="DetailBetterScroll"
      ref="detailscroll"
      @scrollposition="scrollposition"
    >
      <!-- 轮播图 -->
      <detail-swiper :swiperImages="swiperImages" />
      <!-- v-if="swiperImages!=''" 判断 swiperImages 不为空 -->

      <!-- 商品信息 -->
      <detail-base-info :goodsInfo="goodsInfo" />

      <!-- 商家信息 -->
      <detail-shop-info :shopInfo="shopInfo" />

      <!-- 展示图片 -->
      <detail-info :detailInfo="ditailInfo" @imgLoad="imgLoad" />

      <!-- 商品参数 -->
      <detail-item-params :itemParams="itemParams" ref="itemParams" />

      <!-- 评论信息 -->
      <detail-comment-info :commentInfo="commentInfo" ref="commentInfo" />

      <!-- 推荐信息 -->
      <detail-recommend-goods
        :goodslist="recommendGoods"
        ref="recommendGoods"
      ></detail-recommend-goods>
    </detail-better-scroll>

    <!-- 返回顶部按钮 -->
    <detail-return-top
      class="detailReturnTop"
      @click.native="detailreturntop()"
      v-show="returntop"
    />

    <!-- 底部导航栏 -->
    <detail-bottom-bar @addCart="addCart" />
  </div>
</template>

<script>
import DetailNavBer from "./childComps/DetailNavBer.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailBetterScroll from "@/components/common/BetterScroll/BetterScroll";
import DetailInfo from "./childComps/DetailInfo.vue";
import DetailItemParams from "./childComps/DetailItemParams.vue";
import DetailReturnTop from "@/components/common/ReturnTop/Returntop.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import detailRecommendGoods from "@/components/content/goods/GoodsList.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

// 网络请求
import {
  getDetail,
  recommend,
  GoodsInfo,
  shopInfo,
  commentInfo,
} from "@/network/detail";
export default {
  name: "detail",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      iid: null,
      ress: false,
      swiperImages: [],
      goodsInfo: {},
      shopInfo: {},
      ditailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommendGoods: [],
      scrollOffsetTop: [],
      currentIndex: 0,
      returntop: false,
    };
  },

  created() {
    // 拿到商品id
    this.iid = this.$route.params.id;

    // 请求详情页数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      this.ress = true;

      // 轮播图数据
      this.swiperImages = res.data.result.itemInfo.topImages;

      // 商品信息
      this.goodsInfo = new GoodsInfo(
        res.data.result.itemInfo,
        res.data.result.columns,
        res.data.result.shopInfo.services
      );

      // 展示商家的信息
      this.shopInfo = new shopInfo(res.data.result.shopInfo);

      // 展示的图片信息
      this.ditailInfo = res.data.result.detailInfo.detailImage[0];
      console.log(this.ditailInfo);

      // 展示商品的参数信息
      this.itemParams = res.data.result.itemParams;

      // 展示的评论信息
      this.commentInfo = new commentInfo(res.data.result.rate.list);
    });

    // 请求推荐数据
    recommend().then((res) => {
      console.log(res);
      this.recommendGoods = res.data.data.list;
    });
  },

  methods: {
    // 返回顶部
    detailreturntop() {
      this.$refs.detailscroll.scrollTo(0, 0);
    },

    // img图片加载完成后获得offsettop
    imgLoad() {
      this.scrollOffsetTop = [];
      this.scrollOffsetTop.push(0);
      this.scrollOffsetTop.push(this.$refs.itemParams.$el.offsetTop - 49);
      this.scrollOffsetTop.push(this.$refs.commentInfo.$el.offsetTop - 49);
      this.scrollOffsetTop.push(this.$refs.recommendGoods.$el.offsetTop - 49);

      // console.log(this.scrollOffsetTop);
    },

    // 获取顶部navbar的索引号并
    reference(index) {
      console.log(index);

      // 页面滚动至navbar的索引号位置
      this.$refs.detailscroll.scrollTo(0, -this.scrollOffsetTop[index]);
    },

    // 获取滚动的Y值
    scrollposition(position) {
      // 返回顶部按钮显示隐藏条件
      if (position.y <= -2000) {
        this.returntop = true;
        // console.log(this.returntop);
      } else if (position.y >= -2000) {
        this.returntop = false;
        // console.log(this.returntop);
      }

      // 滚动到到一定位置切换navber的选中状态
      const length = this.scrollOffsetTop.length;
      for (let i = 0; i < this.scrollOffsetTop.length; i++) {
        if (this.currentIndex !== i) {
          if (
            position.y <= -this.scrollOffsetTop[i] &&
            position.y >= -this.scrollOffsetTop[i + 1]
          ) {
            console.log(i);
            this.$refs.scrollIndex.titleIndex = i;
            this.currentIndex = i;
          } else if (
            position.y <= -this.scrollOffsetTop[i] &&
            i === length - 1
          ) {
            console.log(i);
            this.$refs.scrollIndex.titleIndex = i;
            this.currentIndex = i;
          }
        }
      }
    },

    // 获取购物车展示的信息
    addCart() {
      console.log(this);
      const addCart = {
        iid: this.iid,
        img: this.swiperImages[0],
        title: this.goodsInfo.title,
        desc: this.goodsInfo.desc,
        price: this.goodsInfo.price,
        lowNowPrice: this.goodsInfo.lowNowPrice,
        count: 1,
        check: true
      }
      
      this.$store.dispatch('addcontent', addCart)
    }
  },

  components: {
    DetailNavBer,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailBetterScroll,
    DetailInfo,
    DetailItemParams,
    DetailReturnTop,
    DetailCommentInfo,
    detailRecommendGoods,
    DetailBottomBar,
  },
};
</script>

<style scoped>
/* .detail { */
/* position: relative; */
/* } */
.DetailNavBer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: #fff;
}

.DetailBetterScroll {
  height: calc(100vh - 98px);
  margin-top: 49px;
  overflow: hidden;
}

.detailReturnTop {
  position: absolute;
  right: 10px;
  bottom: 60px;
  z-index: 99;
}
</style>