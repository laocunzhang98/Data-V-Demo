<template>
  <div>
    <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 12px;
  color: #999;
}
.value {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px;
}
.chart {
  height: 50px;
}
.line {
  margin: 10x 0;
  border-top: 1px solid #ccc;
}
.total {
  color: #666;
  font-size: 12px;
}
</style>
<style lang="scss">
.emphasis {
  margin-left: 5px;
  color: #000;
  font-weight: 700;
}
.increase {
  width: 0;
  height: 0;
  margin: 0 0 4px 5px;
  border-width: 4px;
  border-color: transparent transparent red transparent;
  border-style: solid;
}
.decrease {
  width: 0;
  height: 0;
  margin: 4px 0 0 5px;
  border-width: 4px;
  border-color: green transparent transparent transparent;
  border-style: solid;
}
</style>