<template>
  <div class="ds-main">
    <div class="ds-sidebar">
      <div class="heading">
        <text> Bankconnect </text>
        <ds-svg class="menu" name="menu" />
      </div>
      <ds-divider class="header-divider" />
      <div class="sidebar-list">
        <router-link to="#">
          <li>Dashboard</li>
        </router-link>
        <router-link to="/account">
          <li>Bank Connect</li>
        </router-link>
        <!-- <span>
          <img src="scr/assets/images/arrow.svg" class="arrow-img" />
        </span> -->
        <router-link to="/transaction">
          <li>Transactions</li>
        </router-link>
      </div>
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
import DsSvg from "../components/DsSvg.vue";
import DsDivider from "../components/DsDivider.vue";
import DsMenu from "../components/DsMenu.vue";
import DsImage from "../components/DsImage.vue";

export default {
  name: "MainLayout",
  data: () => ({
    open: true,
    appNotification: [
      {
        name: "New Email Received !",
      },
      {
        name: "New Email Received !",
      },
    ],
    userMenu: [
      {
        name: "User Management",
        icon: "user",
      },
      {
        name: "Setting",
        icon: "settings",
      },
      {
        name: "Logout",
        icon: "logout",
      },
    ],
  }),
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
  components: {
    DsSvg,
    DsDivider,
    DsMenu,
    DsImage,
  },
};
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
    .sidebar-list {
      margin-top: 10px;
      li {
        font-family: "Segoe UI Semilight", "Segoe UI Regular", "Segoe UI",
          sans-serif;
        font-weight: 350;
        color: #ffffff;
        text-align: left;
        font-size: 16px;
        list-style-type: none;
        padding: 5px 12px;
      }
    }
  }
  .content {
    width: 100%;
    height: 120px;
    padding: 16px;
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
.sidebar-list li:active {
  font-family: "Segoe UI Semibold", "Segoe UI Regular", "Segoe UI", sans-serif !important;
  font-weight: 600 !important;
  color: #ffffff !important;
}
// a.router-link-exact-active{
//    color: red !important;
// }
.arrow-img {
  transform: rotate(270deg);
  padding: 2px 2px 2px 2px;
  background-color: #ffffff;
}
</style>
