<template>
 <div class="ds-select" :data-value="modalValue" :data-list="list">
  <div>
   <label for="drop-down">{{ label }}</label>
  </div>
  <div :class="['selector', { 'aselect-active-border': visible }]">
   <div class="selected"  @click="open">
    <span>{{ modalValue || list[0] }}</span>
   </div>
   <div class="arrow">
    <ds-svg name="down-arrow" />
   </div>
   <div v-if="visible">
    <ul>
     <li :class="{ 'current': item === modalValue }" v-for="(item, index) in filteredItem" @click="select(item, index)"
      :key="item">
      {{ item }}
     </li>
    </ul>
   </div>
  </div>
 </div>
</template>

<script>
import DsSvg from "./DsSvg.vue";
export default {
 components: {
  DsSvg,
 },
 props: {
  list: {
   type: Array,
   required: true,
  },
  label: {
   type: String,
   default: null,
  },
  value: {
   type: String,
   default: "",
  },
 },

 data: () => ({
  visible: false,
  modalValue: "",
 }),

 methods: {
  select(option, index) {
   
   this.modalValue = option;
   this.visible = false;
   this.$emit("input", option);
  },
  open() {
   this.visible = !this.visible;
  },
 },

 computed: {
  filteredItem() {
   return [...this.list];
  },
 },
 created() {
  this.modalValue = this.value;
 },
 mounted() {
  this.$emit("input", this.selected);
 },
};
</script>

<style scoped lang="scss">
.ds-select {
 width: 413px;
 margin: 20px auto;
 width: 298px;

 >div {
  display: flex;
  align-items: center;
 }

 label {
  color: #4b4b4b;
  text-align: left;
  line-height: 20px;
  font-size: 15px;
 }

 .selector {
  border: 1px solid #9b9b9b;
  position: relative;
  z-index: 1;
  border-radius: 2px;
    padding: 2px 2px 2px 10px;
  border-radius: 3px;
  border: 1px solid #8a8886;
  background-color: #ffffff;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  color: #595959;
  font-size: 12px;
  height: 36px;

  .arrow {
   align-content: center;
   position: absolute;
   width: 0;
   height: 0;
   border-left: 7px solid transparent;
   border-right: 7px solid transparent;
   transition-duration: 0.3s;
   right: 13px;
   top: 19%;
  }

  .selected {
   display: block;
   padding: 6px 12px;
  }
 }

 ul {
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  position: absolute;
  z-index: 1;
  background: white;
  max-height: 300px;
  overflow-y: auto;
  margin-top: 1px;
  border-radius: 1px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.04);
  border: 1px solid #9b9b9b;
  top: 100%;
  right: 0%;
  font-size: 12px;
 }

 li {
  padding: 3px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
   color: white;
   background-color: #0091F7;
  }

  img {
   width: 16px;
   height: 12px;
  }
 }

 .current {
  background: #498CE9;
  color: white;
 }

 .search {
  border: none;
  border-radius: 0px;
  padding-left: 2rem;
  height: 35px;
 }

 .search-icon {
  position: absolute;
  top: 10px;
  left: 2%;
 }

 .is-required {
  color: red;
 }
}
</style>
