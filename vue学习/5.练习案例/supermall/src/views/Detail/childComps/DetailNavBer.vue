<template>
  <nav-bar class="navbar">
    <div slot="left" @click="returnUpper()"><div class="arrowhead"></div></div>
    <div slot="center" class="title">
      <div
        v-for="(item, index) in title"
        class="titleItem"
        @click="itemClick(index)"
        :class="{clickTitleItem: titleIndex === index}"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import navBar from "@/components/common/navbar/navBar.vue";
export default {
  data() {
    return {
        titleIndex: 0
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  components: {
    navBar,
  },

  methods: {
    itemClick(index) {
        this.titleIndex = index
        this.$emit('reference', index)
        
    },

    returnUpper() {
        this.$router.push('/home')
    }
  },
};
</script>

<style scoped>
.navber {
  color: gray;
}
.arrowhead {
  width: 20px;
  height: 20px;
  border-top: 2px solid gray;
  border-left: 2px solid gray;
  transform: rotate(-45deg);
  margin: 15px auto;
}

.title {
  display: flex;
}

.titleItem {
  flex: 1;
  color: black;
  font-size: 14px;
}

.clickTitleItem {
    color: pink
}
</style>