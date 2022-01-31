<template>
  <div class="login-container">
    <h1 class="title">My Widget</h1>
    <div class="login-frm">
      <input type="text" placeholder="ID">
      <input type="password" placeholder="PW">
      <button type="button">Login</button>
    </div>
    <div class="middle-line"></div>
    <linkWrap/>
  </div>
</template>

<script>
import linkWrap from '../components/AccountLink.vue'
import { mapMutations } from 'vuex'

export default {
  name: "login",
  components: {
    linkWrap
  },
  methods: {
    ...mapMutations({
      setNowPage: 'global/setNowPage'
    })
  },
  mounted() {
    this.setNowPage("login")
  }
}
</script>

<style scoped>
.login-container {
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
  border-radius: 5px;
  width: 100%;
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