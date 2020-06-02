<template>
  <div class="index">
    <img src="@/assets/logo.png" class="big_logo" />
    <div class="content">
      <el-container class="icontainer">
        <el-main id="el-main">
          <!-- 头部导航 -->
          <el-row>
            <HeaderNav></HeaderNav>
          </el-row>
          <!-- Cards -->
          <el-row>
            <Cards></Cards>
          </el-row>
          <!-- 下部分，列布局 -->
          <el-row type="flex" justify="space-between" style="marginTop:30px;">
            <el-col style="width:40%;" id="el-col-1" >
              <!-- 业务菜单 -->
              <Services></Services>
            </el-col>
            <el-col  class="middle-bottom">
              <!-- 当前 -->
              <Current></Current>
              <!-- 统计图表 -->
              <Savings style="marginTop:15px;" ref="Savings"></Savings>
            </el-col>
          </el-row>
          <div class="scrollbar"></div>
        </el-main>
        <el-aside style="width:300px">
          <!-- 右边信息模块 -->
          <RightNav ref="RightNav"></RightNav>
        </el-aside>
      </el-container>
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import RightNav from "@/components/RightNav.vue";

import Cards from "@/components/Cards.vue";
import Services from "@/components/Services.vue";
import Current from "@/components/Current.vue";
import Savings from "@/components/Savings.vue";

export default {
  name: "Index",
  components: {
    HeaderNav,
    RightNav,
    Cards,
    Services,
    Current,
    Savings
  },
  data() {
    return {
      timer: false
    };
  },
  mounted() {
    // 监听窗口变化，重新绘制图表
    window.onresize = () => {
      // 避免刷新频繁
      if (!this.timer) {
        this.$refs.RightNav.$refs.PieChart.resizeChart();
        this.$refs.Savings.$refs.LineChart.resizeChart();
        setTimeout(() => {
          this.timer = false;
        }, 200);
      }
    };
  },
  destroyed() {
    window.removeEventListener("resize");
  }
};
</script>

<style scoped>
.index {
  padding: 20px 10px;
  display: flex;
  background-image: linear-gradient(#fdebea, #fdebea);
  position: relative;
}
.index .big_logo {
  position: absolute;
  bottom: -0;
  left: -0;
  transform: rotate(180deg);
  width: 500px;
  z-index: 1;
}
.index .content {
  width: 1380px;
  border-radius: 48px;
  box-sizing: border-box;
  background-image: -webkit-linear-gradient(#fddada, #fac0c0);
  background-image: -moz-linear-gradient(#fddada, #fac0c0);
  background-image: linear-gradient(#fddada, #fac0c0);
  padding: 18px;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 10px 10px 5px #fbcbc9;
  z-index: 9;
}
.index .content .icontainer {
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 48px;
  width: 100%;
  height: 100%;
  background-color: #fefefe;
}
.index .content .el-aside {
  overflow: visible;
}
.index .content .icontainer .el-main {
  min-width: 830px;
  min-height: 730px;
}
.index .content .icontainer #el-col-1{
  position: relative;
  margin-right: 15px;
}
.index .content .icontainer .middle-bottom{
  margin-left: auto;
  margin-right: 0;
}

/* 滚动条 */
.index .content .icontainer .el-main::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.index .content .icontainer .el-main::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #ccc;
}
.index .content .icontainer .el-main::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #ffffff;
}
</style>