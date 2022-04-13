<template>
  <button :style="[{ width: width + 'px' }]" :size="size"
    :class="[ customStyle ? 'default-btn custom-btn': 'default-btn ds-button', `bg-${background}`, `size-${size}`]">
    <ds-svg v-if="iconBefore" class="btn-icon" :name="iconBefore" />
    <slot name="before"></slot>
    &nbsp;&nbsp;{{ label }}&nbsp;&nbsp;
    <slot name="after"></slot>
    <ds-svg v-if="iconBefore" class="btn-icon" :name="iconAfter" />
  </button>
</template>

<script>
import DsSvg from "./DsSvg.vue";
export default {
  components: {
    DsSvg,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md", "lg"].some((size) => size === value),
    },
    width: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      default: "default",
      validator: (value) =>
        ["info", "default", "secondary", "dark", "warning"].some(
          (background) => background === value
        ),
    },
    outline: {
      type: Boolean,
      default: false,
    },
    iconBefore: {
      type: String,
      default: null,
    },
    iconAfter: {
      type: String,
      default: null,
    },
    customStyle:{
      type:String,
      default: ''
    }
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.default-btn{
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 32px;
  padding: 0px 16px 0px 16px;
  border-radius: 2px;
  border: 1px solid #2f2f2f;
  background-color: #2f2f2f;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  color: #ffffff;
  text-align: center;
  line-height: normal;
  font-size: 14px;

  &.bg {
    &-default {
      color: white;
      background-color: #323130;
    }
  }

  &.size {
    // Size classes
    height: 75px;

    &-sm {
      padding: 4px 8px;
    }

    &-md {
      padding: 6px 12px;
    }

    &-lg {
      padding: 8px 16px;
    }
  }

  .btn-icon {
    width: 18px;
    height: 18px;
  }
 
}
.default-btn:hover{
    background-color: #575756;
}
 .custom-btn{
   width: 90px;
  height: 32px;
  color: #000 !important;
  background-color: #ffffff !important;
  border: 1px solid #e4e4e4;
  font-family: 'PingFang SC ', 'PingFang SC', sans-serif;
  color: #333333;
  font-size: 12px;
  }
  .custom-btn:hover{
   
  border: 1px solid #333333;
 
  }
</style>
