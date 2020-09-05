<template>
  <v-chart :options="data"></v-chart>
</template>

<script>
export default {
  data() {
    return {
      data: {
        xAxis: {
          type:"category"
        },
        yAxis: {},
        series: [{
          type:"line",
          data:[100,200,400,300]
        }],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.echarts{
  width: 100%;
  height: 100%;
}
</style>
