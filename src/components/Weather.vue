<template>
  <div class="weather-container">
    <h3 class="title">Weather</h3>
    <img class="weather-icon" src="@/assets/cloudy.png" alt="icon">
    <div class="weather-name">cloudy</div>
    <div class="temperatures">14°</div>
  </div>
</template>

<script>
export default {
  name: "weather"
}
</script>

<style scoped>
.weather-container {
  background: #ffffff50;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: #fff;
}

.title {
  font-weight: bold;
  margin-bottom: 10px;
  align-self: flex-start;
}

.weather-icon {
  width: 50%;
  margin-bottom: 5px;
}

.weather-name {
  font-size: 10px;
  margin-bottom: 10px;
}

.temperatures {
  font-size: 18px;
}
</style>