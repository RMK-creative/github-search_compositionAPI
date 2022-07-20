import { reactive } from "vue";
import axios from "axios";

const state = reactive({
  userSearch: "octocat",
  user: {
    avatar: "",
    name: "",
    handle: "",
    joined: "",
    bio: "",
    repos: 0,
    followers: 0,
    following: 0,
    location: "",
    website: "",
    twitter: "",
    company: "",
  },
  error: false,
  themeIsLight: false,
  userThemeSetting: "",
});

const methods = {
  async getUser() {
    state.error = false;
    try {
      await axios
        .get(`https://api.github.com/users/${state.userSearch}`)
        .then((res) => {
          state.user.name = res.data.name;
          state.user.avatar = res.data.avatar_url;
          state.user.handle = res.data.login;
          state.user.joined = res.data.created_at;
          state.user.bio = res.data.bio;
          state.user.repos = res.data.public_repos;
          state.user.followers = res.data.followers;
          state.user.following = res.data.following;
          state.user.location = res.data.location;
          state.user.website = res.data.blog;
          state.user.twitter = res.data.twitter_username;
          state.user.company = res.data.company;
          state.userSearch = "";
        });
    } catch (error) {
      console.log(console.log(error.message));
      state.error = true;
    }
  },
  setUserSearch(val) {
    val.length > 0 ? (state.userSearch = val) : null;
  },
  themeSwitch() {
    state.themeIsLight = !state.themeIsLight;
    !state.themeIsLight
      ? (document.documentElement.className = "dark-theme")
      : (document.documentElement.className = "light-theme");
  },
};

export default {
  state,
  methods,
};
