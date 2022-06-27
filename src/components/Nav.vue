<template>
  <nav class="navbar">
    <h1 class="navbar__logo">dev<span>f</span>inder</h1>
    <button class="btn navbar__theme-btn" @click="store.methods.themeSwitch()">
      <span v-show="store.state.themeIsLight">
        dark
        <img
          src="@/assets/icon-moon.svg"
          alt="light theme active"
          aria-hidden="true"
        />
      </span>
      <span v-show="!store.state.themeIsLight">
        light
        <img
          src="@/assets/icon-sun.svg"
          alt="dark theme active"
          aria-hidden="true"
        />
      </span>
    </button>
  </nav>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const store = inject("store");

    return {
      store,
    };
  },
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.25rem 0;

  &__logo {
    color: var(--logo);
    font-size: 1.625rem;
    font-family: "Space Mono";
    font-weight: 700;
  }

  &__logo span {
    letter-spacing: -5px;
  }

  &__theme-btn {
    border: none;
    background-color: transparent;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.8125rem;
  }
}
</style>
