<template>
<!-- 每一张卡 -->
  <div class="Card" :style="{backgroundColor:color}">
    <span class="text text1">Available balance</span>
    <span class="text money">${{money | moneyFilter}}</span>
    <span class="text number">{{number | hideMiddle}}</span>
    <span class="text text2">Monzo</span>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["money", "number", "color"]
};
</script>

<style scoped>
.Card {
  width: 300px;
  height: 175px;
  display: inline-block;
  border-radius: 22px;
  margin-left: 5px;
  margin-right: 10px;
  position: relative;
}
.Card .text {
  position: absolute;
  left: 30px;
}
.Card .text1 {
  top: 22px;
}
.Card .text2 {
  bottom: 22px;
  color: #ffffff;
  font-size: 20px;
}
.Card .money {
  color: #ffffff;
  top: 42px;
}
.Card .number{
    top: 100px;
}
</style>