<template>
  <app-header @submit-data="createTeam">
  </app-header>
  <team-info :parentTeamName="teams" @join-data="addMember"></team-info>
</template>

<script>

export default {
  data(){
    return {
      showContent: true,
    }
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    },
    teamsCount() {
      return this.teams.length;
    }
  },
  methods: {
    createTeam(name, leadRole){
      const newTeam = { teamName: name, leadRole: leadRole, members: [] };
      this.$store.commit('CREATE_TEAM', newTeam);
    },
    addMember(name, role, phone, email){
      const teamIndex = this.$store.state.teams.length - 1;
      const newMember = { name, role, phone, email };
      console.log(teamIndex)
      this.$store.commit('ADD_MEMBER', { teamIndex, member: newMember });
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 30px;
}
</style>
