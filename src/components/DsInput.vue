<template>
 <div class="ds-input">
  <div class="label-header">
   <p :for="type" v-if="label">{{ label }}</p>
   <span v-if="isRequired" class="is-required">*</span>
  </div>
  <input v-model="inputValue" :placeholder="placeholder" :type="type" :class="[ inputClass ? 'bank-input': 'input']" @input="inputHandler($event)"
   @blur="handleBlur" @focus="onFocus" :required="isRequired" :color="isError ? 'danger' : 'secondary'" />
   <ds-svg v-if="iconName" :name="iconName" class="custom-svg"/>
 </div>
</template>

<script>
import DsSvg from "./DsSvg.vue";
export default {
 props: {
  value: {
   type: String,
   default: "",
  },
  placeholder: {
   type: String,
   default: "Enter Input",
  },
  type: {
   type: String,
   default: "text",
  },
  isRequired: {
   type: Boolean,
   default: false,
  },
  label: {
   type: String,
   default: "",
  },
  inputClass:{
    type: String,
    default:''
  },
  iconName:{
    type: String,
    default:''
  }
 },
 components: {
  DsSvg,
 },
 created() {
  this.inputValue = this.value;
 },
 data: () => ({
  inputValue: "",
  isError: false,
 }),
 methods: {
  handleBlur() {
   if (!this.isRequired) {
    return;
   }
   if (this.inputValue === "") {
    this.isError = true;
   } else if (this.type.toLowerCase() === "email") {
    const pattern =
     /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(this.inputValue.toString().toLowerCase())) {
     this.isError = true;
    }
   } else if (this.type.toLowerCase() === "tel") {
    const pattern = /^(?=.*[0-9])[ +0-9]+$/;
    if (!pattern.test(this.inputValue.toString().toLowerCase())) {
     this.isError = true;
    }
   }
   this.$emit("blur");
  },
  inputHandler(event) {
   this.$emit("input", event.target.value);
  },
  onFocus() {
   this.$emit("focus");
  },
 },
 beforeUnmount() {
  this.isError = false;
 },
};
</script>

<style lang="scss" scoped>
.ds-input {
 width: 100%;

 /*Is Required*/
 .is-required {
  color: lightcoral;
 }

 .label-header {
  display: flex !important;
  align-items: center;

  p {
   font-size: 15px;
   margin: 5px 0;
   line-height: 20px;
  }
 }

 .input {
  outline: none;
  width: 240px;
  height: 30px;
  padding: 2px 2px 2px 10px;
  border-radius: 2px;
  border: 1px solid #8a8886;
  background-color: ffffff;
  box-sizing: border-box;
  font-size: 14px;
  color: #323130;
  text-overflow: ellipsis;
 }
 .bank-input{
  width: 240px;
  height: 36px;
  padding: 2px 28px 2px 10px;
  border-radius: 2px;
  border: 1px solid #8a8886;
  background-color: #ffffff;
  box-sizing: border-box;
  font-family: 'PingFang SC ', 'PingFang SC', sans-serif;
  color: #323130;
  position: relative;
 }
 .input:focus-visible {
  border: 2px solid #0091f7;
 }
 .bank-input:focus-visible{
    border: 2px solid #000 !important;
 }
 .custom-svg{
  position: absolute;
   
    margin-left: -24px;
    margin-top: 14px;
 }
}
</style>
