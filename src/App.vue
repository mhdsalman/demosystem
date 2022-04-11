<template>
  <div v-if="!isLoggedIn">
    <router-view></router-view>
  </div>
  <ds-main-layout v-else>
    <template #pages>
      <router-view></router-view>
    </template>
  </ds-main-layout>
</template>

<script>
import DsMainLayout from "./layout/DsMainLayout.vue"
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  data: () => ({
    isLogin: false,
  }),
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  components: {
    DsMainLayout
  },
  created() {
    localStorage.removeItem('ds-token')
  }
}
</script>
<style>
body {
  padding: 0;
  margin: 0;
  font-family: 'Segoe UI Semibold', 'Segoe UI Regular', 'Segoe UI';
  background-color: #F5F5F5;
}
</style>
