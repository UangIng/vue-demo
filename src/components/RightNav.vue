<template>
  <!-- 用户信息组件 -->
  <div class="RightNav">
    <!-- 顶部 -->
    <div class="top">
      <span class="notice">
        <span class="point"></span>
        <i class="el-icon-bell" style="font-size:20px;" />
      </span>
      <span class="info">
        <span style="margin-right:20px;">{{name}}</span>
        <img v-bind:src="headerUrl" />
      </span>
    </div>

    <!-- 图表 -->
    <div class="pie" id="pie">
      <PieChart ref="PieChart"></PieChart>
    </div>

    <!-- 列表 -->
    <div class="list">
      <div class="head">
        <span>Transactions</span>
        <select>
          <option v-for="(item,index) in options">{{item.label}}</option>
        </select>
      </div>

      <div class="item" v-for="(item,index) in list">
        <img :src="require('../assets/'+ item.icon)" />
        <span>{{item.label}}</span>
        <span v-if="item.state==false" style="color:red;">-${{item.money|moneyFilter}}</span>
        <span v-if="item.state==true" style="color:blue;">+${{item.money|moneyFilter}}</span>
      </div>
    </div>
    <!-- 按钮 -->
    <div class="button">
      <span>Transfer Money</span>
      <img src="@/assets/arrow_right.png" />
    </div>
    <!-- 消息 -->
    <img src="@/assets/message.png" class="message" />
  </div>
</template>

<script>
import PieChart from "@/components/PieChart.vue";

export default {
  name: "RightNav",
  components: {
    PieChart
  },
  data() {
    return {
      name: "Anastsia",
      headerUrl:
        "https://preview.qiantucdn.com/58pic/35/57/35/auto_27h58PICdWxbchc4WCK4e_PIC2018.jpg!qt324new_nowater",
      options: [
        {
          value: "Today",
          label: "Today"
        },
        {
          value: "Tomorrow",
          label: "Tomorrow"
        }
      ],
      list: [
        {
          icon: "icon_1.png",
          label: "Dribbble Pro Plan",
          money: 100,
          state: false
        },
        {
          icon: "icon_2.png",
          label: "Adidas Refund",
          money: 230,
          state: true
        },
        {
          icon: "icon_3.png",
          label: "Wacom LCD",
          money: 3000,
          state: false
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.RightNav {
  position: relative;
  border-radius: 48px;
  background-color: #fcfcfc;
  width: 100%;
  height: 100%;
  z-index: 99;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1),
    2px 0px 15px 0px rgba(0, 0, 0, 0.1);
}

.RightNav .top {
  height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  padding-top: 40px;
}

.RightNav .top .notice {
  position: relative;
  margin-left: 38px;
}
.RightNav .top .info {
  margin-left: auto;
  margin-right: 38px;
  display: flex;
  align-items: center;
}
.RightNav .top .info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.RightNav .pie {
  width: 100%;
  height: 230px;
  margin-top: 50px;
}

.RightNav .list .head {
  color: #abadb4;
  text-align: left;
  padding: 0 38px;
  font-size: 16px;
}
.RightNav .list .head select {
  float: right;
  font-size: 16px;
  color: #abadb4;
  border: none;
  outline: none;
}
.RightNav .list .head select option {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  outline: none;
}
.RightNav .list .head select option:hover {
  color: #ffffff;
  background-color: #ffffff;
  outline: none;
  border: 0;
}
.RightNav .list .item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 15px 0;
}
.RightNav .list .item img {
  width: 56px;
  height: 56px;
}
.RightNav .list .item span:nth-child(2) {
  font-weight: bold;
}
.RightNav .button {
  background-color: #ff4d56;
  width: 220px;
  height: 50px;
  line-height: 50px;
  color: #ffffff;
  border-radius: 28px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
}
.RightNav .button span {
  margin-left: 26px;
}
.RightNav .button img {
  margin-left: auto;
  margin-right: 26px;
}
.RightNav .message {
  position: absolute;
  right: 30px;
  bottom: 32px;
}
</style>