<template>
  <div class="match-card">
    <div class="card-header">
      <span class ="match-time">2025-10-30</span>
      <span class="match-title">{{ match.league }}</span>
      <span class="match-sports">羽毛球</span>
    </div>
    <div class="team-info">
      <div class="team-left">
        <div class="team-name" @click="gototeampage()">{{ match.home }} <span class="team-icon">🏃</span></div>
        <div class="player-info">首发：{{ match.num }}人</div>
      </div>
      <div class="score-info">
        <div class="actual-score">{{ match.score }}</div>
        <div class="match-status">{{ match.status }}</div>
        <button class="detail-btn" @click="gotonextpage()">详情</button>
      </div>
      <div class="team-right">
        <div class="team-name" @click="gototeampage()">{{ match.away }} <span class="team-icon">🏃</span></div>
        <div class="player-info">首发: {{ match.num }}人</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchCard',
  props: {
    match: {
      type: Object,
      required: true
    }
  },
  data(){
    return{
        event_status: "未开始"
    };
  },
  watch: {
    // 监听 match 对象的变化
    match: {
      // 初始化时立即执行一次
      immediate: true,
      // 当 match 变化时，更新 event_status
      handler(newVal) {
        // 从新的 match 对象中获取 status 并赋值
        this.event_status = newVal.status;
      }
    }
  },
  methods:{
    gotonextpage(){
        if(this.event_status === "未开始"){
            this.$router.push('/event/tostart')
        }
        else if(this.event_status === "进行中"){
            this.$router.push('/event/underway')
        }
        else if(this.event_status === "已结束"){
            this.$router.push('/event/finished')
        }
        else{
            this.$router.push('/')
        }
    },
    gototeampage(){//需要传参队伍id以显示对应队伍信息，目前暂不处理
        this.$router.push('/event/teampage')
    }
  }
};
</script>

<style scoped>
.match-card {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 16px;
  background-color: #fff;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: #666;
  position: relative; /* 用于绝对定位居中 */
}
.match-time {
  font-size: 14px;
}
.match-title {
  font-size: 14px;
  position: absolute;
  font-weight: bold;
  left: 50%;
  transform: translateX(-50%);
}
.match-sports {
  font-size: 14px;
  margin-left: auto;
}
.team-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.team-left, .team-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
}
.team-name {
  font-size: 16px;
  margin: 0 0 8px 0;
  font-weight: 500;
}
.team-icon {
  margin-left: 4px;
  font-size: 14px;
  color: #ccc;
}
.player-info {
  font-size: 12px;
  color: #888;
  margin: 0;
}
.score-info {
  display:flex;
  flex-direction: column;
  align-items: center;
}
.actual-score {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}
.match-status {
  font-size: 14px;
  color: #f5222d; /* 状态颜色（红色表示进行中/重要） */
  margin-bottom: 12px;
}
.detail-btn {
  border: 1px solid #4285f4;
  color: #4285f4;
  background-color: transparent;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
}
.detail-btn:hover {
  background-color: #1677ff;
  color: white;
}
</style>
