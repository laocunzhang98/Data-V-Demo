<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="menu-wrapper" size="small">
          <el-menu mode="horizontal" :default-active="'1'" class="sales-view-menu">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <el-date-picker
              type="daterange"
              v-model="date"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              size="small"
            ></el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :options="chartOption"></v-chart>
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item" v-for="item in rankData" :key="item.no">
              <div class="list-item-no" :class="+item.no <=3 ? 'top-no': ''">{{item.no}}</div>
              <div class="list-item-name">{{item.name}}</div>
              <div class="list-item-money">{{item.money}}</div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioSelect: "今日",
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      chartOption: {
        title: {
          text: "年度销售额",
          textStyle: {
            fontSize: 12,
            color: "#666",
          },
          left: 25,
          top: 20,
        },
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: "#999",
            },
          },
          axisLine:{
            lineStyle:{
              color:"#999"
            }
          },
          axisLabel:{
            color:"#333"
          }
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
              color: "#eee",
            },
          },
        },
        series: [
          {
            name: "sales",
            type: "bar",
            barWidth: "35%",
            data: [
              200,
              250,
              300,
              350,
              300,
              250,
              200,
              200,
              250,
              300,
              350,
              300,
              250,
              200,
            ],
            itemStyle: {
              color: "#3398DB",
            },
          },
        ],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50,
        },
      },

      rankData: [
        {
          no: 1,
          name: "麦当劳",
          money: "323.234",
        },
        {
          no: 2,
          name: "麦当劳",
          money: "323.234",
        },
        {
          no: 3,
          name: "麦当劳",
          money: "323.234",
        },
        {
          no: 4,
          name: "麦当劳",
          money: "323.234",
        },
        {
          no: 5,
          name: "麦当劳",
          money: "323.234",
        },
        {
          no: 6,
          name: "麦当劳",
          money: "323.234",
        },
        {
          no: 7,
          name: "麦当劳",
          money: "323.234",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    display: flex;
    position: relative;
    .sales-view-menu {
      height: 50px;
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 100%;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      // justify-content: flex-end;
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .echarts {
      flex: 0, 0, 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      margin-bottom: 20px;
      overflow: hidden;
      .sales-view-title {
        // margin-top: 20px;
        font-size: 16px;
        font-weight: 500;
        color: #666;
      }
      .list-item {
        display: flex;
        margin-top: 15px;
        align-items: center;
        font-size: 12px;
        .list-item-no {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          color: #333;
          &.top-no {
            background: #000;
            border-radius: 50%;
            color: #fff;
            font-weight: 500;
          }
        }
        .list-item-name {
          margin-left: 10px;
          color: #333;
        }
        .list-item-money {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
</style>
