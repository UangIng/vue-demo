<template>
<!--空卡 -->
  <div class="CardEmpty">
    <img src="@/assets/add.png" />
    <span class="text">Add New Card</span>
  </div>
</template>

<script>
export default {
  name: "CardEmpty"
};
</script>

<style scoped>
.CardEmpty {
  width: 300px;
  height: 175px;
  display: inline-block;
  border-radius: 22px;
  margin-left: 5px;
  margin-right: 10px;
  position: relative;
  background-color: #f8f8f8;
}
.CardEmpty img{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 55px;
}
.CardEmpty .text {
  position: absolute;
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
  color: #c6c7cc;
}
</style>