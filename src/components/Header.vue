<template>
  <div class="header-wrapper">
    <form @submit.prevent="handleSubmit">
      <h1 >Enter your Team Name Below</h1>
    <input type="text" placeholder="Team Name" v-model="enteredName">
    <br>
    <div class="role-wrapper">
      <h3 >Please Select your role.</h3>
      <select v-model="enteredRole">
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
        <option value="UI/UX">UI/UX</option>
      </select>
      <br> <br>
    </div>
    <button type="submit">Submit Info</button>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        enteredName: '',
        enteredRole: '',
      }
    },
    emits: ['submit-data'],
    methods: {
      handleSubmit(){
        this.$emit('submit-data', this.enteredName, this.enteredRole)
      },
    },
  }
</script>

<style>
  
  .role-wrapper{
    display: block;
  }
</style>