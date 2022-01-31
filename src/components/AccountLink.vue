<template>
  <div class="link-wrap">
    <router-link  v-if="this.$store.state.global.nowPage !== 'find'"
                  to="/find">forget your info?</router-link>
    <router-link  v-if="this.$store.state.global.nowPage !== 'sign'"
                  to="/sign">Need an Account?</router-link>
    <router-link  v-if="this.$store.state.global.nowPage !== 'login'"
                  to="/">go to Login</router-link>
  </div>
</template>

<script>
export default {
  name: "linkWrap"
}
</script>

<style scoped>
.link-wrap {
  color: #F4E7FF;
  font-size: 12px;
  width: 70%;
  display: flex;
  justify-content: space-between;
}
</style>