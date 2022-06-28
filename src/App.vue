<template>
  <main>
    <Nav />
    <UserSearchBar />
    <UserCard />
  </main>
</template>

<script>
import { provide } from "vue";
import store from "@/store";
import UserCard from "@/components/UserCard.vue";
import Nav from "@/components/Nav.vue";
import UserSearchBar from "@/components/UserSearchBar.vue";

export default {
  components: {
    UserCard,
    Nav,
    UserSearchBar,
  },
  setup() {
    provide("store", store);
  },
};
</script>

<style lang="scss">
// colors light mode */
$light-primary-bg: #f6f8ff;
$light-off-white: #fefefe;
$light-grey: #697c9a;
$light-blueGrey: #4b6a9b;
$light-off-black: #2b3442;

// colors dark mode
$dark-primary-bg: #141d2f;
$dark-blueGrey: #1e2a47;

// general
$white: #ffffff;
$btn-blue: #0079ff;
$btn-blue-active: #60abff;
$error-red: #f74646;
$logo-light: #222731;

:root {
  --primary-bg: #{$light-primary-bg};
  --card-bg: #{$light-off-white};
  --text-primary: #{$light-blueGrey}; // bio of card
  --text-secondary: #{$light-off-black}; // numbers on card
  --text-accent: #{$light-grey}; // joined ...
  --white: #{$white};
  --logo: #{$logo-light};
  --btn-blue: #{$btn-blue};
  --btn-blue-active: #{$btn-blue-active};
  --error-red: #{$error-red};
}

:root.dark-theme {
  --primary-bg: #{$dark-primary-bg};
  --card-bg: #{$dark-blueGrey};
  --text-primary: #{$white};
  --text-secondary: #{$white};
  --text-accent: #{$white};
  --logo: #{$white};
  --btn-blue: #{$btn-blue};
  --btn-blue-active: #{$btn-blue-active};
  --error-red: #{$error-red};
}

/*
    Reset template from: https://piccalil.li/blog/a-modern-css-reset/
*/

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: inherit;
  font-family: inherit;
  transition: all 0.2s;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul,
figure,
blockquote,
fieldset,
legend,
dl,
dd {
  margin: 0;
  padding: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul,
ol {
  list-style: none;
}

/* Set core root defaults */
html {
  scroll-behavior: smooth;
  box-sizing: border-box;
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  min-height: 100vh;
  font-family: "Space Mono", monospace;
  background-color: var(--primary-bg);
  font-size: 16px;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

main {
  padding: 0 1.5rem;
  margin: 0 auto;

  @include breakpoint_medium {
    max-width: 35rem;
    padding: 2rem;
  }
  @include breakpoint_large {
    max-width: 45.5rem;
    padding: 1rem;
  }
}
</style>
