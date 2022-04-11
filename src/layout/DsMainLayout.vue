<template>
 <div class="ds-main">
  <div class="ds-sidebar">
   <div class="heading">
    <text>
     Bankconnect
    </text>
    <ds-svg class="menu" name="menu" />
   </div>
   <ds-divider class="header-divider" />
  </div>
  <div class="app-pages">
   <div class="content">
    <ds-menu icon="email" :lists="appNotification" />
    <ds-menu icon="notifications" :lists="appNotification" />
    <ds-menu :lists="userMenu">
     <template #info>
      Hello Bjoern! &nbsp;
      <ds-svg name="avatar" />
     </template>
    </ds-menu>
   </div>
   <div class="pages">
    <slot name="pages" />
   </div>
  </div>
 </div>
</template>

<script>
import DsSvg from '../components/DsSvg.vue'
import DsDivider from '../components/DsDivider.vue'
import DsMenu from '../components/DsMenu.vue'
export default {
 name: 'MainLayout',
 data: () => ({
  open: true,
  appNotification: [
   {
    name: 'New Email Received !'
   }, {
    name: 'New Email Received !'
   }
  ],
  userMenu: [
   {
    name: 'User Management',
    icon: 'user',
   }
   , {
    name: 'Setting',
    icon: 'settings',
   }
   , {
    name: 'Logout',
    icon: 'logout',
   }
  ]
 }),
 methods: {
  toggle() {
   this.open = !this.open
  }
 },
 components: {
  DsSvg,
  DsDivider,
  DsMenu
 }
}
</script>
<style lang="scss" scoped>
.ds-main {
 display: flex;

 .ds-sidebar {
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  padding: 2px 2px 2px 2px;
  background-color: #2e323a;
  width: 250px;
  min-height: 99.5vh;

  .heading {
   padding: 40px 8px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   .menu {
    cursor: pointer;
    height: 25px;
    width: 25px;
   }
  }

  .header-divider {
   margin: 0 8px;
  }
 }

 .content {
  width: 100%;
  height: 120px;
  padding: 8px 120px;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 }

 .app-pages {
  width: 100%;
  display: flex;
  flex-direction: column;
 }
}
</style>
