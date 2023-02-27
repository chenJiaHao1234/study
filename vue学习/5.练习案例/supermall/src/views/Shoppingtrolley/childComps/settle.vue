<template>
  <div class="settle">
    <div class="allCheck">
      <div
        class="btn"
        @click="allCheck()"
        :class="{ color: state }"
      ></div>
      <div>全选</div>
    </div>
    <div class="totalPrice">合计：￥{{totalPrice}}</div>
    <div class="settleAccounts">结算</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allCheckActive: null,
    };
  },

  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  methods: {
    allCheck() {
      if (this.state) {
        for (let i = 0; i < this.cartList.length; i++) {
          this.cartList[i].check = false;
        }
        console.log(this.state);
      } else {
        for (let i = 0; i < this.cartList.length; i++) {
          this.cartList[i].check = true;
        }
      }
    },
  },

  computed: {
    totalPrice() {
      let price = 0;
      for(let i of this.cartList) {
        // console.log(i);
        if(i.check) {
          price = price + (i.lowNowPrice * i.count)
        }
      }
      return price.toFixed(2)
    },

    state() {
      for (let i of this.cartList) {
        console.log(i.check);
        if(!i.check) {
          return false
        }
      }
      return true
    }
  }
};
</script>

<style scoped>
.settle {
  display: flex;
  height: 49px;
  line-height: 49px;
  background-color: gray;
  color: #fff;
}

.allCheck {
  display: flex;
  width: 20%;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.btn {
  width: 16px;
  height: 16px;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 3px;
}

.totalPrice {
  flex: 1;
}

.settleAccounts {
  width: 30%;
  margin: 5px 5px;
  background-color: red;
  border-radius: 10px;
  text-align: center;
  line-height: 39px;
}

.color {
  background-color: pink;
}
</style>