<template>
  <h1>Pagina Servicii!</h1>
  <form>
    <label for="name">Nume:</label>
    <br><br>
    <input required type="text" id="name" v-model="nume">

    <br><br>
    <label for="email">Email:</label>
    <br><br>
    <input required type="email" id="email" v-model="email">

    <br><br>
    <label for="tos">TOS</label>
    <input id="tos" type="checkbox" value="Termeni si Conditii" v-model="selectat" required>
    <br><br>

    <label for="plata1">Visa/Mastercard</label>
    <input id="plata1" value="Visa/Mastercard" type="radio" name="plata" required v-model="valoareSelectata">
    <br><br>

    <label for="plata2">Paypal</label>
    <input id="plata2" value="Paypal" type="radio" name="plata" required v-model="valoareSelectata">
    <br><br>
    <input type="submit">


  </form>
  <p>Numele tău este: {{ nume }}</p>
  <p>Email-ul tău este: {{ email }}</p>
  <p>Checkbox: {{ selectat }}</p>
  <p>Options: {{ valoareSelectata }}</p>
  <!-- <button @click="modificareCounter">Schimba contor</button> -->
</template>

<script>
import axios from 'axios';

export default {
    name:'ServicesView',
    data() {
      return {
        nume:'',
        email:'',
        selectat:[],
        valoareSelectata:'',
        posts:[]
      }
    },  
    computed: {
      count() {
        return this.$store.getters.doubleCount
      }
    },
    methods: {
      modificareCounter() {
        this.$store.commit('actualizeazaContor');
      }
    },
    created() {
        axios.get("http://localhost:3000/users/4/posts")
          .then(response => this.posts = response.data);

      // axios.post("http://localhost:3000/comments", {data:'Comentariu!'})
    }
}
</script>

<style>

</style>