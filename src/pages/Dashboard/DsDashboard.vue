<template>
 <div>
  <ds-modal modal-label="Add Account" :visible="false" :show-action="false" />
  <ds-connection-card label="software" icon="user" :check="true" />
 </div>
</template>

<script>
import DsModal from "../../components/DsModal.vue";
import DsConnectionCard from "../../components/DsConnectionCard.vue";
export default {
 name: "DsDashboard",
 components: {
  DsModal,
  DsConnectionCard
 }
}
</script>

<style lang="scss" scoped>
</style>