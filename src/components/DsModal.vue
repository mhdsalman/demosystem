<template>
  <div>
    <span @click="toggle">
      <slot name="modal"></slot>
    </span>
    <div v-if="visible" :class="['ds-modal']">
      <section :class="['ds-modal-section', `size-${size}`]">
        <header class="header">
          <span class="label">{{ modalLabel }}</span>
          <span @click="close">
            <ds-svg name="close" class="close" />
          </span>
        </header>
        <ds-divider />
        <content class="modal-content">
          <slot name="content"></slot>
        </content>
        <footer class="footer" v-if="showAction">
          <ds-button :label="cancelLabel" @click="toggle" />
          <ds-button :label="saveLabel" @click="save" />
        </footer>
      </section>
    </div>
  </div>
</template>

<script>
import DsDivider from "./DsDivider.vue";
import DsButton from "./DsButton.vue";
import DsSvg from "./DsSvg.vue";
export default {
  name: "dsModal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    modalLabel: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "md",
      validator: value => ["sm", "md", "lg"].some(size => size === value),
    },
    cancelLabel: {
      type: String,
      default: "Cancel",
    },
    saveLabel: {
      type: String,
      default: "Save",
    },
    showAction: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    DsButton,
    DsDivider,
    DsSvg,
  },
  methods: {
    toggle() {
      this.$emit("toggle", this.visible);
    },
    close() {
      this.$emit("toggle", this.visible);
    },
    save() {
      this.$emit("save");
    },
  },
};
</script>

<style lang="scss" scoped>
.ds-modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.548);
  animation-name: backdrop;
  animation-duration: 0.6s;

  &-section {
    animation-name: backdrop;
    animation-duration: 0.4s;
    min-width: 330px;
    background-color: white;
    padding: 18px;
    border-top: 4px solid #4b4b4b;

    .modal-content {
      max-height: 65vh;
      overflow-y: auto;
      border: none;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 8px 0px;

      .close {
        width: 15px;
        height: 15px;
        cursor: pointer;
        opacity: 1 !important;
      }

      .label {
        font-style: normal;
        font-size: 16px;
        font-family: "Segoe UI Bold", "Segoe UI Regular", "Segoe UI", sans-serif;
        font-weight: 700;
        color: #4b4b4b;
        color: #4b4b4b;
      }
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }

  .size {
    &-sm {
      width: 35%;
    }

    &-md {
      width: 55%;
      height: 533px;
    }

    &-lg {
      width: 75%;
    }
  }

  /*Modal animation*/
  @keyframes backdrop {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
}
</style>
