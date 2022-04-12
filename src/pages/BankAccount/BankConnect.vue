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
      <template #body>
         
         <ds-table class="table-view" :header="tableHeader" v-model="bodyData">
        <template #icon="row">
          <p class="text-td">{{row.data.image}}</p>
        </template>
        <template #name="row">
          <p class="text-td">{{ row.data.name }}</p>
        </template>
        <template #status="row">
            <ds-image class="status-logo" :name="row.data.colorIcon" />
            <p class="text-td">{{ row.data.status }}</p>
              <ds-image
                v-if="row.data.title === 'refresh'"
                name="help"
              />
        </template>
        <template #transactionsFetched="row">
          <p class="text-td pl-1">{{ row.data.transactionsFetched }}</p>
        </template>
        <template #lastRun="row">
          <p class="text-td">{{ row.data.lastFetched }}</p>
        </template>
        <template #actions="row">
          <a class="text-td">{{ row.data.refresh }}</a>
          <a class="text-td">{{ row.data.setting }}</a>
          <a class="text-td">{{ row.data.delete }}</a>

        </template>
      </ds-table>
      </template>
    </ds-card>
    <!-- modal -->
    <add-account :show-modal="show" />
  </div>
</template>

<script>
import DsInput from "../../components/DsInput.vue";
import DsButton from "../../components/DsButton.vue";
import DsSelect from "../../components/DsSelect.vue";
import AddAccount from "./partials/AddAccount.vue";
import DsCard from "../../components/DsCard.vue";
import DsTable from "../../components/DsTable.vue";

const people = [
  {
    transactionsFetched: 5,
    name: "Bank of America",
    status: "Successfully connected",
    refresh: "Refresh",
    setting: "Settings",
    delete: "Delete",
    lastFetched: "24/03/21 - 03:37 PM",
    image: "Logo Icon",
    colorIcon: "light-gray",
  },
  {
    transactionsFetched: 2,
    name: "Barclays",
    title: "refresh",
    status: "Connection requires refresh ",
    refresh: "Refresh",
    setting: "Settings",
    delete: "Delete",
    lastFetched: "24/03/21 - 03:37 PM",
    image: "Logo Icon",
    colorIcon: "gray",
  },
  {
    transactionsFetched: 4,
    title: "refresh",
    name: "Paypal",
    status: "Connection disabled",
    refresh: "Refresh",
    setting: "Settings",
    delete: "Delete",
    lastFetched: "24/03/21 - 03:37 PM",
    image: "Logo Icon",
    colorIcon: "black",
  },
  {
    transactionsFetched: 7,
    name: "XERO",
    status: "Successfully connected",
    refresh: "Refresh",
    setting: "Settings",
    delete: "Delete",
    lastFetched: "24/03/21 - 03:37 PM",
    image: "Logo Icon",
    colorIcon: "light-gray",
  },
  {
    transactionsFetched: 8,
    name: "Bank of America",
    status: "Connection requires refresh",
    title: "refresh",
    refresh: "Refresh",
    setting: "Settings",
    delete: "Delete",
    lastFetched: "24/03/21 - 03:37 PM",
    image: "Logo Icon",
    colorIcon: "gray",
  },
  {
    transactionsFetched: 7,
    name: "Barclays",
    status: "Connection disabled",
    title: "refresh",
    refresh: "Refresh",
    setting: "Settings",
    delete: "Delete",
    lastFetched: "24/03/21 - 03:37 PM",
    image: "Logo Icon",
    colorIcon: "black",
  },
  {
    transactionsFetched: 9,
    name: "Paypal",
    status: "Successfully connected",
    refresh: "Refresh",
    setting: "Settings",
    delete: "Delete",
    lastFetched: "24/03/21 - 03:37 PM",
    image: "Logo Icon",
    colorIcon: "light-gray",
  },
  {
    transactionsFetched: 2,
    name: "XERO",
    status: "Connection requires refresh",
    title: "refresh",
    refresh: "Refresh",
    setting: "Settings",
    delete: "Delete",
    lastFetched: "24/03/21 - 03:37 PM",
    image: "Logo Icon",
    colorIcon: "gray",
  },
  {
    transactionsFetched: 1,
    name: "Bank of America",
    status: "Connection disabled",
    title: "refresh",
    refresh: "Refresh",
    setting: "Settings",
    delete: "Delete",
    lastFetched: "24/03/21 - 03:37 PM",
    image: "Logo Icon",
    colorIcon: "black",
  },
  {
    transactionsFetched: 2,
    name: "Barclays",
    status: "Successfully connected",
    refresh: "Refresh",
    setting: "Settings",
    delete: "Delete",
    lastFetched: "24/03/21 - 03:37 PM",
    image: "Logo Icon",
    colorIcon: "light-gray",
  },
  {
    transactionsFetched: 5,
    name: "Paypal",
    status: "Connection requires refresh",
    title: "refresh",
    refresh: "Refresh",
    setting: "Settings",
    delete: "Delete",
    lastFetched: "24/03/21 - 03:37 PM",
    image: "Logo Icon",
    colorIcon: "gray",
  },
  {
    transactionsFetched: 4,
    name: "XERO",
    status: "Connection disabled",
    title: "refresh",
    refresh: "Refresh",
    setting: "Settings",
    department: "Sales",
    delete: "Delete",
    lastFetched: "24/03/21 - 03:37 PM",
    image: "Logo Icon",
    colorIcon: "black",
  },
];
export default {
  name: "Transactions",
  data: () => ({
    account: "",
    list: ["-Account-", "Account 1", "Account 2"],
    show: false,
    selected: null,
    people,
    tableHeader: [
      {
        label: "Logo",
        name: "icon",
        space: "half",
      },
      {
        label: "name",
        name: "name",
      },
      {
        label: "Status",
        name: "status",
        space: "status",
      },
      {
        label: "Transactions Fetched",
        name: "transactionsFetched",
      },
      {
        label: "Last Fetcheds",
        name: "lastRun",
        space: "trnsDate",
      },
    ],
  }),
  components: { DsInput, DsButton, DsSelect, AddAccount, DsCard, DsTable },
  computed:{
      bodyData(){
         return this.people
      }
  }
};
</script>

<style lang="scss" scoped>
.ds-backconnect {
   padding:0px 85px 16px 16px;

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
