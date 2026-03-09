<template>
  <h1>一个可以选择电脑本地文件的视频播放器</h1>

  <div>
    <div class="container">
      <div>
        <h2>选择文件</h2>
        <el-upload
          action="#"
          :before-upload="beforeUploadVideo"
          :http-request="handleLocalVideo"
          :show-file-list="false"
        >
          <el-button> 请选择一个视频文件 </el-button>
        </el-upload>
      </div>
      <div class="player-section">
        <h2>视频播放</h2>
        <div class="status" :class="statusClass">{{ statusMessage }}</div>

        <div class="video-container" v-if="videoUrl">
          <video ref="videoPlayer" controls>
            <source :src="videoUrl" type="video/mp4">
            您的浏览器不支持HTML5视频播放
          </video>
        </div>
      </div>

      <div class="controls" v-if="videoUrl">
        <el-button type="primary" @click="playVideo">
          播放
        </el-button>
        <el-button @click="pauseVideo" class="el-icon-video-pause">
          暂停
        </el-button>
      </div>

      <div class="volume-control" v-if="videoUrl">
        <span>音量:</span>
        <el-slider v-model="volume" :min="0" :max="100" style="width: 150px" @change="changeVolume"></el-slider>
        <span>{{ volume }}%</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoUrl: null,
      statusMessage: '请选择一个视频文件',
      statusClass: '',
      isMuted: false,
      volume: 70
    };
  },
  computed: {
    muteIcon() {
      return this.isMuted ? 'el-icon-turn-off-microphone' : 'el-icon-microphone';
    }
  },
  methods: {

    // 使用el-upload时的处理
    beforeUploadVideo(file) {
      const isVideo = file.type.startsWith('video/');
      const isLt10M = file.size / 1024 / 1024 < 10;
      console.log(isVideo)
      if (!isVideo) {
        this.statusMessage = '请选择视频文件';
        this.statusClass = 'error';
        return false;
      }

      if (!isLt10M) {
        this.statusMessage = '视频大小不能超过10MB';
        this.statusClass = 'error';
        return false;
      }

      return true;
    },

    // 处理本地视频
    handleLocalVideo(request) {
      this.processVideoFile(request.file);
      // 返回一个不会实际执行上传的promise
      return new Promise(() => {});
    },

    // 处理视频文件
    processVideoFile(file) {
      if (!file.type.startsWith('video/')) {
        this.statusMessage = '错误：请选择视频文件';
        this.statusClass = 'error';
        return;
      }

      // 创建临时URL供video元素使用
      this.videoUrl = URL.createObjectURL(file);
      this.statusMessage = `已加载: ${file.name}`;
      this.statusClass = 'success';

      // 设置初始音量
      this.$nextTick(() => {
        if (this.$refs.videoPlayer) {
          this.$refs.videoPlayer.volume = this.volume / 100;
        }
      });
    },
    // 播放控制方法
    playVideo() {
      if (this.$refs.videoPlayer) {
        this.$refs.videoPlayer.play();
      }
    },

    pauseVideo() {
      if (this.$refs.videoPlayer) {
        this.$refs.videoPlayer.pause();
      }
    },

    toggleMute() {
      if (this.$refs.videoPlayer) {
        this.$refs.videoPlayer.muted = !this.$refs.videoPlayer.muted;
        this.isMuted = this.$refs.videoPlayer.muted;
      }
    },

    changeVolume(value) {
      if (this.$refs.videoPlayer) {
        this.$refs.videoPlayer.volume = value / 100;
      }
    },

    toggleFullscreen() {
      const player = this.$refs.videoPlayer;
      if (!player) return;

      if (player.requestFullscreen) {
        player.requestFullscreen();
      } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen();
      } else if (player.msRequestFullscreen) {
        player.msRequestFullscreen();
      }
    }
  },
  mounted() {
    // 监听视频事件
    const player = this.$refs.videoPlayer;
    if (player) {
      player.addEventListener('play', () => {
        this.statusMessage = '播放中';
        this.statusClass = 'success';
      });

      player.addEventListener('pause', () => {
        this.statusMessage = '已暂停';
        this.statusClass = '';
      });

      player.addEventListener('ended', () => {
        this.statusMessage = '播放完成';
        this.statusClass = '';
      });

      player.addEventListener('error', () => {
        this.statusMessage = '视频加载错误，请尝试其他文件';
        this.statusClass = 'error';
      });
    }
  }
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  padding: 20px;
  color: #333;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
}

h2 {
  color: #3498db;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eaeaea;
}

.upload-section, .player-section {
  margin-bottom: 40px;
}

.video-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}

video {
  width: 100%;
  height: auto;
  display: block;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
  justify-content: center;
}

.file-input {
  display: none;
}

.file-label {
  display: inline-block;
  padding: 12px 25px;
  background: #3498db;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.file-label:hover {
  background: #2980b9;
}

.status {
  text-align: center;
  padding: 15px;
  margin: 20px 0;
  border-radius: 8px;
  background: #e8f4fc;
  color: #3498db;
}

.error {
  background: #feeaea;
  color: #e74c3c;
}

.success {
  background: #e8f6ef;
  color: #27ae60;
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  justify-content: center;
}

.tips {
  background: #fff3cd;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  border-left: 4px solid #ffc107;
}

.tips h3 {
  margin-bottom: 10px;
  color: #856404;
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
  }

  .controls {
    flex-direction: column;
    align-items: center;
  }
}

</style>
