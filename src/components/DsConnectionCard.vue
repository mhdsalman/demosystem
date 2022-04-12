<template>
 <div :class="['connection-card', { 'active': check }]" @click="onClick">
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
 border: 1px solid black;
 margin: 16px;
 cursor: pointer;

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
</style>
