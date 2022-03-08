<template>
  <div>
   <div class="mensaje">
        <input type="checkbox" id="checkbox" v-model="anonimo" />
        <label for="checkbox">Anónimo</label>

        <div v-if="!anonimo">
            <input type="text" id="usuario" v-model="usuario" />
            <label for="checkbox">Usuario</label>
        </div>
    </div>
  <input class="message-input" type="text" v-model="content" name="title" placeholder="Mensaje" required>                    
  <button @click="enviarMensaje()">ENVIAR</button>
               
               
   <Message 
              :message="msg" 
              :key="index" 
              v-for="(msg,index) in messages" />
               

                  
       
  </div>
</template>

<script>
import Messages from '../../api/collections/Messages'



import Message from './Message.vue'

export default {
  data() {
    return {
      content: "",   
       anonimo: true,
      usuario: 'anonimo'    
    }
  },
  computed:{
    usuarioActual: function(){
      return this.username;
    }
  },  
   components: {    
    Message
    
  },
  meteor: {
    $subscribe: {
      'messages': [],
    },
    messages () {
      return Messages.find({}, { sort: { createdAt: -1 } });
    },
  },
  methods: {
    enviarMensaje() {   
      console.log("HOLA" + this.content)   
      Meteor.call('createMessage', this.content,this.usuario,  (error) => {
        if (error) {
          alert(error.error)
        } else {
          this.content = ''          
        }
      })
    }
  },
}
</script>

<style scoped>
  ul {
    font-family: monospace;
  }

</style>
