<template>
  <section class="container">
    <!-- TODO: create "going to: _id" view -->
  </section>
</template>

<script>
export default {
  name: 'SingleRejection',
  async asyncData({ app }) {
    const { redirects } = await app.$content('db').fetch()
    return {
      redirects,
    }
  },
  mounted() {
    // set vars
    const id = this.$route.params.id
    // check if id exist in db
    if (id in this.redirects) {
      // go to chosen website / url
      window.location.href = this.redirects[id].url
    } else {
      // go to error / 404 page
      this.$router.push({
        path: '/404',
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>
