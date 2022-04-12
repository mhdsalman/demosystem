<template>
  <img :src="path" alt="bank-connect" />
</template>

<script>
export default {
  name: 'DsImage',
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: '.svg'
    },
    isUrl: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    path () {
      if (this.isUrl) return this.name
      const asset = `${this.name}${this.type || ''}`
      return require('@/assets/images/' + asset)
    }
  }
}
</script>

<style lang="scss">
img {
  height: auto;
}
</style>
