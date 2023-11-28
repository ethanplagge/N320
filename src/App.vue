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
      teams: []
      
    }
  },
  methods: {
    createTeam(name, leadRole){
      const newTeam = {
        teamName: name,
        leadRole: leadRole,
        developer: '',
        UIUX: '',
        designer: ''
      }
      this.teams.push(newTeam);

      console.log(this.teams);
    },
    addMember(name, role){
      if(role === 'Developer' && this.teams[0].developer == ''){
        this.teams[0].developer = name;
      } else if(role === 'UI/UX' && this.teams[0].UIUX == ''){
        this.teams[0].UIUX = name;
      } else if(role === 'Designer' && this.teams[0].designer == ''){
        this.teams[0].designer = name;
      } else {
        alert("already selected")
      }
      console.log(this.teams)
    }
  }
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
