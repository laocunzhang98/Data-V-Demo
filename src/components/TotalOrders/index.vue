<template>
  <div>
    <common-card title="累计订单量" value="1,212,002">
      <template>
        <v-chart :options="getOptions()"></v-chart>
        <!-- <div id="total-order-chart" ref="chart"></div> -->
      </template>
      <template v-slot:footer>
        <span>昨日订单量</span>
        <span class="emphasis">￥39,165</span>
      </template>
    </common-card>
  </div>
</template>
<script>
import commonCardMixin from "../../mixins/commonCardMixin.js";
export default {
  mixins: [commonCardMixin],
  mounted() {
    
    // const chart = this.$echarts.init(chartDom,"light",{renderer:'svg'})
  },
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: "category",
          show: false,
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "line",
            data: [
              628,
              432,
              220,
              534,
              790,
              438,
              220,
              328,
              532,
              328,
              843,
              690,
              530,
              220,
              620,
            ],
            lineStyle: {
              width: 0,
            },
            itemStyle: {
              opacity: 0,
            },
            areaStyle: {
              color: "purple",
            },
            smooth: true,
          },
        ],
        grid: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
#total-order-chart {
  height: 100%;
  width: 100%;
}
</style>