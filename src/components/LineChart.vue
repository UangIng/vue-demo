<template>
  <!-- 基础折线图组件，不用全局引入，同时方便调用 -->
  <div class="LineChart" id="line"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入折线图组件
require("echarts/lib/chart/line");

export default {
  name: "LineChart",
  props: {},
  data() {
    return {
      mychart: null
    };
  },
  mounted() {
    this.draw();
  },
  methods: {
    resize() {
      let myChartContainer = document.getElementById("line");
      myChartContainer.style.width =
        document.getElementById("el-main").offsetWidth - 300;
    },
    draw() {
      this.resize();
      let myChartContainer = document.getElementById("line");
      this.mychart = echarts.init(myChartContainer);

      // 绘制图表
      this.mychart.setOption({
        grid: {
          x: 30,
          y: 20,
          x2: 20,
          y2: 20 //距离下边的距离
        },
        xAxis: {
          type: "category",
          data: ["$10", "$20", "$30", "$40", "$50"],
          axisTick: {
            //刻度线
            show: false
          },
          splitLine: {
            //网格线
            show: false
          }
        },
        yAxis: {
          type: "value",
          // 可以省略，可以指定，也可以通过计算得出
          min: 0,
          max: 100,
          axisLine: {
            show: false //y轴线消失
          },
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            data: [2, 10, 35, 35, 50, 25, 70],
            type: "line",
            smooth: true,
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(46,157,182,1)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(75,202,231,1)" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          }
        ]
      });
    },
    resizeChart() {
      this.mychart.resize();
    }
  }
};
</script>

<style scoped>
.LineChart {
  width: 100%;
  height: 100%;
}
</style>