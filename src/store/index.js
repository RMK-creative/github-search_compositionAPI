import { reactive } from "vue";

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
});

const methods = {
  async getUser() {
    await fetch(`https://api.github.com/users/${state.userSearch}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        state.user.name = data.name;
        state.user.avatar = data.avatar_url;
        state.user.handle = data.login;
        state.user.joined = data.created_at;
        state.user.bio = data.bio;
        state.user.repos = data.public_repos;
        state.user.followers = data.followers;
        state.user.following = data.following;
        state.user.location = data.location;
        state.user.website = data.blog;
        state.user.twitter = data.twitter_username;
        state.user.company = data.company;
      })
      .catch((error) => {
        console.log(console.log(error.message));
        state.error = true;
      });
  },
  setUserSearch(val) {
    state.userSearch = val;
  },
};

export default {
  state,
  methods,
};
