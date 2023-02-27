<template>
  <div>
    <div class="shopInfoName">
      <img :src="shopInfo.shopLogo" alt="" />
      {{ shopInfo.name }}
    </div>

    <div class="detailedInfo">
      <div class="totalInfo">
        <div class="cSells">
          <div class="cSellsitem">
            <div v-if="this.shopInfo.cSells <= 10000">
              {{ shopInfo.cSells }}
            </div>
            <div v-else>{{ quantity }}{{ unit }}</div>
            <div>总销量</div>
          </div>
        </div>
        <div class="cGoods">
          <div class="cGoodsitem">
            <div>{{ shopInfo.cGoods }}</div>
            <div>全部宝贝</div>
          </div>
        </div>
      </div>
      <div class="grade">
        <div class="gradeName">
          <div v-for="item in shopInfo.score">
            <div>{{ item.name }}</div>
          </div>
        </div>
        <div class="score">
          <div v-for="item in shopInfo.score">
            <div v-if="!item.isBetter" :class="{ gradecolor2: !item.isBetter }">
              {{ item.score }}
            </div>
            <div v-else :class="{ gradecolor1: item.isBetter }">
              {{ item.score }}
            </div>
          </div>
        </div>
        <div class="isBetter">
          <div v-for="item in shopInfo.score">
            <div v-if="!item.isBetter" :class="{ gradecolor2: !item.isBetter }">
              低
            </div>
            <div v-else :class="{ gradecolor1: item.isBetter }">高</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0,
      unit: null,
    };
  },
  props: {
    shopInfo: {
      type: Object,
      default: {},
    },
  },

  mounted() {
    this.quantity = this.shopInfo.cSells;
    console.log(this.quantity);

    if (this.quantity >= 100000000) {
      this.unit = "亿";
      this.quantity = this.quantity / 100000000;
    } else if (this.quantity >= 10000) {
      this.unit = "万";
      this.quantity = this.quantity / 10000;
    }
    this.quantity = this.quantity.toFixed(1)
  },

  methods: {},
};
</script>

<style scoped>
.shopInfoName {
  padding-bottom: 15px;
  padding-left: 10px;
}
.shopInfoName img {
  width: 40px;
  vertical-align: middle;
}
.detailedInfo {
  display: flex;
  margin-bottom: 30px;
}

.detailedInfo .totalInfo {
  flex: 1;
  float: left;
  text-align: center;
}

.totalInfo .cGoods,
.totalInfo .cSells {
  position: relative;
  float: left;
  width: 50%;
  height: 100%;
  text-align: center;
}

.cGoodsitem {
  border-right: 2px solid #eee;
}

.cGoodsitem div,
.cSellsitem div {
  padding: 3px 0;
}

.cGoods .cGoodsitem,
.cSells .cSellsitem {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  font-size: 14px;
}

.grade {
  position: relative;
  flex: 1;
  display: flex;
}

.gradeName,
.score,
.isBetter {
  font-size: 12px;
  flex: 1;
}

.gradeName div,
.score div,
.isBetter div {
  margin-top: 3px;
  text-align: center;
}

.gradecolor1 {
  color: red;
}

.gradecolor2 {
  color: green;
}
</style>