import { createStore } from 'vuex';

export default createStore({
  state: {
    teams: []
  },
  mutations: {
    CREATE_TEAM(state, team) {
      state.teams.push(team);
    },
    ADD_MEMBER(state, { teamIndex, member }) {
      if (state.teams[teamIndex]) {
        console.log("ADD ", member)
        state.teams[teamIndex].members.push(member);
      }
    }
  }
});