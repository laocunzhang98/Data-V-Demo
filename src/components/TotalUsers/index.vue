<template>
  <common-card title="累计用户数" value="1,081,014">
    <template>
      <div id="total-users-chart"></div>
    </template>
    <template v-slot:footer>
      <div class="total-user-footer">
        <span>日同比</span>
        <span class="emphasis">8.14%</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="emphasis">3.14%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from "../../mixins/commonCardMixin";

export default {
  mixins: [commonCardMixin],
  mounted() {
    const chartDom = document.getElementById("total-users-chart");
    
    if (chartDom) {
      console.log(chartDom);
      const chart = this.$echarts.init(chartDom);
      chart.setOption({
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        xAxis: {
          type: "value",
          show: false,
        },
        yAxis: {
          type: "category",
          show: false,
        },
        series: [
          {
            type: "bar",
            data: [200],
            stack: "总量",
            barWidth: "20%",
            itemStyle: {
              color: "#45c946",
            },
          },
          {
            type: "bar",
            data: [250],
            stack: "总量",
            itemStyle: {
              color: "#eee",
            },
          },
          {
            type:"custom",
            data:[200],
            stack:"总量",
            renderItem:(params,api)=>{
              console.log(params);
              const value = api.value(0)
              const endPoint = api.coord([value,0])
              
               return {
                type: 'group',
                position: endPoint,
                children: [{
                  type: 'path',
                  shape: {
                    d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                    x: -5,
                    y: -20,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                }, {
                  type: 'path',
                  shape: {
                    d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                    x: -5,
                    y: 10,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                }]
              }
            }
          },
        ],
      });
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#total-users-chart {
  width: 100%;
  height: 100%;
}

.total-user-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
