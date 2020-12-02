<template>
  <div class="social section">
    <SvgSocial />
    <div class="social-items">
      <div v-for="item in db" :key="item.name" class="social-item">
        <img
          :src="require(`@/assets/img/${item.name}.svg`)"
          class="social-image"
        />
        <a :href="`https://imirr.com/${item.name}`" class="social-url">
          {{ `imirr.com/${item.name}` }}
        </a>
        <a :href="`https://www.${item.fullUrl}`" class="social-full-url">
          {{ item.fullUrl }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Social',
  props: {
    db: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  & > div {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    // height: 100%;
  }

  &-items {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 20rem;
    @include set-size(true, 20rem, 25rem, 30rem, 32rem);

    a {
      @include set-font('roboto');
      text-transform: uppercase;
    }
  }

  &-image {
    width: 5rem;
    @include set-size(true, 5rem, 5rem, 8rem, 8rem);
  }

  &-url {
    margin-top: 2rem;
    font-size: 1.5rem;
    @include set-font-size(1.5rem, 1.75rem, 2rem, 2.25rem);
    color: $text-purple;
  }

  &-full-url {
    margin-top: 1rem;
    font-size: 1.25rem;
    @include set-font-size(1.25rem, 1.5rem, 1.75rem, 2rem);
    color: $text-third;
  }
}
</style>
