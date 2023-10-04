<template>
  <div class="home">
    <button @click="schimbaContor">Schimba Contor</button>

    <HomeComponent />
    <!-- {{ articole }} -->
    <!-- <div class="row">
      <div v-for="articol of articole" :key="articol" class="card">
        <h1>{{ articol.title }}</h1>
        <router-link :to="'/blog/'+articol.id">Citește articolul complet</router-link>  
      </div>
    </div> -->
    
    <!-- <div v-for="article of articole" :key="article">
      <router-link :to="'/blog/'+article">Articol {{ article }}</router-link>
    </div>
     -->


  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'HomeView', 
  components: {
    HomeComponent
  },
  methods: {
    schimbaContor() {
      this.$store.dispatch('actualizeazaAsync')
    }
  },
  data() {
    return {
      articole:[],
    }  
  },
  mounted() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(dateJson => {
          this.articole = dateJson;
        });

  } 
} 
</script>

<style>

.row {
  display: flex;
  justify-content: space-around;
}

.card {
  width: 250px;
  height: 400px;
  border-radius: 12px;
  border: 2px solid black;
  margin-top: 30px;
  padding: 10px 20px 10px 20px;
}

</style>