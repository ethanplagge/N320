const app = Vue.createApp({
  data(){
    return{
    }
  },
  methods: {
  },
  watch:{
  
  }
});

app.component('greeting-input', {
  template:` <input type="text" v-model="text">
  <p>{{text}}</p>

  <input type="text" @blur="displayText" ref="disRef">
  <p>{{refText}}</p>`,
   data(){
    return{
      text: "",
      refText: ""
    }
  },
  methods: {
    displayText(){
      this.refText = this.$refs.disRef.value;
    }
  },
  watch:{
    text(newV, oldV){
      console.log(`Old Value: ${oldV}`);
      console.log(`New Value: ${newV}`);
    }
  }
})

app.mount('#content');