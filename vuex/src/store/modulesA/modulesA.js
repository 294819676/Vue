export default {
  state: {
    name: "史珍香"
  },
  mutations: {
    mUpdateInfo(state, playload) {
      state.name = playload;
    }
  },
  getters: {
    fullname1(state) {
      return state.name + "111";
    },
    fullname2(state, getters) {
      return getters.fullname1 + "222";
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter;
    }
  },
  actions: {
    masyncUpdateInfo(context, name) {
      console.log(context);
      setTimeout(() => {
        context.commit("mUpdateInfo", name);
      }, 1000);
    }
  }
};
