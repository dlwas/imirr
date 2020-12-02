<template>
  <nav class="navbar container">
    <a href="#" class="navbar-item navbar-brand">IMMIR</a>
    <a href="#" class="navbar-item navbar-social button"> Kontakt </a>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  color: $text-secondary;
  background: $bacground-primary;

  &-item {
    @include set-font('roboto');
    padding: 1rem 2rem;
  }

  &-brand {
    font-size: 2.5rem;
  }

  &-social {
    font-size: 2rem;
  }
}
.button {
  background-color: #363636;
  border-color: transparent;
  color: #fff;
  border-width: 1px;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;

  border-radius: 2px;
  font-size: 1.5rem;
  margin-right: 1rem;
}
</style>
