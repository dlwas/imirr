<template>
  <div class="contact section">
    <SvgContact />
    <div>
      <h1>Contact</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
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
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  div {
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
  }
}
</style>
