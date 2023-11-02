
const app = Vue.createApp({
  data() {
    return{
      name: 'Ethan Plagge',
      course: 'N320',
      assignmentName: 'First Vue Assignment',
      difficulty: 3,

      //elements relating to the colors
      colors: [
        {id: 1,name: "Granny Smith Apple"},
        {id: 2, name: "Purple Mountain's Majesty"},
        {id: 3, name: "Mango Tango"},
        {id: 4, name: "Electric Lime"},
        {id: 5, name: "Jazzberry Jam"},
        {id: 6, name: "Screamin' Green"},
        {id: 7,name: "Inchworm"}
        
      ],
      favorite: "",
      counter: 0,
      isPrinted: false,
      newColor: '',
      test: ''
    }
  },
  methods: {
    printDate(){
      let date = new Date();
      date.setDate(date.getDate() + 7);
      return date.toLocaleDateString();
    },
    //prints out the original array elements, weird error, this runs everytime a button is clicked,
    //had to manually set up a condition that only lets it happen once, (isPrinted) 
    //couldn't figure out what is causing this
    printElements(){
      if(this.isPrinted == false){
        //foreach loop that goes through the array and prints out elements
        this.colors.forEach(color => {
          let item = document.createElement("li");
          item.innerHTML = color.name;
          document.body.appendChild(item);
        });
        this.isPrinted = true;
      }
    },
    favoriteColor(){
    //created a counter element that increases each time the button is pressed
    if(this.counter < this.colors.length){
      this.favorite = "My favorite color is " + this.colors[this.counter].name;
     this.counter++;
    } else{
      //if the counter is larger than the array length, it resets
      this.counter = this.counter - this.colors.length;
      this.favorite = "My favorite color is " + this.colors[this.counter].name;
      this.counter++;

    }
    },
    addElement(){
      //creates element with an id and inputted name
      let newId = this.colors.length + 1;
      let newAddition = {id: newId, name: this.newColor}
      //push the item to the array
      this.colors.push(newAddition);
      //add it to the html
      let newList = document.createElement("li");
      newList.innerHTML = this.newColor;
      document.body.appendChild(newList); 
      //add the text that confirms it's been added
      this.test = this.newColor + " has been added to the list!";

    }

  }
})


app.mount('#vueSection');