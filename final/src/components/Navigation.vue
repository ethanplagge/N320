<template>
    <nav>
        <h1 class="header">View Available Sessions</h1>
        <div class="links">
            <RouterLink to="/" class="link">View Sessions</RouterLink>
            <RouterLink to="/user-sessions" class="link">View Your Sessions</RouterLink>
        </div>
    </nav>
</template>

<script>
</script>

<style>
    nav{
        height: 100px;
        width: 100%;
        background-color: rgb(246, 193, 94);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 15px;
    }
    .header{
        font-size: 30px;
        padding-left: 20px;
    }
    .links{
        padding-right: 20px;
        display: flex;
    }
    .link{
        height: 50px;
        min-width: 20px;
        padding: 5px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: white;
        border: 2px solid black;
        border-radius: 15px;
        text-decoration: none;
        color: black;
        font-size: 20px;
        font-weight: bold;
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
