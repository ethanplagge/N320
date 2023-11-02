const app = Vue.createApp({
  data() {
    //ALWAYS RETURNS AN OBJECT
    return{
      courseGoal1: 'Learn advanced JavaScript',
      courseGoal2: 'Learn Vue',
      courseGoal3: '<h4>Create an application</h4>',
      vueLink: 'https://vuejs.org',
      counter: 10,
      name: ""
    }
  },
  computed:{
    fullName(){
      if(this.name == ''){
        return '';
      } else{
        return this.name + " " + 'Lastname';
      }
    },
    nameData(){
      let nameVal = [];
        //Length of full name
        let nameLength = this.fullName;
        nameVal.push(nameLength.length);

        //Get the middle character
        let middle = nameLength.charAt(Math.floor(nameLength.length / 2));
      nameVal.push(middle);
      return nameVal;
    }
  },
  methods: {
    newGoal(){
      const rNum = Math.random();
      if(rNum < 0.2){
        return "The Random number is freakin' tiny!";
      } else if(rNum > 0.7){
        return "The Random number is freakin' huge!";
      } else{
        return this.courseGoal2;
      }
    },
    add(){
      this.counter++;
    },
    addNum(num){
      this.counter += num;
    },
    submitForm(){
      alert("Form Submitted");
    },
    consoleMe(){
      console.log("The Spacebar was clicked");
    }
  }
});


app.mount('#myGoals');