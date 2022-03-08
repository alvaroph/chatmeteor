<template>
  <div class="votacion">
    COMPONENTE VOTACIONES

    <div
    :key="index" 
    v-for="(opcion,index) in votaciones" >
     
        <button class="btn btn-primary" 
        @click="votar(opcion.id)">
        Voto {{opcion.id}}</button>
      {{opcion.votos}}
    
    </div>

  </div>


</template>

<script>
import Votaciones from '../../api/collections/Votaciones'
export default {
  data() {
    return {
      
    }
  },
  components: {    
    
    
  },
  meteor: {
    $subscribe: {
      'votaciones': [],
    },
    votaciones () {
      return Votaciones.find({});
    },
  },
  methods: {
    votar(opcion) {
      console.log("Voto a" + opcion)   
      Meteor.call('nuevoVoto',opcion,  (error) => {
        if (error) {
          alert(error.error)
        } else {
          
        }
      })
    }
  },
}
</script>

<style scoped>
  p {
    font-family: serif;
  }
  .votacion{
      background-color: red;
  }
</style>
