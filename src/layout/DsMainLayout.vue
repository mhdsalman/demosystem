<template>
  <div class="ds-main">
    <div class="ds-sidebar">
      <div class="heading">
        <text> Bankconnect </text>
        <ds-svg class="menu" name="menu" />
      </div>
      <ds-divider class="header-divider" />
      <div class="sidebar-list">
          <div v-for="(link, index) in links" :key="index" class="d-flex">
          <router-link :to="link.path" exact>
            <li>{{ link.name }}</li>
          </router-link>
          <div class="ds-arrow">
            <ds-svg name="arrow" class="arrow-img" />
          </div>
        </div>
      </div>
    </div>
    <div class="app-pages">
      <div class="content">
        <ds-menu icon="email" :lists="appeEmail"  dotIcon='gray-dot' width="249" />
        <ds-menu icon="notifications" :lists="appNotification" dotIcon='gray-dot' width="249"/>
        <ds-menu :lists="userMenu" class="menu-margin">
          <template #info>
            <h3 class="text-style">Hello Bjoern!</h3>
            &nbsp;
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
    appeEmail: [
      {
        name: "New Email Received !",
      },
      {
        name: "New Email Received !",
      },
    ],
    appNotification:[
      {
        name:'New Client Added'
      },{
        name:'New Account Added'
      },
      {
        name:'New Environment Added'
      },{
        name:'New Connection Created'
      },{
        name:'New Process Added'
      },{
        name:'New Suggestion Created'
      }
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
      links: [
      {
        name: 'Bank Connect',
        path: '/account'
      },
      {
        name: 'Transactions',
        path: '/transactions'
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
      text{
        margin-bottom: 7px;
      }
    }

    .header-divider {
      margin: 0 8px;
    }
    .sidebar-list {
      margin-top: 10px;
      a {
        text-decoration: none;
      }
      li {
        font-family: "Segoe UI Semilight", "Segoe UI Regular", "Segoe UI",
          sans-serif;
        font-weight: 350;
        color: #ffffff;
        text-align: left;
        font-size: 16px;
        list-style-type: none;
        padding: 7px 12px;
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
    text-align: center;
  }

  .app-pages {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
.sidebar-list a:-webkit-any-link:active {
  color: transparent !important;
}
.arrow-img {
  transform: rotate(270deg);
}
.menu-margin {
  margin-right: 56px;
  margin-left: 35px;
}
.d-flex {
  display: flex;
}
.ds-arrow {
  display: flex;
  align-items: center;
  margin: auto 10px auto auto;
}
.text-style {
  font-family: "Arial", sans-serif;
  color: #323130;
  font-size: 18px;
  font-weight: normal;
  margin-right: 5px;
}
.router-link-active li {
  font-family: "Segoe UI Semibold", "Segoe UI Regular", "Segoe UI", sans-serif !important;
  font-weight: 600 !important;
  color: #ffffff !important;
  padding: 7px 6px !important;
  border-left: 5px solid #ffffff;
}
</style>
