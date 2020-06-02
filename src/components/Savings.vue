<template>
  <!-- 统计部分 -->
  <div class="Savings">
    <ModelTitle title="Savings" descript="View all"></ModelTitle>

    <div class="line">
      <LineChart ref="LineChart"></LineChart>
    </div>
    <div class="list">
      <div class="item" v-for="(item,index) in list">
        <span>{{item.label}}</span>
        <span>${{item.value | moneyFilter}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ModelTitle from "@/components/ModelTitle.vue";
import LineChart from "@/components/LineChart.vue";

export default {
  name: "Savings",
  components: {
    ModelTitle,
    LineChart
  },
  data() {
    return {
      list: [
        {
          label: "Total",
          value: "100.09"
        },
        {
          label: "This Week",
          value: "2567.89"
        },
        {
          label: "This month",
          value: "123.09"
        }
      ]
    };
  }
};
</script>

<style scoped>
.Savings {
  width: 660px;
  height: 240px;
}
.Savings .line {
  float: left;
  width: 380px;
  height: 220px;
  margin-bottom: 30px;
}
.Savings .list {
  float: right;
}

.Savings .list .item {
  font-size: 20px;
  line-height: 40px;
  text-align: left;
  color: #afb1b8;
}
.Savings .list .item span:nth-child(2) {
  margin-left: 30px;
  float: right;
  color: #14233c;
  font-weight: bolder;
}

/* @media screen and (max-width: 1100px) {
  .Savings .list {
    display: none;
  }
} */
</style>