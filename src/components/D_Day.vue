<template>
  <div class="d-day-container">
    <h3 class="title">D-Day</h3>
    <div class="name">기념일</div>
    <div class="day-count">D - 20</div>
    <div class="today">tody : 2022-01-01</div>
  </div>
</template>

<script>
export default {
  name: "dDay"
}
</script>

<style scoped>
.d-day-container {
  background: #ffffff50;
  border-radius: 10px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  color: #fff;
}

.title {
  font-weight: bold;
  margin-bottom: 20px;
}

.name {
  margin-bottom: 5px;
  font-size: 12px;
  color: #FFC998;
}

.day-count {
  margin-bottom: 15px;
  font-weight: bold;
  color: #FD9B9B;
}

.today {
  font-size: 8px;
}
</style>