<template>
  <div class="giveaway section">
    <SvgGiveaway />
    <div class="giveaway-body">
      <!--  -->
      <div v-for="item in db" :key="item.name" class="giveaway-item">
        <div class="giveaway-item-body">
          <div class="giveaway-item-img">
            <img :src="item.urlImage" :alt="item.name" />
          </div>
          <div class="giveaway-item-desc">
            <h4>{{ item.name }}</h4>
            <h3>{{ item.skin }}</h3>
          </div>
        </div>
        <div class="giveaway-item-btn">
          <a href="#" class="">zobacz</a>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Giveaway',
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
.giveaway {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  &-body {
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
  }
  &-item {
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-body {
      width: 100%;
      @include set-size(true, 90%, 75%, 60%, 50%);

      position: relative;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-img {
      position: absolute;
      width: 100%;
      padding-top: 3rem;
      padding-left: 2rem;
      filter: brightness(60%);

      img {
        @include set-query($small) {
          transform: scale(1);
        }
        @include set-query($medium) {
          transform: scale(1.15);
        }
        @include set-query($large) {
          transform: scale(1.45);
        }
        @include set-query($extra) {
          transform: scale(2);
        }
      }
    }

    &-desc {
      position: absolute;
      width: 100%;
      text-align: right;

      padding-right: 12.5%;

      h3 {
        font-size: 3rem;
        @include set-font-size(3rem, 5rem, 7rem, 7rem);
        color: $text-secondary;
      }

      h4 {
        font-size: 2rem;
        @include set-font-size(1.5rem, 2rem, 2.5em, 3.25rem);
        color: $text-third;
      }
    }

    &-btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 6rem;

      a {
        margin: 0 auto;
        padding: 1rem 2rem;
        font-size: 1rem;
        @include set-font-size(1rem, 1rem, 1.25em, 1.75rem);
        text-transform: uppercase;
        color: $text-purple;
        background: $bacground-primary-light;
      }
    }
  }
}
</style>
