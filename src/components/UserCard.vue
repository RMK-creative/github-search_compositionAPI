<template>
  <div class="card-wrapper">
    <section
      class="user-card"
      :class="{ 'box-shadow': store.state.themeIsLight }"
    >
      <header class="user-card__header">
        <img
          class="user-card__avatar"
          :src="store.state.user.avatar"
          alt="{{ store.state.user.name }}"
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

      <section class="user-card__bio">
        <p>{{ store.state.user.bio || "This user has no bio" }}</p>
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
          <li :class="{ 'filter-grey': !store.state.user.location }">
            <span>
              <img
                class="user-card__contact-icon"
                src="@/assets/icon-location.svg"
                alt=""
                aria-hidden="true"
              />
            </span>
            {{ store.state.user.location || "Not available" }}
          </li>
          <li :class="{ 'filter-grey': !store.state.user.blog }">
            <span>
              <img
                class="user-card__contact-icon"
                src="@/assets/icon-website.svg"
                alt=""
                aria-hidden="true"
              />
            </span>
            {{ store.state.user.blog || "Not available" }}
          </li>
          <li :class="{ 'filter-grey': !store.state.user.twitter }">
            <span>
              <img
                class="user-card__contact-icon"
                src="@/assets/icon-twitter.svg"
                alt=""
                aria-hidden="true"
              />
            </span>
            {{ store.state.user.twitter || "Not available" }}
          </li>
          <li :class="{ 'filter-grey': !store.state.user.company }">
            <span>
              <img
                class="user-card__contact-icon"
                src="@/assets/icon-company.svg"
                alt=""
                aria-hidden="true"
              />
            </span>
            {{ store.state.user.company || "Not available" }}
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
    store.methods.getUser();

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
  position: relative;
  @include breakpoint_large {
  }

  // **** header section **** //
  &__header {
    display: flex;
    gap: 1.25rem;
  }

  &__avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    @include breakpoint_medium {
      width: 117px;
      height: 117px;
    }
    @include breakpoint_large {
      position: absolute;
      left: 2rem;
      top: 2rem;
    }
  }

  &__header--text {
    @include breakpoint_large {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  &__name {
    color: var(--text-secondary);
    font-size: 1rem;
    @include breakpoint_medium {
      font-size: 1.625rem;
    }
  }

  &__handle,
  &__joined {
    font-size: 0.8125rem;
    font-weight: 300;
    @include breakpoint_medium {
      font-size: 0.9375rem;
    }
  }

  &__handle {
    color: var(--btn-blue);
    margin-bottom: 5px;
  }

  &__joined {
    font-weight: 400;
    @include breakpoint_medium {
      font-size: 0.9375rem;
    }
  }

  &__bio {
    margin-top: 1rem;
    font-size: 0.8125rem;
    font-weight: 400;
    max-width: 30rem;
    @include breakpoint_medium {
      font-size: 0.9375rem;
    }
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
      @include breakpoint_medium {
        font-size: 0.8125rem;
      }
    }

    &-number {
      color: var(--text-secondary);
      font-size: 1rem;
      margin-top: 0.8rem;
      @include breakpoint_medium {
        font-size: 1.375rem;
        text-align: left;
        margin-top: 0.3rem;
      }
    }
  }

  // **** contact section **** //
  &__contact {
    margin-top: 2rem;
    font-size: 0.8125rem;
    @include breakpoint_medium {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      min-height: 4rem;
      max-height: 7rem;
      font-size: 0.9375rem;
    }

    & > li:first-child {
      margin-left: 5px;
    }

    & li {
      margin: 0.75rem 0;
      display: flex;
      @include breakpoint_medium {
        margin: 0.4rem 0;
      }
    }

    &-icon {
      margin-right: 1rem;
    }
  }
}

.user-card__header,
.user-card__bio,
.user-card__stats,
.user-card__contact {
  @include breakpoint_large {
    margin-left: 10rem;
  }
}
</style>
