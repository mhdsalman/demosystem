<template>
  <article class="card">
    <header v-if="hasHeader" class="card-header">
      <slot name="header" />
    </header>
    <section class="card-body">
      <slot name="body" />
    </section>
    <footer v-if="hasFooter" class="card-footer">
      <slot name="footer" />
    </footer>
  </article>
</template>
<script>
export default {
  name: "Card",
  computed: {
    hasHeader() {
      return !!this.$slots.header;
    },
    hasFooter() {
      return !!this.$slots.footer;
    },
  },
};
</script>

<style lang="scss" scoped>

.card {
  width: 100%;
  height: 100%;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.13);
  padding: 2px;
  border-radius: 2px;
  border: none;
  // Slots
  &-header {
    padding: 0px;
  }
  &-body {
    padding: 0px;
  }
  &-footer {
    padding: 0px;
  }
}
</style>
