<template>
  <section
    class="user-search"
    :class="{ 'box-shadow': store.state.themeIsLight }"
  >
    <form
      class="user-search__form"
      action="user-search"
      @submit.prevent="store.methods.getUser()"
    >
      <p v-if="store.state.error" class="user-search__error">No results</p>
      <img
        class="user-search__icon"
        src="@/assets/icon-search.svg"
        alt=""
        aria-hidden="true"
      />
      <input
        v-model="searchInput"
        type="text"
        placeholder="Search GitHub username"
        name="user-search"
        id="user-search"
        class="user-search__input"
        aria-label="search github username"
        autocomplete="off"
      />
      <input
        class="user-search__button"
        id="search__button"
        type="submit"
        value="search"
      />
      <p class="error"></p>
    </form>
  </section>
</template>

<script>
import { inject, computed } from "vue";

export default {
  setup() {
    const store = inject("store");
    const searchInput = computed({
      get() {
        return store.state.userSearch;
      },
      set(val) {
        // update state with value from search input
        store.methods.setUserSearch(val);
      },
    });

    return {
      store,
      searchInput,
    };
  },
};
</script>

<style lang="scss">
.user-search {
  color: var(--text-primary);
  background-color: var(--card-bg);
  padding: 0 1rem;
  border-radius: 10px;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 1rem;

  &__form {
    background-color: var(--card-bg);
    width: 100%;
  }

  &__input {
    background-color: var(--card-bg);
    outline: none;
    border: none;
    min-width: 80%;
    font-size: 0.8125rem;
    font-weight: 400;
    margin-left: 2rem;
    color: var(--text-primary);
    cursor: pointer;
    @include breakpoint_medium {
      font-size: 1.125rem;
    }
  }
  &__input:focus {
    outline: none;
    background-color: var(--card-bg);
  }

  &__icon {
    position: absolute;
  }

  &__button {
    position: absolute;
    top: 0.45rem;
    right: 0.45rem;
    padding: 0.75rem;
    font-size: 0.875rem;
    text-transform: capitalize;
    background-color: var(--btn-blue);
    color: var(--white);
    border: none;
    border-radius: 10px;
    font-weight: 400;
    cursor: pointer;

    @include breakpoint_medium {
      padding: 0.75rem 1.25rem;
      font-size: 1rem;
    }

    &:hover {
      background-color: var(--btn-blue-active);
    }
  }
  ::placeholder {
    color: var(--text-accent);
    opacity: 0.6;
  }

  .user-search__error {
    color: var(--error-red);
    position: absolute;
    top: 1.2rem;
    right: 6.5rem;
    font-size: 0.9375rem;
    @include breakpoint_medium {
      right: 7.5rem;
    }
  }
}
</style>
