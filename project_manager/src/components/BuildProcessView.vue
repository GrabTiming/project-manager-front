<template>
  <el-container>
    <el-card class="process-card">
      <h2>构建个人网站过程</h2>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
          :color="colors[index % colors.length]"
          placement="top"
        >
          <el-card>
            <p>{{ activity.content }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </el-container>
</template>

<script>
export default {
  name: "BuildProcessView",
  data() {
    return {
      colors: [
        "#00CED1", // 鲜艳青色
        "#DC143C", // 猩红色
        "#FF4500", // 橙红色
        "#FFD700", // 金黄色
        "#32CD32", // 鲜绿色
        "#00CED1", // 鲜艳青色
        "#1E90FF", // 道奇蓝色
        "#9932CC", // 深紫色
      ],
      activities: [
        {
          timestamp: "2025-07-01",
          content: "项目初始化，设置Vue.js项目结构",
        },
        {
          timestamp: "2026-03-09",
          content: "重新出发，重开个人网站，但还未知道做什么",
        },
      ],
    };
  },
};
</script>

<style scoped>
.process-card {
  width: 80%;
  margin: 20px auto;
  padding: 20px;
}
</style>
