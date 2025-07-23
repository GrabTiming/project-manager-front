<template>
  <div class="wrapper">
    <div class="header">
      <!-- 这里可以写一些导航栏 -->
    </div>
    <div class="container">
      <div class="production">
        <!-- 这里要做一个卡片，卡片内左边放个头像，右边放自己的介绍信息 -->
        <img
          class="avatar"
          src="../assets/girl.png"
          alt="load fail"
        />
        <h2>优木同学</h2>
      </div>
      <div class="project-list">
        <!-- 这里列出做的项目的展示 -->
        <div class="project-item">
          <p>项目名称</p>
          <a>项目链接</a>
          <p>项目的简单介绍</p>
        </div>
        <div class="project-item">
          <p>项目名称</p>
          <a>项目链接</a>
          <p>项目的简单介绍</p>
        </div>
        <div class="project-item">
          <p>项目名称</p>
          <a>项目链接</a>
          <p>项目的简单介绍</p>
        </div>
        <div class="project-item">
          <p>项目名称</p>
          <a>项目链接</a>
          <p>项目的简单介绍</p>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadView",
};
</script>

<style scoped>
.avatar {
}
</style>
