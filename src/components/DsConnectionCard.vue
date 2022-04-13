<template>
  <div :class="['connection-card', { active: check }]" @click="onClick">
    <ds-svg v-if="check" name="check" class="check" />
    <!-- <ds-svg :name="icon" class="icon" :type="null" /> -->
    <p class="card-name">{{ label }}</p>
  </div>
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
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    check: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.connection-card {
  display: flex;
  flex-direction: column;
  width: 165px;
  height: 132px;
  background-color: white;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 12px;
  position: relative;
  border: 1px solid #f0f0f0;
  margin: 16px;
  cursor: pointer;
  p {
    text-align: center;
    font-family: "Arial", sans-serif;
    color: #333333;
    font-size: 13px;
  }

  .check {
    align-self: flex-start;
    position: absolute;
    right: 8px;
    top: 8px;
  }

  .card-name {
    margin-top: 12px;
    font-size: 15px;
    text-transform: capitalize;
  }

  .icon {
    margin-top: 25%;
    width: 56px;
    height: 56px;
  }
}
.connection-card.active {
  border: 1px solid #333333;
}
</style>
