<template>
  <div class="find-container">

    <h2 class="title">Find ID</h2>
    <div class="login-frm">
      <input type="text" placeholder="NAME">
      <input type="email" placeholder="E-MAIL">
      <div v-if="isFind" class="find-id">your Id : {{findId}}</div>
      <button type="button">Find</button>
    </div>
    <div class="middle-line"></div>

    <h2 class="title">Reset Password</h2>
    <div class="login-frm">
      <input type="text" placeholder="ID">
      <input type="text" placeholder="NAME">
      <input type="email" placeholder="E-MAIL">
      <button type="button">Find</button>
    </div>
    <div class="middle-line"></div>

    <linkWrap/>

  </div>
</template>

<script>
import linkWrap from '../components/AccountLink.vue'
import { mapMutations } from 'vuex'
export default {
  name: "find",
  components: {
    linkWrap
  },
  data() {
    return {
      isFind: false,
      findId: ""
    }
  },
  methods: {
    ...mapMutations({
      setNowPage: 'global/setNowPage'
    })
  },
  mounted() {
    this.setNowPage('find')
  }
}
</script>

<style scoped>
.find-container {
  background: linear-gradient(180deg, #FBC2EB 0%, #A6C1EE 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 30px;
  font-weight: bold;
}

.login-frm {
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.login-frm input {
  background: #ffffff50;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
}

.login-frm input::placeholder {
  color: #ffffff;
}

.login-frm button {
  background: #ffffff50;
  color: #fff;
  width: 100%;
  border-radius: 5px;
  align-self: center;
  font-size: 18px;
  padding: 5px 0;
}

.middle-line {
  width: 80%;
  height: 1px;
  background: #ffffff;
  margin-bottom: 10px;
}
</style>