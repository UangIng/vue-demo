<template>
<!-- 卡列表 -->
  <div class="Cards">
    <ModelTitle title="Cards" descript="View all"></ModelTitle>
    <div class="list">
      <Card
        v-for="(item,index) in cards"
        :money="item.money"
        :number="item.number"
        :color="item.color"
      ></Card>
      <CardEmpty></CardEmpty>
      <div class="scrollbar"></div>
    </div>
  </div>
</template>

<script>
import ModelTitle from "@/components/ModelTitle.vue";
import Card from "@/components/Card.vue";
import CardEmpty from "@/components/CardEmpty.vue";
export default {
  name: "Cards",
  components: {
    ModelTitle,
    Card,
    CardEmpty
  },
  data() {
    return {
      cards: [
        {
          money: "2200",
          number: "1234568798458732",
          color: "#FF4D56"
        },
        {
          money: "1300.89",
          number: "1254789652365467",
          color: "#0E809A"
        }
      ]
    };
  }
};
</script>

<style scoped>
.Cards {
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
}
.Cards .list {
  text-align: left;
  white-space: nowrap;
  overflow-x: auto;
}
.Cards .list::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* 滚动条 */
.Cards .list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #ccc;
}

.Cards .list::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #ffffff;
}
</style>