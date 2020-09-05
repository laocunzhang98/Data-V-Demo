<template>
  <div>
    <common-card title="今日用户交易量" value="81,024">
      <template>
        <div id="today-users-chart"></div>
      </template>
      <template v-slot:footer>
        <span>退货率</span>
        <span class="emphasis">5.14%</span>
      </template>
    </common-card>
  </div>
</template>
<script>
import commonCardMixin from "../../mixins/commonCardMixin.js";
export default {
  mixins: [commonCardMixin],
  mounted() {
    const chartDom = document.getElementById("today-users-chart");
    if (chartDom) {
      const chart = this.$echarts.init(chartDom);

      chart.setOption({
        color:["#3398DB"],
        series: [
          {
            type: "bar",
            data: [
              418,
              82,
              288,
              334,
              390,
              338,
              220,
              150,
              82,
              280,
              134,
              290,
              330,
              150,
            ],
            barWidth:"60%"
          },
        ],
        xAxis: {
          type: "category",
          data: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
          ],
          show:false,
          // boundaryGap: false
        },
        yAxis: {
          show:false
        },
        grid: {
          top:0,
          bottom:0,
          left:0,
          right:0
        },
      });
    }
  },
};
</script>

<style lang="scss" scoped>
#today-users-chart {
  height: 100%;
  width: 100%;
}
</style>