<template>
  <el-container>
    <el-card class="person-card">
      <div class="introduction">
        <img class="person-avatar" src="../assets/girl.png" alt="load fail" />
        <div>
          <div>
            <h2 id="my-name">优木同学</h2>
            <!-- TODO 这里加个人物tag -->
            <div>
              <el-tag type="primary" class="personality-tag"> 靠谱 </el-tag>
              <el-tag type="success" class="personality-tag"> 守信 </el-tag>
              <el-tag type="warning" class="personality-tag"> 认真 </el-tag>
              <el-tag type="danger" class="personality-tag"> 求学 </el-tag>
            </div>
          </div>
          <!-- TODO 加个class 人生格言 -->
          <div>
            <p>你想成为一个怎样的人？</p>
            <p>长亭外，古道边，芳草碧连天...</p>
            <p>从容不迫，有耐心，有毅力</p>
            <p>热爱生活，过好每一天，照顾好自己</p>
            <p>自我约束、严于律己</p>
            <p>沉稳可靠，说到做到</p>
            <p>脚踏实地，审视自身</p>
            <p>博学多识，保持好奇</p>
          </div>
        </div>
      </div>
    </el-card>
  </el-container>
  <el-container>
    <div class="project-list">
      <!-- 这里列出做的项目的展示 -->
      <div class="project-item" @click="goToProject">
        <el-card class="project-card">
          <p>项目名称</p>
          <a>项目链接</a>
          <p>项目的简单介绍</p>
        </el-card>
      </div>
      <div class="project-item" @click="goToProject">
        <el-card class="project-card">
          <p>项目名称</p>
          <a>项目链接</a>
          <p>项目的简单介绍</p>
        </el-card>
      </div>
      <div class="project-item" @click="goToProject">
        <el-card class="project-card">
          <p>项目名称</p>
          <a>项目链接</a>
          <p>项目的简单介绍</p>
        </el-card>
      </div>
    </div>
  </el-container>
  <div class="footer"></div>
</template>

<script>
export default {
  methods: {
    goToProject() {
      console.log("go to project");
      this.$router.push("/project");
    },
  },
};
</script>

<style scoped>
#my-name {
  font-size: 20px;
  color: red;
}

.person-card {
  width: 80%;
  margin: 10px auto;
  border-radius: 10px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.introduction {
  display: flex;
  margin: 10px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.person-avatar {
  width: 300px;
  height: 600px;
  margin-right: 20px;
}

.project-list {
  width: 80%;
  margin: 10px auto;
}

.project-item {
  margin: 10px 0;
  width: 100%;
}

.project-item:hover {
  cursor: pointer;
}

.project-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* 使用缓动函数 */
  border: 1px solid #ebeef5;
}

.project-card:hover {
  border-color: #409eff;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px); /* 悬浮提升效果 */
}

.personality-tag {
  margin-right: 5px;
}
</style>
