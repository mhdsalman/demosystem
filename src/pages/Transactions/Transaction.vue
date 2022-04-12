<template>
  <div class="ds-transaction">
    <!-- header -->
    <header>
      <div class="left">
        <p id="all-bank-accounts">All Transactions</p>
        <div class="input-fields">
        <ds-input class="api-key" placeholder="Accounts filter" />
        <ds-input class="api-key" placeholder="Bank Filter" />
      </div>
      </div>
      <div class="right">
        <ds-button label="Clean Transactions" width="171"/>
      </div>
    </header>
    <ds-card>
      <template #body>
        <ds-table class="table-view" :header="tableHeader" v-model="bodyData">
          <template #icon="row">
            <p class="text-td">{{ row.data.date }}</p>
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
      </template>
    </ds-card>
     <!-- footer -->
    <ds-footer />
  </div>
</template>

<script>
import DsInput from "../../components/DsInput.vue";
import DsButton from "../../components/DsButton.vue";
import DsSelect from "../../components/DsSelect.vue";
import AddAccount from "../BankAccount/partials/AddAccount.vue";
import DsTable from "../../components/DsTable.vue";
import DsCard from "../../components/DsCard.vue";
import DsFooter from '../../layout/DsFooter.vue';

const people = [
  {
    referencePurpose: "Purpose Detail",
    ammount: "€150",
    date: "03/02/22",
    TransactionDate: "03/02/22 - 03:37 PM",
    colorIcon: "light-gray",
    paymentPartner: "John Doe",
  },
  {
    referencePurpose: "Purpose Detail",
    ammount: "€250",
    date: "03/02/22",
    status: "refresh",
    TransactionDate: "03/02/22 - 03:37 PM",
    colorIcon: "gray",
    paymentPartner: "Alexis Phelipe",
  },
  {
    referencePurpose: "Purpose Detail",
    status: "refresh",
    ammount: "€150",
    date: "03/02/22",
    TransactionDate: "03/02/22 - 03:37 PM",
    colorIcon: "black",
    paymentPartner: "John Doe",
  },
  {
    referencePurpose: "Purpose Detail",
    ammount: "€250",
    date: "02/02/22",
    TransactionDate: "03/02/22 - 03:37 PM",
    colorIcon: "light-gray",
    paymentPartner: "Alexis Phelipe",
  },
  {
    referencePurpose: "Purpose Detail",
    ammount: "€150",
    date: "02/02/22",
    status: "refresh",
    TransactionDate: "03/02/22 - 03:37 PM",
    colorIcon: "gray",
    paymentPartner: "John Doe",
  },
  {
    referencePurpose: "Purpose Detail",
    ammount: "€250",
    date: "02/02/22",
    status: "refresh",
    TransactionDate: "03/02/22 - 03:37 PM",
    colorIcon: "black",
    paymentPartner: "Alexis Phelipe",
  },
  {
    referencePurpose: "Purpose Detail",
    ammount: "€150",
    date: "02/02/22",
    TransactionDate: "03/02/22 - 03:37 PM",
    colorIcon: "light-gray",
    paymentPartner: "John Doe",
  },
  {
    referencePurpose: "Purpose Detail",
    ammount: "€250",
    date: "01/02/22",
    status: "refresh",
    TransactionDate: "03/02/22 - 03:37 PM",
    colorIcon: "gray",
    paymentPartner: "Alexis Phelipe",
  },
  {
    referencePurpose: "Purpose Detail",
    ammount: "€150",
    date: "01/02/22",
    status: "refresh",
    TransactionDate: "03/02/22 - 03:37 PM",
    colorIcon: "black",
    paymentPartner: "John Doe",
  },
  {
    referencePurpose: "Purpose Detail",
    ammount: "€250",
    date: "01/02/22",
    TransactionDate: "03/02/22 - 03:37 PM",
    colorIcon: "light-gray",
    paymentPartner: "Alexis Phelipe",
  },
];
export default {
  name: "Transactions",
  data: () => ({
    account: "",
    list: ["-Account-", "Account 1", "Account 2"],
    show: false,
    people,
    tableHeader: [
      {
        label: "Date",
        name: "icon",
        space: "half",
      },
      {
        label: "Payment Partner",
        name: "name",
      },
      {
        label: "Amount",
        name: "status",
        space: "status",
      },
      {
        label: "Reference Purpose",
        name: "transactionsFetched",
      },
      {
        label: "Transaction Date",
        name: "lastRun",
        space: "trnsDate",
      },
    ],
  }),
  components: { DsInput, DsButton, DsSelect, AddAccount, DsTable, DsCard, DsFooter },
  computed: {
    bodyData() {
      return this.people;
    },
  },
};
</script>

<style lang="scss" scoped>
.ds-transaction {
  padding: 0px 85px 16px 16px;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      .input-fields{
          margin-left: 120px;
          display: flex;
      }

      #all-bank-accounts {
        font-size: 22px;
        color: #323130;
        white-space: nowrap;
        font-weight: normal;
        font-family: "Arial", sans-serif;
      }

      .api-key {
        margin: 0 5px;
      }
    }
  }
}
.text-td{
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  color: #333333;
  font-size: 12px;
}
</style>
