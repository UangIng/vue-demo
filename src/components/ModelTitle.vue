<template>
  <!-- 标题组件 -->
  <div class="ModelTitle">
    <span class="title">{{title}}</span>
    <span class="descript">{{descript}}</span>
  </div>
</template>

<script>
export default {
  name: "ModelTitle",
  props: ["title","descript"]
};
</script>

<style scoped>
.ModelTitle {
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  line-height: 40px;
}
.ModelTitle .title {
  font-weight: bold;
  font-size: 18px;
}
.ModelTitle .descript {
  margin-left: auto;
  margin-right: 0;
  color: #B5B7BE;
}
</style>