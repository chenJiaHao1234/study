<template>
  <div class="detail">
    <div class="btn">数据汇总</div>
    <ul class="detailed">
      <li>下载素材</li>
      <li>当前资金：{{123}}</li>
      <li>当前进程: 第一季度准备期</li>
    </ul>

    <ul class="quarter">
      <li>
        第一季度
        <div class="angle1"></div>
        <div class="angle2"></div>
      </li>
      <li>
        第二季度
        <div class="angle1"></div>
        <div class="angle2"></div>
      </li>
      <li>
        第三季度
        <div class="angle1"></div>
        <div class="angle2"></div>
      </li>
      <li>
        第四季度
        <div class="angle1"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.detail {
  position: relative;
  height: .8rem;
  background-color: #fff;
  line-height: .8rem;
  box-shadow: 0px .04rem .1333rem 0px rgba(0, 0, 0, 0.2);
  z-index: 9;
}

.detail .btn {
  position: absolute;
  top: .1867rem;
  left: .1867rem;
  width: 1.3333rem;
  height: .4267rem;
  /* margin-top: 14px; */
  /* margin-left: 14px; */
  line-height: .4267rem;
  font-size: .1867rem;
  border-radius: .0667rem;
  text-align: center;
  background-color: #3ea4ee;
  color: #fff
}

.detail .detailed {
  position: absolute;
  left: 2rem;
}

.detail .detailed li {
  list-style: none;
  float: left;
  /* width: 200px; */
  margin-right: .2667rem;
  font-size: .16rem;
  /* background-color: pink; */
}

.detail .quarter {
  position: absolute;
  right: 1.3333rem;
}

.detail .quarter li {
  position: relative;
  list-style: none;
  float: left;
  width: 1.0667rem;
  height: .32rem;
  margin-top: .24rem;
  margin-right: .16rem;
  padding-left: .12rem;
  text-align: center;
  line-height: .32rem;
  font-size: .16rem;
  border: .0133rem solid black;
}

.angle1,
.angle2 {
  position: absolute;
  
  width: .22rem;
  height: .22rem;
  border-top: .0133rem solid black;
  border-right: .0133rem solid black;
  transform: rotate(45deg);
  background-color: #fff;
}

.angle1 {
  top: .04rem;
  left: -0.12rem;
}

.angle2 {
  top: .04rem;
  left: .9467rem;
  z-index: 9;
}
</style>