<template>
  <div class="channel section">
    <SvgContact />
    <Social />
    asdasdsa
  </div>
</template>

<script>
export default {
  name: 'Channel',
  props: {
    background: {
      type: String,
      default: 'home',
    },
    db: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.channel {
}
</style>
