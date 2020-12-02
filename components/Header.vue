<template>
  <div class="header section">
    <SvgHome />
    <div>
      <iframe scrolling="no" type="text/html" :src="getVideoUrl"></iframe>
      <h1>{{ getVideoTitle }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    db: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  computed: {
    getVideoUrl() {
      // https://developers.google.com/youtube/player_parameters?hl=pl
      const id = this.db.imirr[0].videoId
      return `https://www.youtube.com/embed/${id}?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&enablejsapi=1`
    },
    getVideoTitle() {
      const title = this.db.imirr[0].title
      return title
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
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
    margin-top: -5rem;

    iframe {
      $size: 40rem;
      width: $size;
      height: $size / 1.78;
      @include set-size(false, 45rem, 50rem, 60rem, 70rem);
      border: none;
    }

    h1 {
      font-size: 3rem;
      @include set-size(true, 45rem, 50rem, 60rem, 70rem);
      @include set-font-size(3.5rem, 3.5rem, 3.5rem, 3.5rem);

      padding-top: 5rem;
      font-weight: 400;
      text-align: center;
      text-transform: uppercase;
    }
  }
}
</style>
