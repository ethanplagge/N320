const app = Vue.createApp({
  data(){
    return {
      name: 'Tim Sewards',
      title: 'Vue Challenges'
    }

  },
  methods: {
    getDate(){
      let today = new Date();
      today = today.toLocaleDateString;
      return today;
    }
  }
})

app.mount('#content');