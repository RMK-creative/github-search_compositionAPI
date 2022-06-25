<template>
  <main>
    <div>
      <section class="user-card">
        <nav class="navbar">
          <h1 class="navbar__logo">devfinder</h1>
          <button class="btn">
            <span>
              dark
              <img src="@/assets/icon-moon.svg" alt="light theme active" />
            </span>
            <span>
              light
              <img src="@/assets/icon-sun.svg" alt="dark theme active" />
            </span>
          </button>
        </nav>

        <section class="search">
          <form action="user__search" @submit.prevent="searchUser">
            <label for="">Search GitHub</label>
            <input
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
            <!-- <img :src="user.avatar" alt="" /> -->
            <h2 class="user__name"></h2>
            <h3 class="user__handle">@</h3>
            <h4 class="user__joined">Joined</h4>
            <p class="user__blurb"></p>

            <section class="user__stats">
              <ul>
                <li>
                  <span class="user__stat-label">Repos </span>
                  <span class="user__stat-number"></span>
                </li>
                <li>
                  <span class="user__stat-label">Followers </span>
                  <span class="user__stat-number"></span>
                </li>
                <li>
                  <span class="user__stat-label">Following </span>
                  <span class="user__stat-number"></span>
                </li>
              </ul>
            </section>

            <section>
              <ul class="contact">
                <li>
                  <span></span>
                  location
                </li>
                <li>
                  <span></span>
                  website
                </li>
                <li>
                  <span></span>
                  twitter
                </li>
                <li>
                  <span></span>
                  company
                </li>
              </ul>
            </section>
          </header>
        </section>
      </section>
    </div>
  </main>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-card {
  border: 5px solid black;
  max-width: 40rem;
}
</style>
