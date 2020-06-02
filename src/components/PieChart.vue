<template>
  <!-- 基础饼图组件，不用全局引入，同时方便调用 -->
  <div class="PieChart"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/pie");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  name: "PieChart",
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
      let myChartContainer = document.getElementById("pie");
      myChartContainer.style.width =
        1380 - document.getElementById("el-main").offsetWidth;
    },
    draw() {
      this.resize();
      let myChartContainer = document.getElementById("pie");
      this.mychart = echarts.init(myChartContainer);
      // 绘制图表
      this.mychart.setOption({
        series: [
          {
            type: "pie",
            center: ['50%', '50%'],
            radius: ["70%", "90%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "center",
                formatter: function(argument) {
                  var html;
                  html = "{a|$5,349}\r\n\r\n" + "{b|Balance}";
                  return html;
                },
                textStyle: {
                  fontSize: 18,
                  color: "#000"
                },
                rich: {
                  a: {
                    color: "#14233C",
                    fontSize: 26,
                    lineHeight: 20
                  },
                  b: {
                    color: "#CDCDD0",
                    fontSize: 14,
                    lineHeight: 20
                  }
                }
              },
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },

            data: [
              { value: 25, name: "直接访问" },
              { value: 25, name: "邮件营销" },
              { value: 25, name: "联盟广告" },
              { value: 25, name: "" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              normal: {
                color: function(params) {
                  //自定义颜色
                  var colorList = ["#ffffff", "#14233C", "#0E809A", "#FF2934"];
                  return colorList[params.dataIndex];
                }
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
.PieChart {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>