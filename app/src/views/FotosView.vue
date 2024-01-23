<template>
    <div class="fotos">
        <img src="../assets/img/YourVision.png"
        alt="vision" class="logo" />
        <CardComp 
        class="mt-2 mx-auto single-post"
            parrafo="Complint el meu propòsit de llegir diàriament" 
            picture="https://images.pexels.com/photos/19149193/pexels-photo-19149193/free-photo-of-tassa-relaxacio-caputxino-beure.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
            :header= "{ name: 'Gerard Barbosa', picture: 'https://randomuser.me/api/portraits/men/51.jpg'}"
            :likes="true"/>

        <CardComp 
        class="mt-2 mx-auto single-post"
            parrafo="Arbre muntat, propòsit de la setmana complert!" 
            picture="https://images.pexels.com/photos/19051375/pexels-photo-19051375/free-photo-of-decoracio-corona-de-flors-celebracio-sala-d-estar.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            :header= "{ name: 'Maria Perati', picture: 'https://randomuser.me/api/portraits/women/51.jpg'}"
            :likes="true"/>

        <CardComp 
        class="mt-2 mx-auto single-post"
            parrafo="Propòsits relacionats amb l'esport"
            picture="https://images.pexels.com/photos/17720516/pexels-photo-17720516/free-photo-of-constipat-neu-paisatge-muntanyes.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            :likes="true"/>
  </div>
</template>

<script>
    import CardComp from "../components/CardComp.vue"
export default {
    name: "FotosView",
    components: {
        CardComp
    }
}
</script>

<style scoped>
  .fotos {
    min-height: 60vh;
    max-width: 895px;
    margin: auto;
  }
  .logo {
    max-width: 115px;
    padding: 0.2rem;
  }
  .single-post{
    max-width: 550px;
    margin-top:2rem;
  }
</style>