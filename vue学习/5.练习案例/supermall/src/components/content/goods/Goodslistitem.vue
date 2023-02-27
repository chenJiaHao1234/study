<template>
  <div class="gooditem" @click="abc()">
    <img :src="ifCoute()" alt="" />
    <div class="pandc">
      <p class="title">{{ goodItem.title }}</p>
      <span class="price">￥{{ goodItem.price }}</span>
      <span class="cfav">
        <img src="" alt="" />
        {{ goodItem.cfav }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {

    ifCoute() {
      if(this.$route.path.indexOf('/detail') !== -1) {
        return this.goodItem.image
      } else {
        return this.goodItem.show.img
      }
    },


    abc() {
      // 拿到点击的goodItem的id
      console.log(this.goodItem);
      this.$router.push('/detail/'+ this.goodItem.iid)
    },

    
  }
};
</script>

<style>
.gooditem {
  display: block;
  position: relative;
  width: 48%;
  margin: 1%;
  padding-bottom: 50px;
}

.gooditem img {
  width: 100%;
  border-radius: 5px;
}

.gooditem .pandc {
  position: absolute;
  bottom: 0;
}

.pandc .title {
  font-size: 12px;
  height: 28px;
  /* white-space: nowrap; */
  overflow: hidden;
  margin: 0 10px 3px;
}

.gooditem .price {
  color: pink;
  margin-left: 10px;
}

.gooditem .cfav {
  float: right;
  margin-right: 18px;
  margin-top: 2px;
  font-size: 14px;
}
</style>