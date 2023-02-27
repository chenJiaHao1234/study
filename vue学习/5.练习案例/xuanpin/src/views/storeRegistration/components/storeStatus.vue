<template>
  <div class="storeStatus">
    <div 
    class="title"
    v-for="(item, index) in titles" 
    @click="isclick(index)"
    :class="{bgc: active === index}">
    {{item}}
  </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    },
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        isclick(index) {
            this.active = index
        }
    },
    
    
}
</script>

<style scoped>

.title {
    /* position: absolute; */
    width: 1.3333rem;
    height: .4rem;
    font-size: .16rem;
    padding-left: .1333rem;
    line-height: .4rem;
    margin: .1333rem .1333rem;
}

.bgc {
    background-color: black;
    background-color: #e7ebec;
}
</style>