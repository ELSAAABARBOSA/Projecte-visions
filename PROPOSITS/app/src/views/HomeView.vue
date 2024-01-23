<template>
  <div class="inici">
    <div class="row mx-0">
      <div class="col-lg-6">
        <div class="img-cont">
        <img alt="Vue logo" src="../assets/img/YourVision.png"/>
        <h2 class="text-center text-lg-start">
          Escriu els teus propòsits i comparteix-los amb altres usuaris de Vision!
        </h2>
      </div>
      </div>
      <div class="col-lg-6">
        <card-comp :btns="btnArray" class="mx-auto card-comp">
          <template #default>
            <form>
              <div class="mb-3 mt-2">
               <input type="email" 
                      class="form-control" 
                      placeholder="Escriu el teu mail"/>
              </div>
              <div class="mb-3 mt-2">
               <input type="password" 
                      class="form-control" 
                      placeholder="Contrasenya"/>
              </div>
            </form>
          </template>
          <template #footer>
            <hr/>
             <button class="btn btn-success">Crear un compte nou</button>
          </template>
        </card-comp>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardComp from "../components/CardComp.vue"
export default {
  name: 'HomeView',
  components: {
    CardComp
  },
  data() {
    return {
      btnArray: [
        {
        txt: 'Comença',
        class: 'btn-primary',
        },

        {
        txt: 'He oblidat la meva contrasenya',
        class: '',
      },
      ],
      
    };
  },
};
</script>

<style scoped>

  h2 {
    max-width: 470px;
    margin: auto;
    font-size: 1.8rem;
  }
  .inici {
    max-width: 895px;
    margin: auto;
  }

  .img-cont{
    display: flex;
    flex-direction: column;
  }

  img { 
    max-width: 450px;
    margin: 1em auto 0 auto;
  }

  .card-comp{
    max-width: 398px;
  }


  @media (min-width:992px) {
    .inici {
      margin: 4em auto;
    }
    img{
      margin:0;
      margin-top: 5.6em;
    }
    h2{
      margin: 0;
      margin-top: -0.8;
      margin-left: 0.8;
    }
  }
</style>