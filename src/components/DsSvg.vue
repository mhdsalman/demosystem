<template>
  <component :is="svg" />
</template>

<script>
export default {
  name: 'DsSvg',
  data: () => ({
    svg: null,
  }),
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  async created() {
    this.svg = await import(`../assets/images/${this.name}.svg`);
  },
}
</script>