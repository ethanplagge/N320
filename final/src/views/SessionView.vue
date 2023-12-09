<template>
  <div class="filters">
    <input type="text" class="filterBar" v-model="tagFilter" placeholder="Tag Filter">
    <input type="text" class="filterBar" v-model="presenterFilter" placeholder="Presenter Filter">
    <!--delete button only appears if the tagFilter or the presenterFilter aren't empty -->
    <div class="deleteBtn" @click="clearFilter" v-if="tagFilter || presenterFilter"> <p>Clear Filter</p> </div>
  </div>
  <h3>{{ sessionCounter }} out of 10 Sessions Available</h3>
  <div class="display-wrapper">
    <div class="display-session" v-for="session in filteredSessions" :key="session.id">
      <div class="session-header">
        <div class="session-title">
          <h1>{{ session.title }}</h1>
          <p> <span>Presented By:</span> {{ session.presenter }}</p>
        </div>
        <div class="session-info">
          <div class="addSessionBtn" @click="addSession(session)"> <p>Add Session</p></div>
          <p>{{ session.sDay }} at {{ correctTime(session.sTime) }}</p>
        </div>
      </div>
      <p>{{ session.desc }}</p>
      <br>
      <div class="session-tags">
        <div v-for="tag in session.tags" :key="tag"> <p class="tag">{{ tag }}</p></div>
      </div>
    </div>

    <h1>User's Selected Sessions</h1>
    <div class="user-sessions">
      <div class="display-session" v-for="session in selectedSessions" :key="session.id">
      <div class="session-header">
        <div class="session-title">
          <h1>{{ session.title }}</h1>
          <p> <span>Presented By:</span> {{ session.presenter }}</p>
        </div>
        <div class="session-info">
          <div class="addSessionBtn" @click="addSession(session)"> <p>Add Session</p></div>
          <p>{{ session.sDay }} at {{ correctTime(session.sTime) }}</p>
        </div>
      </div>
      <p>{{ session.desc }}</p>
      <br>
      <div class="session-tags">
        <div v-for="tag in session.tags" :key="tag"> <p class="tag">{{ tag }}</p></div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['sessions'],
  //this was supposed to ensure that this value "parentSelectedSessions" was being emitted to the parent
  //emits: ['parentSelectedSessions'],
  computed: {
    sessionCounter() {
      return this.filteredSessions.length;
    },
    filteredSessions(){
      return this.sessions.filter(session => {
        //the filters only work if the filters match exactly the values of presenter or tags
        //checks to see if the tags match the input value 
        const tagMatch =  session.tags.some(tag => tag.includes(this.tagFilter));
        //checks to see if the presenter matches the input value
        const presenterMatch =  session.presenter.includes(this.presenterFilter);
        //returns sessions that match the tags and presenter, and must have the session.added property to false
        return tagMatch && presenterMatch && !session.added;
      });
    }
  },
  data(){
    return {
      tagFilter: '',
      presenterFilter: '',
      selectedSessions: []
    };
  },
  //
  
  methods: {
    addSession(session){
      session.added = true;
      this.selectedSessions.push(session);
      //push the selected sessions to the selectedSessions in the App.vue
      this.$emit('parentSelectedSessions', this.selectedSessions);  
      console.log(this.selectedSessions)
    },
    correctTime(sTime){
      if(sTime >= 12){
        return `${sTime - 12}:00 PM`
      } else{
        return `${sTime}:00 AM`
      }
    },
    clearFilter(){
      this.tagFilter = '';
      this.presenterFilter = '';
    }
  }
}
</script>

<style>
.display-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
h3{
  font-family: Arial, Helvetica, sans-serif;
}

.filters{
  display: flex;
}

.filterBar{
  width: 200px;
  height: 30px;
  margin-right: 20px;
  padding-left: 15px;
  border: 2px solid black;
  border-radius: 10px;
}
.deleteBtn{
  background-color: rgb(246, 193, 94);
  border-radius: 10px;
  padding: 5px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
}
.deleteBtn:hover{
  cursor: pointer;
  border: 2px solid black;
}

.display-session{
  width: 80%;
  min-height: 200px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
  border: 1px solid black;
  box-shadow: 5px 5px 2px rgb(199, 229, 240);
}
.session-info{
  height: 100%;
  margin-top: 10px;
  width: 200px;
}
.addSessionBtn{
  background-color: rgb(246, 193, 94);
  border-radius: 10px;
  padding: 5px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
}
.addSessionBtn:hover{
  cursor: pointer;
  border: 2px solid black;
}

.session-header{
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
}

.session-header h1{
  font-size: 20px;
  max-width: 75%;
}

.session-header p span{
  font-weight: lighter;
}

.session-header p{
  font-weight: bold;
}

.session-tags{
  display: flex;
}

.tag{
  margin-left: 20px;
  padding: 10px;
  background-color: rgb(246, 193, 94);
  border-radius: 10px;
}

.user-sessions{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
</style>