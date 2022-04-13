<template>
 <div class="ds-login">
  <ds-input v-model="inputKey" label="Provide your API key" placeholder="Enter API key" />
  <br />
  <div class="submit">
   <ds-button label="Confirm" @click="onLogin" />
  </div>
 </div>
</template>

<script>
import DsInput from "../../components/DsInput.vue";
import DsButton from "../../components/DsButton.vue";
import { mapActions, mapGetters } from "vuex";

export default {
 name: 'DsLogin',
 data: () => ({
  inputKey: ''
 }),
 components: {
  DsInput,
  DsButton
 },
 computed: {
  ...mapGetters(['isLoggedIn']),
 },
 methods: {
  ...mapActions(['loginByApiKey']),
  async onLogin() {
   await this.loginByApiKey();
   this.$router.push({ name: 'ds-transaction' });
  }
 }
}
</script>

<style lang="scss" scoped>
.ds-login {
 width: 25%;
 margin: auto;
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

:deep(.input){
    // width: ;
}
 .submit {
  width: 100%;
  display: flex;
  justify-content: flex-end;
 }
}
</style>