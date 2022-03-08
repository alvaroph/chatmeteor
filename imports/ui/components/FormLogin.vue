<template>
    <div class="mensaje">
        <input type="checkbox" id="checkbox" v-model="anonimo" />
        <label for="checkbox">Anónimo</label>

        <div v-if="!anonimo">
            <input type="text" id="usuario" v-model="username" />
            <label for="checkbox">Usuario</label>
        </div>
    </div>
</template>
<script>
export default {
   props: ['username'],
     data() {
    return {
      anonimo: true,
      //usuario: ''
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
</style>