<template>
  <div>
    <h1>CHAT EN METEOR</h1>
    <votacion/>
  
    <chat/>
   

  </div>
</template>

<script>

import Chat from './components/Chat.vue'
import Votacion from './components/Votacion.vue'


export default {
  components: {    
    Chat ,
    Votacion 
  },
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
