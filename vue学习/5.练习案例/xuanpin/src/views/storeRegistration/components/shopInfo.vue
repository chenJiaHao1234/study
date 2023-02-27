<template>
  <div class="shopInfo">
    <div class="shopimg">
      <img src="../../../assets/img/storeRegistration/shopimg.png" alt="" />
    </div>

    <div class="shop">
      <div class="shopName">Ebay</div>
      <div>
        <span>注册状态</span>
        <span>注册数量</span>
        <span>平台佣金</span>
      </div>
    </div>

    <div class="btn">开始注册</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.shopInfo {
  display: flex;
  height: 1.3333rem;
  background-color: #eee;
  margin-top: .2667rem;
}

.shopimg {
  height: 100%;
}

.shopimg img {
  height: 100%;
}

.shop {
  flex: 1;
  margin-top: .2667rem;
  margin-left: .2667rem;
}

.shop .shopName {
  margin-bottom: .2667rem;
}

span {
  display: inline-block;
  margin-right: 2rem;
  font-size: .16rem;
}

.btn {
  width: 1.3333rem;
  height: .4267rem;
  margin-top: .4533rem;
  margin-right: .2667rem;
  line-height: .4267rem;
  font-size: .1867rem;
  border-radius: .0667rem;
  text-align: center;
  background-color: #3ea4ee;
  color: #fff;
}
</style>