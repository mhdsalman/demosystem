<template>
  <div class="footer-selector">
    <ds-select v-model="account" :list="list" class="ds-selector" />
    <div class="footer-btn">
      <ds-button label="Pre" customStyle="true" />
      <ds-button label="Next" customStyle="true" />
      <p>Total 1 / 10 pages</p>
    </div>
  </div>
</template>
<script>
import DsButton from "../components/DsButton.vue";
import DsSelect from "../components/DsSelect.vue";
export default {
  data: () => ({
    list: ["10 Results page", "25 Results page", "50 Results page"],
  }),
  components: { DsSelect, DsButton },
};
</script>
<style lang="scss">
.footer-selector .ds-selector {
  width: 150px !important;
  height: 32px;
  float: left;
  margin: 30px auto 70px auto;
}
.footer-selector .ds-selector .selector{
  border: 1px solid #e4e4e4 !important;
}
.footer-btn {
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-right: 30px;
}
.footer-btn {
  button {
    margin-right: 20px;
  }
  p {
    font-family: "Arial", sans-serif;
    color: #999999;
    font-size: 12px;
  }
}
</style>
