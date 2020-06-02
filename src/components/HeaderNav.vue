<template>
  <!-- 导航栏组件 -->
  <div class="HeaderNav">
    <div class="logo">
      <img src="@/assets/logo.png" />
    </div>
    <div class="tabs">
      <el-menu
        mode="horizontal"
        :default-active="activeIndex"
        text-color="908582"
        active-text-color="50392C"
        @select="handleSelect"
      >
        <el-menu-item index="1">Dashboard</el-menu-item>
        <el-menu-item index="2">Services</el-menu-item>
        <el-menu-item index="3">History</el-menu-item>
        <el-menu-item index="4">Actions</el-menu-item>
      </el-menu>
    </div>
    <div class="input">
      <input placeholder="search..." />
      <i class="el-icon-search" style="font-size:20px;" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key + "," + keyPath);
      this.$emit("handleSelect", { key: key, keyPath: keyPath });
    }
  }
};
</script>

<style scoped>
.HeaderNav {
  width: 100%;
  display: flex;
  white-space: nowrap;
  align-items: center;
  text-align: left;
}
.HeaderNav .logo {
  margin-left: 60px;
  margin-right: 60px;
}
.HeaderNav .tabs {
  color: #787b86;
}
.HeaderNav .tabs .el-menu {
  border-bottom-color: #ffffff !important;
}
.HeaderNav .tabs .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  border-bottom-color: #ffffff !important;
}
.HeaderNav .tabs .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  border-bottom-color: #ffffff !important;
}
.HeaderNav .input {
  width: 260px;
  height: 45px;
  line-height: 45px;
  background-color: #f8f8f8;
  border-radius: 24px;
  margin-left: auto;
  margin-right: 40px;
  text-align: left;
  padding: 0 15px;
  display: flex;
  align-items: center;
}
.HeaderNav .input input {
  width: 260px;
  border: 0;
  outline: none;
  background-color: #f8f8f8;
}
.HeaderNav .input i {
  margin-left: auto;
  margin-right: 0;
}
.HeaderNav .input input::-webkit-input-placeholder {
  color: #d4d5d9;
}

.HeaderNav .input input::-moz-placeholder {
  color: #d4d5d9;
}
.HeaderNav .input input::-moz-placeholder {
  color: #d4d5d9;
}
.HeaderNav .input input::-ms-input-placeholder {
  color: #d4d5d9;
}
</style>