<template>
  <div class="wrapper">
    <div class="main-container">
      <div class="header">
        <div class="logo-box">
          <img class="logo" src="../assets/logo.png" alt="load fail" />
        </div>
        <div class="nav-bar">
          <el-button type="primary">GitHub</el-button>
          <el-button type="primary">Blog</el-button>
          <el-button type="primary">Resume</el-button>
          <el-button type="primary">Contact</el-button>
        </div>
      </div>
      <div class="container">
        <el-container>
          <el-card class="person-card">
            <div class="introduction">
              <img
                  class="person-avatar"
                  src="../assets/girl.png"
                  alt="load fail"
              />
              <div>
                <h2 id="my-name">优木同学</h2>
                <p>这是一个自己的描述</p>
                <p>长亭外，古道边，斜风微雨，芳草碧连天，草间莺飞燕舞，</p>
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

          </div>
        </el-container>
        <div class="footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadView",
  methods: {
    goToProject(){
      console.log("go to project")
      this.$router.push('/project')
    }
  }
};
</script>

<style scoped>

.logo{
  width: 45px;
  height: 45px;
  margin-left: 10px;
}

.logo-box{
  width: 25%;
}

.nav-bar{
  width: 75%;
}

.header{
  height: 50px;
  display: flex;
  background-color: red;
  align-items: center;
  justify-content: space-between;
}


.wrapper{
  height: 100%;
  width: 100%;
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-container{
  height: 100%;
  width: 80%;
  background-color: blueviolet;
}

.container{
  height: 100%;
  width: 100%;
}

#my-name{
  font-size: 20px;
  color: red;
}

.person-card{
  width: 80% ;
  margin: 10px auto;
  border-radius: 10px;
}

.introduction{
  display: flex;
}

.person-avatar {
  width: 300px;
  height: 600px;
  margin-right: 20px;
}

.project-list{
  width: 80%;
  margin: 10px auto;
}

.project-item{
  width: 100%;
}

.project-item:hover{
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




</style>
