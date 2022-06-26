<template>
  <main>
    <nav class="navbar">
      <h1 class="navbar__logo">dev<span>f</span>inder</h1>
      <button class="btn theme-btn" @click="store.methods.themeSwitch()">
        <span v-show="store.state.themeIsLight">
          dark
          <img src="@/assets/icon-moon.svg" alt="light theme active" />
        </span>
        <span v-show="!store.state.themeIsLight">
          light
          <img src="@/assets/icon-sun.svg" alt="dark theme active" />
        </span>
      </button>
    </nav>
    <div class="card-wrapper">
      <section class="user-card">
        <section class="search">
          <form action="user__search" @submit.prevent="store.methods.getUser()">
            <label for="">Search GitHub</label>
            <input
              v-model="searchInput"
              type="text"
              placeholder="Search GitHub username"
              name="user__search"
              id="user__search"
            />
            <input id="search__button" type="submit" value="submit" />
            <p class="error"></p>
          </form>
        </section>

        <section class="user">
          <header>
            <img :src="store.state.user.avatar" alt="" width="117" />
            <h2 class="user__name">{{ store.state.user.name }}</h2>
            <h3 class="user__handle">@{{ store.state.user.handle }}</h3>
            <h4 class="user__joined">Joined {{ store.state.user.joined }}</h4>
            <p class="user__blurb">{{ store.state.user.bio }}</p>

            <section class="user__stats">
              <ul>
                <li>
                  <span class="user__stat-label">Repos </span>
                  <span class="user__stat-number">{{
                    store.state.user.repos
                  }}</span>
                </li>
                <li>
                  <span class="user__stat-label">Followers </span>
                  <span class="user__stat-number">{{
                    store.state.user.followers
                  }}</span>
                </li>
                <li>
                  <span class="user__stat-label">Following </span>
                  <span class="user__stat-number">{{
                    store.state.user.following
                  }}</span>
                </li>
              </ul>
            </section>

            <section>
              <ul class="contact">
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
      </section>
    </div>
  </main>
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
<style scoped>
.card-wrapper {
}

/* navigation */

.navbar {
  display: flex;
  justify-content: space-between;
}

.navbar__logo {
  color: var(--logo);
}

.navbar__logo span {
  letter-spacing: -5px;
}

.user-card {
  background-color: var(--card-bg);
  color: var(--text-primary);
}
</style>
