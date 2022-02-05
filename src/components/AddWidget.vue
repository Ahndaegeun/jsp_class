<template>
  <div @click="setIsOpen" class="add-widget-container">
    <div @click.stop class="pop-up">
      <button @click="setIsOpen" class="close-btn" type="button">X</button>
      <div class="pop-up-frm">
        <h3 class="title">Add Widget</h3>
        <label class="select-wrap">
          Widget : 
          <select class="select-widget" v-model="widget">
            <option value="weather">Weather</option>
            <option value="clock">Clock</option>
            <option value="calendar">Calendar</option>
            <option value="d_day">D-day</option>
            <option value="todo">ToDo</option>
          </select>

        </label>

        <label class="local-wrap">
          Locale : 
          <select class="select-locale">

          </select>
        </label>



      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "addWidget",
  data() {
    return {
      widget: "weather"
    }
  },
  methods: {
    ...mapMutations({
      setIsOpen: 'widget/setIsOpen'
    })
  },
  watch: {
    widget(name) {
      switch(name) {
        case 'weather':
          break
        case 'clock':
          break
        case 'calendar':
          break
        case 'd_day':
          break
        case 'todo':
          break
      }
    }
  }
}
</script>

<style scoped>
.add-widget-container {
  height: 100vh;
  width: 100%;
  background: #ffffff50;
  position: absolute;
  top: 0;
  left: 0;
}

.pop-up {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: linear-gradient(180deg, #FBC2EB 0%, #A6C1EE 100%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  padding: 20px;
}

.close-btn {
  position: absolute;
  color: #ffffff;
  top: 10px;
  right: 5px;
  transform: translate(-50%, -50%);
  padding: 0;
}

.pop-up-frm {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 10px;
}

.select-wrap,
.local-wrap {
  color: #ffffff;
}

.select-widget,
.select-locale {
  outline: none;
  border: none;
  background: none;
  color: #ffffff;
}
</style>