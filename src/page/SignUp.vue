<template>
  <div class="sign-container">
    <h1 class="title">Sign Up</h1>
    <div class="login-frm">
      <div class="id-wrap">
        <input spellcheck="false" autocomplete="off" v-model="userId" type="text" placeholder="ID">
        <span v-if="!regPass.id && userId.trim() !== ''" class="warn-text">{{warnText.id}}</span>
      </div>
      <div class="pw-wrap">
        <input spellcheck="false" autocomplete="off" v-model="userPw" type="password" placeholder="PW">
        <span v-if="!regPass.pw && userPw.trim() !== ''" class="warn-text">{{warnText.pw}}</span>
      </div>
      <div class="pw-ck-wrap">
        <input spellcheck="false" autocomplete="off" v-model="userPwCk" type="password" placeholder="PW Check">
        <span v-if="!regPass.pwCk && userPwCk.trim() !== ''" class="warn-text">{{warnText.pwCk}}</span>
      </div>
      <div class="name-wrap">
        <input spellcheck="false" autocomplete="off" v-model="userName" type="text" placeholder="NAME">
        <span v-if="!regPass.name && userName.trim() !== ''" class="warn-text">{{warnText.name}}</span>
      </div>
      <div class="email-wrap">
        <input spellcheck="false" autocomplete="off" v-model="userEmail" type="email" placeholder="E-MAIL">
        <span v-if="!regPass.email && userEmail.trim() !== ''" class="warn-text">{{warnText.email}}</span>
      </div>
      <button @click="signUp" type="button">SignUp</button>
    </div>
    <div class="middle-line"></div>
    <linkWrap/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import linkWrap from '../components/AccountLink.vue'

export default {
  name: "signup",
  data() {
    return {
      userId: "",
      userPw: "",
      userPwCk: "",
      userName: "",
      userEmail: "",
      regPass: {
        id: false,
        pw: false,
        pwCk: false,
        name: false,
        email: false
      },
      warnText: {
        id: "It must contain 6 ~ 20 letters and numbers.",
        pw: "It must contain 8 ~ 20 letters and numbers.",
        pwCk: "does not match.",
        name: "Please enter your name correctly.",
        email: "Please enter your email correctly."
      }
    }
  },
  components: {
    linkWrap
  },
  methods: {
    ...mapMutations({
      setNowPage: "global/setNowPage"
    }),
    signUp() {
      if(
        this.regPass.id &&
        this.regPass.pw &&
        this.regPass.pwCk &&
        this.regPass.name &&
        this.regPass.email
      ) {
        console.log('ajax')
      } else {
        console.log("??")
      }
    }
  },
  mounted() {
    this.setNowPage("sign")
  },
  watch: {
    userId(id) {
      const regExp = /^[a-z]+[a-z0-9]{5,20}$/
      if(!regExp.test(id)) {
        this.regPass.id = false
      } else {
        this.regPass.id = true
      }
    },
    userPw(pw) {
      const regExp = /^[a-zA-Z0-9]{8,16}$/
      console.log(regExp.test(pw))
      if(!regExp.test(pw)) {
        this.regPass.pw = false
      } else {
        this.regPass.pw = true
      }
    },
    userPwCk(pwCk) {
      if(this.userPw !== pwCk) {
        this.regPass.pwCk = false
      } else {
        this.regPass.pwCk = true
      }
    },
    userName(name) {
      const regExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]{2,}$/
      if(!regExp.test(name)) {
        this.regPass.name = false
      } else {
        this.regPass.name = true
      }
    },
    userEmail(email) {
      const regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i
      if(!regExp.test(email)) {
        this.regPass.email = false
      } else {
        this.regPass.email = true
      }
    }
  }
}
</script>

<style scoped>
.sign-container {
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

.login-frm [class$="-wrap"] {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.warn-text {
  font-size: 10px;
  text-indent: 10px;
  color: #ff0000;
}

.login-frm input {
  background: #ffffff50;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  width: 100%;
  margin-bottom: 5px;
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