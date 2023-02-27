<template>
  <div>
    <div v-for="item in itemParams.info.set" class="set">
      <div class="key">{{ item.key }}</div>
      <div class="value">{{ item.value }}</div>
    </div>

    <div v-for="tables in itemParams.rule.tables[0]">
      <div class="tables">
        <div v-for="item in tables" class="tablesItem">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.set {
  display: flex;
  padding: 5px 0;
  border-bottom: 2px solid #eee;
}
.value {
  flex: 1;
  color: pink;
}

.key {
  width: 20%;
  text-align: center;
}

.tables {
  display: flex;
  padding: 5px 0;
  border-bottom: 2px solid #eee;
}

.tables .tablesItem {
  flex: 1;
  text-align: center;
}
</style>