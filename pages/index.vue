<template>
  <vue-scroll-snap :fullscreen="true" class="index">
    <Header :db="videos" class="item" />
    <Giveaway :db="giveaway" class="item" />
    <Social :db="social" class="item" />
    <Contact :db="contact" class="item" />
  </vue-scroll-snap>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ app }) {
    const db = await app.$content('db').fetch()
    return {
      videos: db.videos,
      giveaway: db.giveaway,
      social: db.social,
      contact: db.contact,
    }
  },
  mounted() {},
}
</script>

<style lang="scss"></style>
