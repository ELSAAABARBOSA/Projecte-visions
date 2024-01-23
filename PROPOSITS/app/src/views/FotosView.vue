<template>
  <div  class="fotos" v-for="item in data" :key="item.id">
      <div v-if="item.id < '2'">
     
        <img src="../assets/img/YourVision.png"
        alt="vision" class="logo" />
          <div v-for="item in data" :key="item.id">
        <CardComp  v-if="item.id == '1'"
        class="mt-2 mx-auto single-post"
            :parrafo= 'item.texto'
            :picture= 'item.foto'
            :header= "{ name: item.nom , picture: item.profilePicture}"
            :likes="item.likes"/>
        </div> 
                 {{ console.log( item.id) }}
        <div v-for="item in data" :key="item.id">
        <CardComp   v-if="item.id == '2'"
        class="mt-2 mx-auto single-post"
            :parrafo= 'item.texto'
            :picture= 'item.foto'
            :header= "{ name: item.nom , picture: item.profilePicture}"
            :likes="item.likes"/>
        </div> 

        <div v-for="item in data" :key="item.id">
        <CardComp   v-if="item.id == '3'"
        class="mt-2 mx-auto single-post"
            :parrafo= 'item.texto'
            :picture= 'item.foto'
            :header= "{ name: item.nom , picture: item.profilePicture}"
            :likes="item.likes"/>
        </div> 
      
     </div>
  </div>
</template>

<script>
  import arxiu_dades from '/arxiu_dades.json'
  import CardComp from "../components/CardComp.vue"
export default {
  data(){
    return{
        contador: 0,
        data : arxiu_dades
    }
   },
    methods: {
    incrementarContador() {
                 {{ console.log( 'hola') }}
      this.contador++;
    }
  }, updated() {
    this.incrementarContador();
  },
  
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