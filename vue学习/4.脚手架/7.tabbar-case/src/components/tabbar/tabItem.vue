<template>
    <div class="tab-item" @click="isclick()" >
        <div v-if="!isActive">
          <slot name="item-icon"></slot>
        </div>

        <div v-else>
          <slot name="item-icon-active"></slot>
        </div>

        <div :style="activeStyle">
          <slot name="item-text"></slot>
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
        link: {
        type: String,
        default: '',
        },
        activecolor: {
            type: String,
            default: 'pink',
        }
    },
    methods: {
        isclick() {
            if(this.$route.path !== this.link) {
                this.$router.push(this.link)
            }
            console.log(this.$route.path);
        },
        
        
         
    },
    computed: {
        isActive() {
            return this.$route.path == this.link
        },
        activeStyle() {
            if(this.isActive) {
                return {color: this.activecolor}
            }
        }
    }
}
</script>

<style>
.tab-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
    vertical-align: middle;
}

.tab-item img {
    margin-top: 3px;
    width: 30px;
}

.text {
    color: pink;
}
</style>