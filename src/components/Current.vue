<template>
<!-- 当前交易模块 -->
  <div class="Current">
    <ModelTitle title="Current" descript="View all"></ModelTitle>

    <div class="list">
      <div v-for="(item,index) in list" class="item">
        <div>{{item.number}}</div>
        <div></div>
        <div>${{item.money | moneyFilter}}</div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ModelTitle from "@/components/ModelTitle.vue";

export default {
  name: "Current",
  components: {
    ModelTitle
  },
  data() {
    return {
      list: [
        {
          number: "1234560159874",
          money: "2200.01"
        },
        {
          number: "1023547896548",
          money: "1300.89"
        },
        {
          number: "1035487954875",
          money: "1848.11"
        }
      ]
    };
  }
};
</script>


<style scoped>
.Current .list .item {
  font-size: 20px;
  line-height: 40px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.Current .list .item div:nth-child(1) {
  color: #afb1b8;
  margin-right: 15px;
}
.Current .list .item div:nth-child(2) {
  flex: 1 1 auto;
  border: 1px dashed #afb1b8;
}
.Current .list .item div:nth-child(3) {
  color: #14233c;
  margin-left: 15px;
  margin-right: 0;
  font-weight: bolder;
  text-align: right;
}
</style>