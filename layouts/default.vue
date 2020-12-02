<template>
  <div class="default">
    <!-- <div class="gueryRes"></div> -->
    <Navbar />
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  @include set-font('anton');
  font-size: 10px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  background: $bacground-primary;
  color: $text-secondary;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
