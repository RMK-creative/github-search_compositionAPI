<template>
  <div class="card-wrapper">
    <section class="user-card">
      <header class="user-card__header">
        <img
          class="user-card__avatar"
          :src="store.state.user.avatar"
          alt=""
          width="117"
        />
        <div class="user-card__header--text">
          <div>
            <h2 class="user-card__name">{{ store.state.user.name }}</h2>
            <h3 class="user-card__handle">@{{ store.state.user.handle }}</h3>
          </div>
          <h4 class="user-card__joined">
            Joined {{ formatDate(store.state.user.joined) }}
          </h4>
        </div>
      </header>

      <section>
        <p class="user-card__bio">{{ store.state.user.bio }}</p>
      </section>

      <section>
        <ul class="user-card__stats">
          <li class="user-card__stats-list-item">
            <span class="user-card__stats-label">Repos </span>
            <span class="user-card__stats-number">{{
              store.state.user.repos
            }}</span>
          </li>
          <li class="user-card__stats-list-item">
            <span class="user-card__stats-label">Followers </span>
            <span class="user-card__stats-number">{{
              store.state.user.followers
            }}</span>
          </li>
          <li class="user-card__stats-list-item">
            <span class="user-card__stats-label">Following </span>
            <span class="user-card__stats-number">{{
              store.state.user.following
            }}</span>
          </li>
        </ul>
      </section>

      <section>
        <ul class="user-card__contact">
          <li>
            <span>
              <img
                class="user-card__contact-icon"
                src="@/assets/icon-location.svg"
                alt=""
                aria-hidden="true"
              />
            </span>
            {{ store.state.user.location }}
          </li>
          <li>
            <span>
              <img
                class="user-card__contact-icon"
                src="@/assets/icon-website.svg"
                alt=""
                aria-hidden="true"
              />
              {{ store.state.user.blog }}
            </span>
          </li>
          <li>
            <span>
              <img
                class="user-card__contact-icon"
                src="@/assets/icon-twitter.svg"
                alt=""
                aria-hidden="true"
              />
              {{ store.state.user.blog }}
            </span>
            {{ store.state.user.twitter }}
          </li>
          <li>
            <span>
              <img
                class="user-card__contact-icon"
                src="@/assets/icon-company.svg"
                alt=""
                aria-hidden="true"
              />
              {{ store.state.user.blog }}
            </span>
            {{ store.state.user.company }}
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
import { inject } from "vue";
import Moment from "moment";

export default {
  methods: {
    formatDate(date) {
      return Moment(date).format("DD MMM YYYY");
    },
  },
  setup() {
    const store = inject("store");

    return {
      store,
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

<style lang="scss" scoped>
.user-card {
  background-color: var(--card-bg);
  color: var(--text-primary);
  width: 100%;
  border-radius: 10px;
  padding: 2rem 1.5rem;

  // **** header section **** //
  &__header {
    display: flex;
    gap: 1.25rem;

    &--text {
      @include breakpoint_large {
        display: flex;
      }
    }
  }

  &__avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  &__name {
    font-size: 1rem;
  }

  &__handle {
    color: var(--btn-blue);
  }

  &__handle,
  &__joined {
    font-size: 0.8125rem;
    font-weight: 300;
  }

  &__bio {
    margin-top: 1rem;
    font-size: 0.9375rem;
  }

  // **** stats section **** //
  &__stats {
    background-color: var(--primary-bg);
    padding: 1rem 1.5rem;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 3rem;
    max-width: 30rem;

    &-list-item {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 0.3rem;
      flex-wrap: wrap;
      max-width: 7ch;
    }

    &-label {
      font-size: 0.6875rem;
    }

    &-number {
      font-size: 1rem;
      font-weight: 700;
    }
  }

  // **** contact section **** //
  &__contact {
    margin-top: 2rem;
    font-size: 0.8125rem;

    & > li:first-child {
      margin-left: 5px;
    }

    & li {
      margin: 0.75rem 0;
      display: flex;
    }

    &-icon {
      margin-right: 1rem;
    }
  }
}
</style>
