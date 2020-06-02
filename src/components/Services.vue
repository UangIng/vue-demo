<template>
  <!-- 主要业务 -->
  <div class="Services">
    <ModelTitle title="Main Services" descript="View all"></ModelTitle>
    <div class="menu">
      <img src="@/assets/menu1.png" />
      <span>Transactions</span>
    </div>
    <div class="menu">
      <img src="@/assets/menu2.png" />
      <span>Transactions</span>
    </div>
    <div class="menu">
      <img src="@/assets/menu3.png" />
      <span>Transactions</span>
    </div>
    <div class="menu">
      <img src="@/assets/menu4.png" />
      <span>Transactions</span>
    </div>
    <div class="menu">
      <img src="@/assets/menu5.png" />
      <span>Transactions</span>
    </div>
    <div class="menu">
      <img src="@/assets/menu6.png" />
      <span>Transactions</span>
    </div>
  </div>
</template>

<script>
import ModelTitle from "@/components/ModelTitle.vue";

export default {
  name: "Services",
  components: {
    ModelTitle
  }
};
</script>

<style scoped>
.Services {
  width: 100%;
  /* width: 300px; */
}
.Services .menu {
  width: 100px;
  height: 100px;
  margin: 5px 10px;
  display: inline-block;
  border-radius: 20px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1),
    2px 0px 15px 0px rgba(0, 0, 0, 0.1);
  position: relative;
}
.Services .menu img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.Services .menu span {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
@media screen and (max-width: 1200px) {
  .Services .menu span {
    display: none;
  }
}
</style>