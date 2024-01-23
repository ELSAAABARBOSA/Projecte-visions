<template>
    <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container justify-content-evenly">
        
        <router-link to="/inici" class="nav-link active" aria-current="page">Inici</router-link>
        
        <router-link to="/nosaltres" class="nav-link" >Nosaltres</router-link>
        
        <router-link to="/fotos" class="nav-link" >Fotos</router-link>
        
  </div>
</nav>
</template>

<script>
export default{
    name: "NavComp"
}
</script>

<style scoped>
    .nav-link{
        color: white;
        font-size: 1.4em;
        background-color: #DFCFCC;
        padding: 0.3em 1em;
        border-radius: 50%;
        margin: 0.1em;
}
    .navbar{
        padding-bottom: 0;
        padding-top: 0;
    }

    .nav-link{
        padding: 0.2rem 1rem;
    }

</style>