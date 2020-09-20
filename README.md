# canteen-datav开发回顾

![image](https://github.com/laocunzhang98/Data-V-Demo/blob/master/image/dataV.png)
## 基于vue-cli 脚手架搭建项目 划分目录结构

### 按需引入element-UI 创建card通用组件CommonCard

```javascript
npm i element-ui -S
```



```javascript
import Vue from 'vue'
import { Card, Row, Col, Menu, MenuItem, RadioButton, RadioGroup, DatePicker, Table, TableColumn, Pagination } from 'element-ui'

Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)

```

### 1.累计销售额
![image](https://github.com/laocunzhang98/Data-V-Demo/blob/master/image/累计销售额.png)

- 引入CommonCard

- css创建上三角与下三角

### 2.累计订单量
![image](https://github.com/laocunzhang98/Data-V-Demo/blob/master/image/累计订单量.png)

- 引入vue-echarts  

- options 同echarts配置相同

  ```javascript
   npm i vue-echarts -S
  ```

```javascript
<v-chart :options="getOptions()"></v-chart>
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
            type: "line", //折线图
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
            areaStyle: { //填充颜色
              color: "purple",
            },
            smooth: true, //平滑处理
          },
        ],
        grid: { //容器布局
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      };
    },
  },
};
```

### 3.今日用户交易量
![image](https://github.com/laocunzhang98/Data-V-Demo/blob/master/image/今日用户交易量.png)

- 使用echarts原生方法 可以同（2.累计订单量）对比

```javascript
const chartDom = document.getElementById("today-users-chart");
    if (chartDom) {
      const chart = this.$echarts.init(chartDom);

      chart.setOption({
          ...基本配置相同
      })
```

### 4.累计用户数
![image](https://github.com/laocunzhang98/Data-V-Demo/blob/master/image/累计用户数.png)
- 两个重叠横向柱状图

  ```javascript
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
              stack: "总量",// stack相同
              itemStyle: {
                color: "#eee",
              },
            },
  ```

  

- custom自定图案

  ```javascript
  {
              type:"custom",
              data:[200],
              stack:"总量",
              renderItem:(params,api)=>{
                console.log(params);
                const value = api.value(0)
                const endPoint = api.coord([value,0])//获取位置
                
                 return {
                  type: 'group',//组合
                  position: endPoint,
                  children: [{
                    type: 'path',
                    shape: {
                      d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',//svg
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'//填充色
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
  ```

### 5.销售额
![image](https://github.com/laocunzhang98/Data-V-Demo/blob/master/image/销售额.png)

- el-menu el-radio-group 的配置

- v-chart的柱状图配置

  ```javascript
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
  ```

### 6.关键词搜索
![image](https://github.com/laocunzhang98/Data-V-Demo/blob/master/image/关键词搜索.png)
```javascript
searchUserOption: {
        xAxis: {
          type: "category",
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "line",
            areaStyle: {
              color: "rgba(95,187,255,.5)",
            },
            data: [100, 150, 200, 250, 200, 250, 100, 250],
            lineStyle: {
              color: "rgb(95,187,255)",
            },
            itemStyle: {
              opacity: 0,
            },
            smooth: true,
          },
        ],
        grid: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        },
      },
```

- el-table 实现表格展示

### 7.分类销售排行
![image](https://github.com/laocunzhang98/Data-V-Demo/blob/master/image/分类销售排行.png)

- echarts饼图的应用

  ```javascript
  categoryOptions = {
          title: [
            {
              text: "品类分布",
              textStyle: {
                fontSize: 14,
                color: "#666",
              },
              left: 20,
              top: 20,
            },
            {
              text: "累计订单量",
              subtext: 320,
              x: "34.5%",
              y: "42.5%",
              textStyle: {
                fontSize: 14,
                color: "#999",
              },
              subtextStyle: {
                fontSize: 28,
                color: "#333",
              },
              textAlign: "center",
            },
          ],
          series: [
            {
              name: "品类分布",
              type: "pie",
              data: mockData,
              label: {
                normal: {
                  show: true,
                  position: "outter",
                  formatter: function (params) {
                    return params.data.legendname;
                  },
                },
              },
              center: ["35%", "50%"],
              radius: ["45%", "60%"],//实现环形图
              itemStyle:{
                borderWidth:4,
                borderColor:"#fff"
              }
            },
          ],
          legend: {
            type: "scroll",
            orient: "vertical",
            height: 245,
            left: "70%",
            top: "middle",
            textStyle: {
              color: "#BcBcBc",
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) { // 鼠标交互效果
              const str =
                params.seriesName +
                "<br/>" +
                params.marker +
                params.data.legendname +
                "<br/>" +
                params.marker +
                "数量:" +
                params.data.value +
                "<br/>" + 
                params.marker +
                '占比:'+params.data.percent;
              return str
            },
          },
        };
  ```

### 8.地图销售数据大盘
![image](https://github.com/laocunzhang98/Data-V-Demo/blob/master/image/销售大盘.png)

- 下载并安装v-charts插件

  ```javascript
  npm i v-charts echarts -S
  
  import Vue from 'vue'
  import VCharts from 'v-charts'
  import 'v-charts/lib/style.css'
  
  Vue.use(VCharts)
  ```

- 注册百度地图开发者账号 获取key

  ```javascript
  // 基本配置
  <template>
    <ve-bmap
      :settings="chartSettings"
      :series="chartSeries"
      :tooltip="chartTooltip">
    </ve-bmap>
  </template>
  
  <script>
    export default {
      data () {
        this.chartSettings = {
          key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK', // 开发者的key
          bmap: {
            center: [120, 30],
            zoom: 14,
            roam: true,
            mapStyle: {}
          }
        }
        this.chartTooltip = { show: true }
        return {
          chartSeries: [
            {
              type: 'scatter',
              coordinateSystem: 'bmap',
              data: [
                [120, 30, 1] // 经度，维度，value，...
              ]
            }
          ]
        }
      }
    }
  </script>
  ```

  

### 9.水球图
![image](https://github.com/laocunzhang98/Data-V-Demo/blob/master/image/水球图.png)

- echarts官方并未给我们提供水球图 我们需要下载vue-liquidfill插件

  ```javascript
  // liquidfill源码也是在echarts.serier的基础上添加了liquidFill
  var completeDimensions = require('echarts/lib/data/helper/completeDimensions');
  var echarts = require('echarts/lib/echarts');
  
  echarts.extendSeriesModel({
  
      type: 'series.liquidFill',
  
      visualColorAccessPath: 'textStyle.normal.color',
  
      optionUpdated: function () {
          var option = this.option;
          option.gridSize = Math.max(Math.floor(option.gridSize), 4);
      },
  
      getInitialData: function (option, ecModel) {
          var dimensions = completeDimensions(['value'], option.data);
          var list = new echarts.List(dimensions, this);
          list.initData(option.data);
          return list;
      },
  
      defaultOption: { // 默认配置
          color: ['#294D99', '#156ACF', '#1598ED', '#45BDFF'],
          center: ['50%', '50%'],
          radius: '50%',
          amplitude: '8%',
          waveLength: '80%',
          phase: 'auto',
          period: 'auto',
          direction: 'right',
          shape: 'circle',
  
          waveAnimation: true,
          animationEasing: 'linear',
          animationEasingUpdate: 'linear',
          animationDuration: 2000,
          animationDurationUpdate: 1000,
  
          outline: {
              show: true,
              borderDistance: 8,
              itemStyle: {
                  color: 'none',
                  borderColor: '#294D99',
                  borderWidth: 8,
                  shadowBlur: 20,
                  shadowColor: 'rgba(0, 0, 0, 0.25)'
              }
          },
  
          backgroundStyle: {
              color: '#E3F7FF'
          },
  
          itemStyle: {
              opacity: 0.95,
              shadowBlur: 50,
              shadowColor: 'rgba(0, 0, 0, 0.4)'
          },
  
          label: {
              show: true,
              color: '#294D99',
              insideColor: '#fff',
              fontSize: 50,
              fontWeight: 'bold',
  
              align: 'center',
              baseline: 'middle',
              position: 'inside'
          },
  
          emphasis: {
              itemStyle: {
                  opacity: 0.8
              }
          }
      }
  });
  
  ```

### 10.词云图
![image](https://github.com/laocunzhang98/Data-V-Demo/blob/master/image/词云图.png)
- echarts官方并未给我们提供水球图 我们需要下载vue-wordcloud插件

- 词云图源码实现同水球图相似

  ```javascript
  defaultOption: {
  
          maskImage: null,
  
          // Shape can be 'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
          shape: 'circle',
  
          left: 'center',
  
          top: 'center',
  
          width: '70%',
  
          height: '80%',
  
          sizeRange: [12, 60],
  
          rotationRange: [-90, 90],
  
          rotationStep: 45,
  
          gridSize: 8,
  
          drawOutOfBound: false,
  
          textStyle: {
              normal: {
                  fontWeight: 'normal'
              }
          }
      }
  ```

  ### 通过axios实现接口调用

  ```javascript
  // request.js
  import axios from 'axios'
  
  const service = axios.create({
    baseURL: 'https://ww.learn.cn',
    timeout: 5000
  })
  // 拦截器
  service.interceptors.response.use(
    response => {
      if (response.status === 200 && response.data) {
        console.log(response.data)
        return response.data
      } else {
        return Promise.reject(new Error('请求失败'))
      }
    },
    error => {
      return Promise.reject(error)
    }
  )
  ```

### 处理数据的几种方式

- 由于组件化的开发方式 我们需要多层props传递数据 
- 我们还可以使用vuex实现数据存储
- 我们还可以使用provide  reject
