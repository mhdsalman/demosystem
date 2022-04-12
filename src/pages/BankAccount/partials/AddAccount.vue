<template>
  <div>
    <ds-modal modal-label="Add Account" :visible="isModalVisible" :show-action="false" @toggle="toggle">
      <template #content>
        <div class="content">
          <p>From where do you want to import data</p>
          <div class="connections">
            <ds-connection-card v-for="item in connections" @click="onCheck(item)" :key="item.id" :label="item.name"
              :check="item.isCheck" />
          </div>
          <div class="actions">
            <ds-button class="next" v-if="step <= connections.length - 1" width="120" label="Next" @click="goNext" />
            <ds-button class="previous" v-if="step > 0 && connections.length - 1" width="120" label="Previous"
              @click="goBack" />
            <ds-button class="finish" v-else width="120" label="Finish" @click="onSubmit" />
          </div>
        </div>
      </template>
    </ds-modal>
  </div>
</template>

<script>
import DsModal from "../../../components/DsModal.vue"
import DsConnectionCard from "../../../components/DsConnectionCard.vue"
import DsButton from "../../../components/DsButton.vue"
export default {
  name: "Add Account",
  data: () => ({
    connections: [
      {
        id: 'bank',
        name: 'Bank / Credit Card',
        isCheck: false
      },
      {
        id: 'paypal',
        name: 'PayPal',
        isCheck: false
      },
      {
        id: 'stripe',
        name: 'Stripe',
        isCheck: false
      }, {
        id: 'accounting',
        name: 'Accounting Software',
        isCheck: false
      }
    ],
    checkedItem: null,
    step: 0,
  }),
  props: {
    showModal: {
      type: Boolean,
      default: false,
    }
  },
  watch: {
    showModal(val) {
      this.isModalVisible = val;
    }
  },
  methods: {
    onCheck(item) {
      this.checkedItem = item;
      //logic to update the item
      this.connections.forEach((connection, index) => {
        if (connection.id === item.id) {
          this.connections[index].isCheck = true;
        } else {
          this.connections[index].isCheck = false;
        }
      })
    },
    goNext() {
      if (this.checkedItem && this.step < this.connections.length - 1) {
        this.step = this.step + 1
      }
    },
    goBack() {
      if (this.step < 1) {
        return
      }
      this.step--;
    },
    onSubmit() {
      //close modal
    },
    toggle(visible) {
      console.log(visible)
      this.isModalVisible = false;
    }
  },
  components: {
    DsModal,
    DsButton,
    DsConnectionCard
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  >p {
    font-size: 22px;
    font-weight: 600;

    :hover {
      text-decoration: underline;
    }
  }

  .connections {
    display: flex;
  }

  .actions {
    padding: 25px 0;
    display: flex;

    .next,
    .previous,
    .finish {
      margin: 0 8px;
    }
  }
}
</style>