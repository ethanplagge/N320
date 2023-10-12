const app = Vue.createApp({
  data() {
    //ALWAYS RETURNS AN OBJECT
    return{
      courseGoal1: 'Learn advanced JavaScript',
      courseGoal2: 'Learn Vue'
    }
  }
});


app.mount('#myGoals');