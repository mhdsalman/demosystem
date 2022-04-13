<template>
  <div>
    <ds-modal
      v-if="isModalVisible"
      modal-label="Add Account"
      :visible="true"
      :show-action="false"
      @toggle="toggle"
    >
      <template #content>
        <div class="content">
          <div v-if="step === 0">
            <p>From where do you want to import data</p>
            <div class="connections">
              <ds-connection-card
                v-for="item in connections"
                @click="onCheck(item)"
                :key="item.id"
                :label="item.name"
                :check="item.isCheck"
              />
            </div>
          </div>

          <div class="data-source" v-else-if="step === 1">
            <h1>API Key</h1>
            <ds-input lable="API Key" placeholder="Enter API Key" />
          </div>

          <div class="finishing" v-else>
            <ds-svg name="finishing" class="finishing-svg" />
            <h1>Congratulations</h1>
            <p>Connection added successfully</p>
          </div>

          <div class="actions">
            <ds-button
              class="previous"
              v-if="step > 0 && step < connections.length && step !== 2"
              width="112"
              label="Previous"
              @click="goBack"
            />
            <ds-button
              class="next"
              v-if="step < connections.length && step !== 2"
              width="112"
              label="Next"
              @click="goNext"
            />
            <ds-button
              class="finish"
              v-else
              width="120"
              label="Finish"
              @click="onSubmit"
            />
          </div>
        </div>
      </template>
    </ds-modal>
  </div>
</template>

<script>
import DsModal from "../../../components/DsModal.vue";
import DsConnectionCard from "../../../components/DsConnectionCard.vue";
import DsButton from "../../../components/DsButton.vue";
import DsInput from "../../../components/DsInput.vue";
import DsSvg from "../../../components/DsSvg.vue";
export default {
  name: "Add Account",
  data: () => ({
    connections: [
      {
        id: "bank",
        name: "Bank / Credit Card",
        isCheck: false,
      },
      {
        id: "paypal",
        name: "PayPal",
        isCheck: false,
      },
      {
        id: "stripe",
        name: "Stripe",
        isCheck: false,
      },
      {
        id: "accounting",
        name: "Accounting Software",
        isCheck: false,
      },
    ],
    checkedItem: null,
    step: 0,
  }),
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    showModal(val) {
      this.isModalVisible = val;
    },
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
      });
    },
    goNext() {
      if (this.checkedItem && this.step < this.connections.length) {
        this.step = this.step + 1;
      }
    },
    goBack() {
      if (this.step < 1) {
        return;
      }
      this.step--;
    },
    onSubmit() {
      this.toggle();
    },
    toggle() {
      this.isModalVisible = false;
      this.$emit("close");
      //Resetting form
      this.step = 0;
      this.checkedItem = null;
      this.connections.forEach((connection, index) => {
        this.connections[index].isCheck = false;
      });
    },
  },
  components: {
    DsModal,
    DsButton,
    DsConnectionCard,
    DsInput,
    DsSvg,
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100%;

  p {
    font-size: 22px;
    font-family: "PingFang SC ", "PingFang SC", sans-serif;
    color: #000000;

    :hover {
      text-decoration: underline;
    }
  }

  .connections {
    display: flex;
  }
  .finishing,.data-source h1 {
    font-family: "PingFang SC ", "PingFang SC", sans-serif;
    color: #000000;
    font-size: 22px;
  }
  .data-source h1 {
    margin-bottom: 53px ;
  }
  .data-source{
    width: 23%;
  }
  .finishing p {
    font-family: "Roboto Light", "Roboto Regular", "Roboto", sans-serif;
    font-weight: 300;
    color: #333333;
    font-size: 14px;
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
