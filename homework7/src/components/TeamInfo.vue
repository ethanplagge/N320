<template>
  <div class="member-wrapper">
    <ul>
    <li v-for="member in filteredMembers" :key="member.id" class="member-info">
      <div class="primary-info" >
        <h3>{{ member.name }}</h3>
        <h5>{{ member.role }}</h5>
        <button @click="toggleInfo(member.id, member.showDetails)" class="inputBtn" id="btn{{ member.id }}"><p>{{ member.detailBtn }}</p></button>
        <button @click="joinTeam(member.id)" class="inputBtn" id="join{{ member.id }}" v-if="!member.joinTeam"><p>Join {{ newTeamName }}</p></button>
      </div>
      <div class="secondary-info" v-if="member.showDetails">
        <p>Phone: {{ member.phone }}</p>
        <p>Email: {{ member.email }}</p>
      </div>
    </li>
  </ul>
  </div>
 
</template>

<script>
  export default {
    data(){
      return {
      
       filterRole: '',
        members: [
          {
            id: 1,
            name: "Chandler Bing",
            phone: "123 123 1234",
            email: "cBing@gmail.com",
            role: 'Developer',
            showDetails: false,
            detailBtn: "Show Content",
            showContent: true,
            joinTeam: false,
            team: '',
          },  
          {
            id: 2,
            name: "Joey Tribbiani",
            phone: "321 321 4321",
            email: "jtribby@gmail.com",
            role: 'UI/UX',
            showDetails: false,
            detailBtn: "Show Content",
            showContent: false,
            joinTeam: false,
            team: '',
          },
          {
            id: 3,
            name: "Ross Geller",
            phone: "222 333 4444",
            email: "rgeller@gmail.com",
            role: 'Developer',
            showDetails: false,
            detailBtn: "Show Content",
            showContent: false,
            joinTeam: false,
            team: '',
          },
          {
            id: 4,
            name: "Monica Bing",
            phone: "123 123 1235",
            email: "mbing@gmail.com",
            role: 'Designer',
            showDetails: false,
            detailBtn: "Show Content",
            showContent: false,
            joinTeam: false,
            team: '',
          },
          {
            id: 5,
            name: "Rachel Green",
            phone: "876 345 1678",
            email: "rgreen@gmail.com",
            role: 'UI/UX',
            showDetails: false,
            detailBtn: "Show Content",
            showContent: false,
            joinTeam: false,
            team: '',
          },
          {   
            id: 6,
            name: "Phoebe Buffay",
            phone: "678 908 5686",
            email: "pbuff@gmail.com",
            role: 'UI/UX',
            showDetails: false,
            detailBtn: "Show Content",
            showContent: false,
            joinTeam: false,
            team: '',
          },
          {
            id: 7,
            name: "Stacy Boling",
            phone: "345 679 4212",
            email: "sBoling@gmail.com",
            role: 'Designer',
            showDetails: false,
            detailBtn: "Show Content",
            showContent: false,
            joinTeam: false,
            team: '',
          },
          {
            id: 8,
            name: "Jake Trimult",
            phone: "443 665 7888",
            email: "jtrim@gmail.com",
            role: 'Developer',
            showDetails: false,
            detailBtn: "Show Content",
            showContent: false,
            joinTeam: false,
            team: '',
          },
          {
            id: 9,
            name: "Rose Greathouse",
            phone: "345 567 9087",
            email: "rgreat@gmail.com",
            role: 'UI/UX',
            showDetails: false,
            detailBtn: "Show Content",
            showContent: false,
            joinTeam: false,
            team: '',
          },
          {
            id: 10,
            name: "Mindy Kellum",
            phone: "555 666 7777",
            email: "mKellum@gmail.com",
            role: 'UI/UX',
            showDetails: false,
            detailBtn: "Show Content",
            showContent: false,
            joinTeam: false,
            team: '',
          },
          {
            id: 11,
            name: "Sarah Miller",
            phone: "987 654 1234",
            email: "smiller@gmail.com",
            role: 'Developer',
            showDetails: false,
            detailBtn: "Show Content",
            showContent: false,
            joinTeam: false,
            team: '',
          },
          {
            id: 12,
            name: "Caroline Bender",
            phone: "111 222 3456",
            email: "cBend@gmail.com",
            role: 'Designer',
            showDetails: false,
            detailBtn: "Show Content",
            showContent: false,
            joinTeam: false,
            team: '',
          },
        ],
      }
    },
    props: {
      parentTeamName: Array,
    },
    computed: {
      newTeamName() {
        return this.parentTeamName && this.parentTeamName.length > 0
        ? this.parentTeamName[0].teamName : '';
      },
      filteredMembers() {
        if (this.filterRole) {
          return this.members.filter(member => member.role !== this.filterRole);
        }
          return this.members; // Return all members if no filter is set
      }
    },
    emits: ['join-data'],
    methods: {
      toggleContent(id,showContent){
      
    },
      setFilterRole(role) {
        this.filterRole = role;
      },
      toggleInfo(id, showDetails){
        //get accurate id
      let newId = id - 1
        //toggles the showDetails boolean
       this.members[newId].showDetails = !this.members[newId].showDetails
        //updates the text on the button
       if(!showDetails){
        this.members[newId].detailBtn = "Hide Details"
       } else {
        this.members[newId].detailBtn = "Show Content"
       }
    },
      joinTeam(id){
        //get accurate id
        let newId = id -1
        //emit the data to the App
          this.$emit('join-data', this.members[newId].name, this.members[newId].role)
        //change the properties of the member
        this.members[newId].team = this.newTeamName
        //removes the join button
        this.members[newId].joinTeam = !this.members[newId].joinTeam
        //filters the list
        
          this.setFilterRole(this.members[newId].role);
 
    }
    }
  }
</script>

<style>
  .member-wrapper{
    width: 100%;
    display: flex;
  }
  .member-info{
    width: 600px;
    background-color: teal;
    margin-bottom: 20px;
    padding: 10px;
    list-style-type: none;
    border-radius: 10px;
    color: white;
    display: flex;
    justify-content: flex-start;
  }
  .primary-info{
    width: 400px;
    margin-left: 20px;
  }
  .inputBtn{
    min-width: 50px;
    margin-left: 20px;
    background-color: white;
    border-radius: 10px;
  }
  .inputBtn p{
    font-weight: bold;
  }
  .secondary-info{
    margin-left: 20px;
  }
</style>