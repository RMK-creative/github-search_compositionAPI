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
  <section class="user-search">
    <form
      class="user-search__form"
      action="user-search"
      @submit.prevent="store.methods.getUser()"
    >
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
      />
      <input
        class="user-search__button"
        id="search__button"
        type="submit"
        value="submit"
      />
      <p class="error"></p>
    </form>
  </section>

  <div class="card-wrapper">
    <section class="user-card">
      <header>
        <img :src="store.state.user.avatar" alt="" width="117" />
        <h2 class="user-card__name">{{ store.state.user.name }}</h2>
        <h3 class="user-card__handle">@{{ store.state.user.handle }}</h3>
        <h4 class="user-card__joined">Joined {{ store.state.user.joined }}</h4>
        <p class="user-card__blurb">{{ store.state.user.bio }}</p>

        <section class="user-card__stats">
          <ul>
            <li>
              <span class="user-card__stat-label">Repos </span>
              <span class="user-card__stat-number">{{
                store.state.user.repos
              }}</span>
            </li>
            <li>
              <span class="user-card__stat-label">Followers </span>
              <span class="user-card__stat-number">{{
                store.state.user.followers
              }}</span>
            </li>
            <li>
              <span class="user-card__stat-label">Following </span>
              <span class="user-card__stat-number">{{
                store.state.user.following
              }}</span>
            </li>
          </ul>
        </section>

        <section>
          <ul class="user-card__contact">
            <li>
              <span></span>
              Location {{ store.state.user.location }}
            </li>
            <li>
              <span></span>
              Blog {{ store.state.user.blog }}
            </li>
            <li>
              <span></span>
              Twitter @{{ store.state.user.twitter }}
            </li>
            <li>
              <span></span>
              Company {{ store.state.user.company }}
            </li>
          </ul>
        </section>
      </header>
    </section>
  </div>
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
  mounted() {
    const store = inject("store"); // access state
    store.methods.getUser(); //

    // get user light/dark theme preference & add class name to root element for styling
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      store.state.userThemeSetting = "dark-theme";
      document.documentElement.className = "dark-theme";
    } else {
      store.state.userThemeSetting = "light-theme";
      document.documentElement.className = "light-theme";
    }

    // set themeIsLight to match user preference
    store.state.userThemeSetting === "light"
      ? (store.state.themeIsLight = true)
      : (store.state.themeIsLight = false);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* navigation */

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
  }
}

.user-card {
  background-color: var(--card-bg);
  color: var(--text-primary);
}

// search bar

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
    font-weight: 700;
  }
}

::placeholder {
  color: var(--text-primary);
}
</style>
