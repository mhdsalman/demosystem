<template>
 <div class="ds-backconnect">
  <!-- header -->
  <header>
   <div class="left">
    <p id="all-bank-accounts">All Bank Accounts</p>
    <ds-input class="api-key" placeholder="Enter API key" />
    <ds-select v-model="account" :list="list" />
   </div>
   <div class="right">
    <ds-button label="Add Account" @click="show = false" />
   </div>
  </header>
  <ds-card>
 <div>
      <ds-table class="table-view" :header="tableHeader" v-model="filterData">
        <template #icon="row">
          <p class="text-td">{{row.data.date}}</p>
        </template>
        <template #name="row">
          <p class="text-td">{{ row.data.paymentPartner }}</p>
        </template>
        <template #status="row">
            <p class="text-td">{{ row.data.ammount }}</p>
        </template>
        <template #transactionsFetched="row">
          <p class="text-td pl-1">{{ row.data.referencePurpose }}</p>
        </template>
        <template #lastRun="row">
          <p class="text-td">{{ row.data.TransactionDate }}</p>
        </template>
        <template #actions="row">
          <a class="text-td">{{ row.data.refresh }}</a>
          <a class="text-td">{{ row.data.setting }}</a>
          <a class="text-td">{{ row.data.delete }}</a>

        </template>
      </ds-table>
 </div>
</ds-card>
  <!-- modal -->
  <add-account :show-modal="show" />
 </div>
</template>

<script>
import DsInput from '../../components/DsInput.vue'
import DsButton from '../../components/DsButton.vue'
import DsSelect from '../../components/DsSelect.vue'
import AddAccount from './partials/AddAccount.vue'
import DsCard from '../../components/DsCard.vue'
export default {
 name: "Transactions",
 data: () => ({
  account: '',
  list: ['-Account-', 'Account 1', 'Account 2'],
  show: false,
 }),
 components: { DsInput, DsButton, DsSelect, AddAccount, DsCard },
}
</script>

<style lang="scss" scoped>
.ds-backconnect {
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