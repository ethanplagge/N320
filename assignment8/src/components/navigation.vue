<template>
  <nav>
    <RouterLink to="/home" class="link"> Home </RouterLink>
    <RouterLink to="/teams" class="link"> Teams </RouterLink>
  </nav>
</template>

<style>
  .link{
    height: 25px;
    width: 50px;
    background-color: teal;
    color: white;
    margin-left: 20px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
  }
</style>