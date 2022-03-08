<template>
    <div class="mensaje" :class="{ 'propio' : mismoUsuario}">
        <p>{{message.content}}</p>
        <span class="autor">{{message.usuario}}</span>
        <small>{{horaMensaje}}</small>
    </div>
</template>
<script>
export default {
    props: ['message','usuarioActual'],
     computed: {
    // a computed getter
    mismoUsuario(){
      return this.usuarioActual==this.message.usuario
    },

    horaMensaje() {
      // `this` points to the component instance
        return moment(this.message.createdAt).fromNow();
    
    }
  }
}
</script>
<style scoped>
.mensaje{
  border: 1px black solid;
  padding: 10px;
  margin:5px;
}

.autor{
  color: grey;
  font-size: 15px;
}
.propio{
  background-color: aqua;
}
</style>