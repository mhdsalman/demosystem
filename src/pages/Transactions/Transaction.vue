<template>
 <div class="ds-transaction">
  <!-- header -->
  <header>
   <div class="left">
    <p id="all-bank-accounts">All Transactions</p>
    <ds-input class="api-key" placeholder="Enter API key" />
    <ds-select v-model="account" :list="list" />
   </div>
   <div class="right">
    <ds-button label="All Transactions"/>
   </div>
  </header>
 </div>
</template>

<script>
import DsInput from '../../components/DsInput.vue'
import DsButton from '../../components/DsButton.vue'
import DsSelect from '../../components/DsSelect.vue'
import AddAccount from '../BankAccount/partials/AddAccount.vue'
export default {
 name: "Transactions",
 data: () => ({
  account: '',
  list: ['-Account-', 'Account 1', 'Account 2'],
  show: false,
 }),
 components: { DsInput, DsButton, DsSelect, AddAccount },
}
</script>

<style lang="scss" scoped>
.ds-transaction {
 padding: 16px;

 header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
   display: flex;
   justify-content: center;
   align-items: center;
   flex: 0.5;

   #all-bank-accounts {
    font-size: 22px;
    color: #323130;
    white-space: nowrap;
    font-weight: 600;
   }

   .api-key {
    margin: 0 20px;
   }
  }
 }
}
</style>