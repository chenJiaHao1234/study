<template>
  <div>
    <div v-for="(item, index) in cartList">
      
      <div class="cartList">
        <div class="selectBtn">
          <div class="btn" @click="isclick(index)" :class="active(index)"></div>
        </div>
        <div class="img">
          <img :src="item.img" alt="" />
        </div>
        <div class="shopInfo">
          <p class="title">{{ item.title }}</p>
          <p class="desc">{{ item.desc }}</p>
          <div class="price">￥{{ item.lowNowPrice }}</div>
          <div class="count">
            <div>{{ item.count }}</div>
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
      
    }
    
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    isclick(index) {
      this.cartList[index].check = !this.cartList[index].check
      
    },

    active(index) {
      return {color: this.cartList[index].check}
    }
  }
};
</script>

<style scoped>
.cartList {
  display: flex;
  padding: 5px;
  padding-left: 0;
}
.cartList .selectBtn {
  flex: 1;
  position: relative;
}
.selectBtn .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border: 1px solid gray;
  border-radius: 50%;
}
.cartList .img {
  width: 20%;
}
.img img {
  width: 100%;
  border-radius: 5px;
}

.shopInfo {
  width: 70%;
  padding: 5px;
  position: relative;
}

.title,
.desc {
  width: 100%;
  padding-top: 5px;
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.desc {
  font-size: 12px;
}

.price {
  position: absolute;
  bottom: 5px;
  left: 5px;
}

.count {
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.color {
  background-color: pink;
}
</style>