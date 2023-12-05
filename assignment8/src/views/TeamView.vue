<template>

  <div v-for="team in teams" :key="team.teamName">
    <div class="team-wrapper">
      <h1>Team "{{ team.teamName }}" Roster</h1>    
    <ul>
      <li v-for="member in team.members" :key="member.name" class="team-list">
        <h1>{{ member.name }}</h1> 
        <div class="detail-holder">
          <h3>{{ member.role }}</h3>
          <p>{{ member.phone }}</p>
          <p>{{ member.email }}</p>
        </div>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    teams() {
      return this.$store.state.teams;
    }
  }
}
</script>

<style>
.team-wrapper{
  margin-top: 20px;
  background-color: antiquewhite;
  padding: 10px;
  border-radius: 20px;
  color: teal;
}
  .team-list{
    height: 250px;
    width: 500px;
    background: teal;
    border-radius: 20px;
    color: white;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    list-style-type: none;
    margin-bottom: 20px;
  }
  .detail-holder{
    background-color: white;
    color: teal;
    padding: 10px;
    opacity: 70%;
    border-radius: 20px;
    
  }
  .detail-holder h3{
      opacity: 100%;
    }
    .detail-holder  p{
      opacity: 100%;
    }
</style>
