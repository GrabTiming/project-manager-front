<!-- TODO 这里弄一个可以播放视频的页面 -->
<!-- TODO 这里弄一个轮播图看看 -->

<template>
  <div class="container">
    <h1 class="title">Element Plus 功能示例</h1>

    <div class="section">
      <h2 class="section-title">不可选择文件的视频播放器</h2>
      <div class="video-container">
        <div class="video-player">
          <video class="video-item" ref="videoPlayer" controls>
            <source src="@/assets/video1.mp4" type="video/mp4" />
            您的浏览器不支持HTML5视频标签。
          </video>
        </div>

        <div class="video-controls">
          <el-button type="primary" @click="playVideo" :icon="VideoPlay"
            >播放</el-button
          >
          <el-button type="info" @click="pauseVideo" :icon="VideoPause"
            >暂停</el-button
          >
          <el-button type="success" @click="toggleMute" :icon="volumeIcon">
            {{ isMuted ? "取消静音" : "静音" }}
          </el-button>
          <el-slider
            v-model="volume"
            :min="0"
            :max="100"
            :step="1"
            style="width: 150px"
            @input="changeVolume"
          ></el-slider>
        </div>
      </div>
      <div class="carousel-container">
        <el-carousel
          :interval="4000"
          height="300px"
          indicator-position="outside"
        >
          <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
            <div class="carousel-item">
              <div>
                <h3>{{ item.title }}</h3>
                <img
                  :src="item.image"
                  :alt="item.title"
                  style="max-width: 100%; max-height: 200px; margin-top: 15px"
                />
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import pic1 from "@/assets/pic1.jpg";
import pic2 from "@/assets/pic2.jpg";
import pic3 from "@/assets/pic3.jpg";
import pic4 from "@/assets/pic4.jpg";
export default {
  setup() {
    const videoPlayer = ref(null);
    const isMuted = ref(false);
    const volume = ref(70);

    // 轮播图数据
    const carouselItems = ref([
      {
        title: "pic1",
        image: pic1,
      },
      {
        title: "pic2",
        image: pic2,
      },
      {
        title: "pic3",
        image: pic3,
      },
      {
        title: "pic4",
        image: pic4,
      },
    ]);

    // 确保DOM加载完成后再获取video元素引用
    onMounted(() => {
      videoPlayer.value = document.querySelector("video");
    });

    const playVideo = () => {
      if (videoPlayer.value) {
        videoPlayer.value.play();
      }
    };

    const pauseVideo = () => {
      if (videoPlayer.value) {
        videoPlayer.value.pause();
      }
    };

    const toggleMute = () => {
      if (videoPlayer.value) {
        videoPlayer.value.muted = !videoPlayer.value.muted;
        isMuted.value = videoPlayer.value.muted;
      }
    };

    const changeVolume = () => {
      if (videoPlayer.value) {
        videoPlayer.value.volume = volume.value / 100;
      }
    };

    return {
      videoPlayer,
      isMuted,
      volume,
      carouselItems,
      playVideo,
      pauseVideo,
      toggleMute,
      changeVolume,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  padding: 20px;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  margin: 30px 0;
  color: #2c3e50;
  font-size: 2.5rem;
}

.carousel-item {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section {
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 40px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #3498db;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eaeaea;
  font-size: 1.8rem;
}

.video-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-player {
  width: 100%;
  max-width: 800px;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}

.video-controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 15px;
}

.video-item {
  height: 500px;
  width: 100%;
}
</style>
