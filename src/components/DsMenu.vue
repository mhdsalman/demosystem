<template>
  <div class="ds-menu">
    <span class="ds-menu-icon" @click="open">
      <slot name="info" />
      &nbsp;&nbsp;
      <ds-svg :name="icon" />
    </span>
    <menu v-if="lists.length" :class="[
      'ds-menu-dropdown',
      { hide: !visible },
      `position-${position || 'right'}`,
    ]">
      <div v-for="(item, index) in lists" :key="index" :class="['item', { 'item-hover': !item.disable }]"
        @click="itemClicked(item)">
        <div :class="[
          'menu-items',
          { 'disable-item': item.disable },
        ]">
          <span>
            <ds-svg v-if="item.icon" :name="item.icon" />
          </span>
          <li>{{ item.name }}</li>
        </div>
      </div>
    </menu>
  </div>
</template>

<script>
import DsSvg from "./DsSvg.vue";
export default {
  name: "SfMenu",
  data: () => ({
    visible: false,
  }),
  props: {
    position: {
      type: String,
      validator: value =>
        ["left", "right"].some(position => position === value),
    },
    lists: {
      type: Array,
      default: () => [],
    },
    icon: {
      type: String,
      default: 'dropdown-button',
    }
  },
  methods: {
    open() {
      this.visible = !this.visible;
    },
    itemClicked(value) {
      if (value.disable) {
        return;
      }
      this.$emit("item-click", value);
      this.$emit("click");
      this.visible = false;
    },
    clickOutside() {
      if (this.visible) {
        this.visible = false;
      }
    },
  },
  components: { DsSvg },
};
</script>

<style lang="scss" scoped>
.ds-menu {
  position: relative;

  /*icon style*/
  &-icon {
    cursor: pointer;
    padding: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /*Menu dropdown*/
  &-dropdown {
    border-width: 0px;
    max-height: 245px;
    position: absolute;
    background-color: white;
    padding: 0;
    margin: 0;
    min-width: 210px;
    box-shadow: 0px 3px 7px rgb(0 0 0 / 10%);
    overflow-x: hidden;
    overflow-y: hidden;
    transform-origin: top center;
    animation: slideDown 470ms ease-in-out;

    &.position {
      &-left {
        left: 10%;
      }

      &-right {
        right: 7%;
      }
    }

    .item {
      display: flex;
      align-items: center;
      padding: 5px 8px 5px 17px;
      cursor: pointer;

      span {
        width: 20px;

        img {
          width: auto;
          height: auto;
          max-width: 16px;
          max-height: 16px;
          margin-right: 12px;
        }
      }

      li {
        list-style: none;
        font-size: 15px;
        font-weight: 400;
        margin-left: 12px;
        font-family: "Segoe UI", sans-serif;
      }
    }

    .menu-items {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .item-hover {
      &:hover {
        background-color: #dcdcdc;
      }
    }
  }

  .hide {
    display: none;
  }

  .disable-item {
    li {
      color: #cccccc !important;
    }
  }

  @keyframes slideDown {
    0% {
      height: 0px;
      transform: translateY(-60px);
    }

    100% {
      height: auto;
      transform: translateY(0);
    }
  }
}
</style>
