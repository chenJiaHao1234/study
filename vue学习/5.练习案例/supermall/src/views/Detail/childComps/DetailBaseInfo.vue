<template>
  <div class="DetailBaseInfo">
    <div class="titleInfo">{{ goodsInfo.title }}</div>
    <div class="priceWholeInfo">
      <span class="priceInfo">{{ goodsInfo.price }}</span>
      <span class="oldPriceInfo">{{ goodsInfo.oldPrice }}</span>
      <span class="discountDescInfo">{{ goodsInfo.discountDesc }}</span>
    </div>
    <div class="columnsInfo">
      <span class="columnsInfoItem" v-for="item in goodsInfo.columns">
        {{item}}
      </span>
    </div>
    <div class="servicesInfo">
      <span v-for="item in goodsInfo.services" class="servicesInfoItem">
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.DetailBaseInfo {
  padding: 5px;
}

.priceWholeInfo {
  position: relative;
  height: 30px;
  margin-top: 5px;
}

.priceInfo {
  float: left;
  margin-right: 8px;
  font-size: 20px;
  color: pink;
}

.oldPriceInfo {
  float: left;
  margin-top: 6px;
  text-decoration: line-through;
  font-size: 14px;
  margin-right: 3px;
}

.discountDescInfo {
  float: left;
  background-color: pink;
  padding: 3px;
  border-radius: 8px;
  font-size: 12px;
  color: #fff;
}

.columnsInfo {
  display: flex;
  margin-top: 10px;
}

.columnsInfo .columnsInfoItem {
  flex: 1;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}

.servicesInfo {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 5px solid gray;
  padding-bottom: 10px;
}

.servicesInfo .servicesInfoItem {
    width: 33.33%;
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
}

.servicesInfo img {
    width: 14px;
    margin-right: 2px;
    vertical-align: top;
}
</style>