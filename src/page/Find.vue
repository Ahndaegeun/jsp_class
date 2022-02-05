<template>
  <div class="find-container">

    <h2 class="title">Find ID</h2>
    <div class="login-frm">
      <input spellcheck="false" v-model="findId.name" type="text" placeholder="NAME">
      <input spellcheck="false" v-model="findId.email" type="email" placeholder="E-MAIL">
      <div v-if="idResult.isFind" class="find-id">{{idResult.text}}</div>
      <button @click="findIdBtnClick" type="button">Find</button>
    </div>
    <div class="middle-line"></div>

    <h2 class="title">Reset Password</h2>
    <div class="login-frm">
      <input spellcheck="false" v-model="resetPw.id" type="text" placeholder="ID">
      <input spellcheck="false" v-model="resetPw.name" type="text" placeholder="NAME">
      <input spellcheck="false" v-model="resetPw.email" type="email" placeholder="E-MAIL">
      <div v-if="pwResult.isFind" class="reset-pw">{{pwResult.text}}</div>
      <button @click="resetPwBtnClick" type="button">Find</button>
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
      findId: {
        name: "",
        email: ""
      },
      resetPw: {
        id: "",
        name: "",
        email: ""
      },
      idResult: {
        isFind: false,
        text: ""
      },
      pwResult: {
        isFind: false,
        text: ""
      }
    }
  },
  methods: {
    ...mapMutations({
      setNowPage: 'global/setNowPage'
    }),
    findIdBtnClick() {
      if(
        this.findId.name.trim() !== '' &&
        this.findId.email.trim() !== ''
      ) {
        console.log('ajax')
      } else {
        console.log('focusing')
      }
    },
    resetPwBtnClick() {
      if(
        this.resetPw.id &&
        this.resetPw.name &&
        this.resetPw.email
      ) {
        console.log('ajax')
      } else {
        console.log('focusing')
      }
    }
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