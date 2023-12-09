<template>
  <h1>User View</h1>
  <p>{{ userSessions }}</p>
</template>

<script>
  export default {
    //injects the selectedSessions, but cannot update when a session is added
    inject: ['selectedSessions'],
    data(){
      return{
        userSessions: []
      }
    },
    watch: {
      selectedSessions(newVal){
        this.userSessions = newVal;
        console.log(newVal)
        
      }
    }
  }
</script>