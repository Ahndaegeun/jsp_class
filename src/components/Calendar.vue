<template>
  <div class="calendar-container">
    <div class="head">
      <h3 class="title">{{month}} {{year}}</h3>
    </div>
    <div class="calendar-box">
      
      <ul class="week">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fi</li>
        <li>Se</li>
        <li>Su</li>
      </ul>

      <ul class="day-list">
        <li v-for="day in dayList" 
            :key="day"
            :style="{background: day.isToday}">{{day.day}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar",
  data() {
    return {
      dayList: [],
      month: 0,
      year: 0
    }
  },
  mounted() {
    const dayArr = []
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const now = new Date()
    const first = new Date(now.getFullYear(), now.getMonth())
    for(let i = 0; i < first.getDay(); i++) {
      const obj = {
        day: null,
        isToday: false
      }
      dayArr.push(obj)
    }
    for(let i = 1; i <= 31; i++) {
      const obj = {
        day: i,
        isToday: i != now.getDate() ? '' : '#ff99e2'
      }
      dayArr.push(obj)
    }
    this.dayList = dayArr
    this.month = monthList[now.getMonth()]
    this.year = now.getFullYear()
  }
}
</script>

<style scoped>
.calendar-container {
  background: #ffffff50;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.head {
  margin-bottom: 10px;
}

.head,
.btn-wrap * {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 8px;
  color: #ffffff;
}

.btn-wrap {
  display: flex;
}

.calendar-box {
  width: 100%;
  height: 100%;
}

.week {
  display: grid;
  font-size: 8px;
  grid-template-columns: repeat(7, 1fr);
  justify-items: flex-end;
  color: #999;
  margin-bottom: 5px;
}

.day-list {
  height: 85%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: flex-end;
  font-size: 5px;
  color: #ffffff;
}

.day-list li {
  padding: 1px;
  border-radius: 50%;
}
</style>