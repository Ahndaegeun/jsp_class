<template>
  <div class="main-container">
    <header>
      <h1 class="title">My widgets</h1>
      <div class="btn-wrap">
        <button type="button" @click="setIsOpen">+</button>
        <button type="button">-</button>
      </div>
    </header>

    <main>
      <Weather class="weather-t"/>
      <Clock class="clock-t"/>
      <Calendar class="calendar-t"/>
      <DDay class="d-day-t"/>
      <ToDo class="todo-t"/>
    </main>

    <AddWidget v-if="this.$store.state.widget.isOpen"/>
  </div>
</template>

<script>
import Calendar from '../components/Calendar.vue'
import Clock from '../components/Clock.vue'
import DDay from '../components/D_Day.vue'
import ToDo from '../components/ToDo.vue'
import Weather from '../components/Weather.vue'
import AddWidget from '../components/AddWidget.vue'
import { mapMutations } from 'vuex'

export default {
  name: "main",
  components: {
    Calendar,
    Clock,
    DDay,
    ToDo,
    Weather,
    AddWidget
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations({
      setIsOpen: 'widget/setIsOpen'
    })
  }
}
</script>

<style scoped>
.main-container {
  background: linear-gradient(180deg, #FBC2EB 0%, #A6C1EE 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  position: relative;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  margin-bottom: 20px;
}

.title,
.btn-wrap * {
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
}

main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 20px;
}

main > * {
  width: 100%;
  min-height: 130px;
}

.todo-t {
  grid-column: 1/3;
}
</style>