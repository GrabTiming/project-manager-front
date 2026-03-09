<template>
  <div class="wrapper">
    <div class="main-container">
      <div class="header">
        <div class="logo-box">
          <img class="logo" src="../assets/logo.png" alt="load fail" />
        </div>
        <div class="nav-bar">
          <el-link class="header-link" type="primary" @click="goToHeadView()"
            >首页</el-link
          >
          <el-link type="primary" @click="goToGithub()" class="header-link"
            >GitHub</el-link
          >
          <el-link class="header-link" type="primary">Blog</el-link>
          <el-link class="header-link" type="primary">Resume</el-link>
          <el-link class="header-link" type="primary">Contact</el-link>
        </div>
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadView",
  methods: {
    goToProject() {
      console.log("go to project");
      this.$router.push("/project");
    },
    goToGithub() {
      console.log("go to github");
      window.open("https://github.com/GrabTiming");
    },
    goToHeadView() {
      this.$router.push("/info");
    },
  },
};
</script>

<style scoped>
.logo {
  width: 45px;
  height: 45px;
  margin-left: 20px;
  margin-top: 5px;
}

.logo-box {
  width: 25%;
}

.nav-bar {
  width: 75%;
}

.header {
  position: fixed; /* 固定定位 */
  top: 0; /* 固定在顶部 */
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  background-color: rgba(245, 245, 245, 0.8); /* 半透明灰白色 */
  backdrop-filter: blur(10px); /* 添加模糊效果使半透明背景更美观 */
  align-items: center;
  justify-content: space-between;
  z-index: 1000; /* 确保导航栏在最上层 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 添加背景图片 */
  background-image: url("https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.main-container {
  height: 100%;
  width: 80%;
  background-color: aqua;
}

.container {
  /* 为固定导航栏留出空间，避免内容被遮挡 */
  margin-top: 50px;
  height: calc(100% - 50px);
  width: 100%;
}

.header-link {
  padding: 10px;
  margin-left: 20px;
  font-size: 20px;
}
</style>
