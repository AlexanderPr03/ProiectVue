<template>
    {{ count }}
    <div id="wrapper" :class="{darkModeClass: darkMode}">
        <!-- <input type="checkbox" @change="console.log('dd')">   -->
      
      <img src="../assets/logo.png">
      <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
      <h1 class="title">Our team</h1>
    
      <button id="butonEchipa" @click="showTeam()">Afiseaza Echipa</button>
      <br><br>
        <input type="text" v-model="nume">
      <br><br>
        <input type="text" v-model="nume">
  
        {{ nume }}
      <br><br>
      <div class="row" v-if="afiseazaEchipa">
        <PersonCard @darkMode="switchDarkMode" v-for="(card, index) of dateCarduri" :nrPersoanei="index" :butonSus="card.margineButon" :key="card" :name="card.name" :textButton="card.textButton" :colorButton="card.color" :email="card.email"/>
      </div>
    </div>
    
  
  </template>
  
  <script>
  import PersonCard from '@/components/PersonCard.vue';
  
  
  
  export default {
    name: 'HomeComponent',
    computed: {
      count() {
        return this.$store.state.nume;
      }
    },
    components: {
      PersonCard
    },
    methods: {
      showTeam() {
        this.afiseazaEchipa = !this.afiseazaEchipa;


      },
      switchDarkMode() {
        this.darkMode = !this.darkMode;
      }
    },
    mounted() {
      // setInterval(() => {
      //   this.afiseazaEchipa = !this.afiseazaEchipa;
      //   // true => false
      //   // false => true
  
      // },3000)
    },
    data() {
      return {
        nume:'',
        darkMode:false,
        afiseazaEchipa:false,

        dateCarduri: [
          {
            name:'Alexandru',
            color:'#0a53c9',
            email:'alexandru',
            textButton:'Site-ul lui Alexandru',
            margineButon:'20px',
          },
          {
            name:'Dumitru',
            color:'#c90a0a',
            email:'dumitru',
            textButton:'Pagina FB a lui Dumitru',
            margineButon:'50px',
          },
          {
            name:'Maria',
            color:'#029c23',
            email:'maria',
            textButton:'LinkedIn-ul Mariei',
            margineButon:'100px',
          },
          {
            name:'Alexandru',
            color:'#0a53c9',
            email:'alexandru',
            textButton:'Site-ul lui Alexandru',
            margineButon:'10px',
          },
          {
            name:'Dumitru',
            color:'#c90a0a',
            email:'dumitru',
            textButton:'Pagina FB a lui Dumitru'
          },
          {
            name:'Maria',
            color:'#029c23',
            email:'maria',
            textButton:'LinkedIn-ul Mariei'
          },
          {
            name:'Alexandru',
            color:'#0a53c9',
            email:'alexandru',
            textButton:'Site-ul lui Alexandru'
          },
          {
            name:'Dumitru',
            color:'#c90a0a',
            email:'dumitru',
            textButton:'Pagina FB a lui Dumitru'
          },
          {
            name:'Maria',
            color:'#029c23',
            email:'maria',
            textButton:'LinkedIn-ul Mariei'
          },
          {
            name:'Alexandru',
            color:'#0a53c9',
            email:'alexandru',
            textButton:'Site-ul lui Alexandru'
          },
          {
            name:'Dumitru',
            color:'#c90a0a',
            email:'dumitru',
            textButton:'Pagina FB a lui Dumitru'
          },
          {
            name:'Maria',
            color:'#029c23',
            email:'maria',
            textButton:'LinkedIn-ul Mariei'
          },
        ]  
      }
    }
  }
  
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0px 100px 0px 100px;
  }
  .title {
    text-align: center;
    margin-top: 40px;
    margin-block: 40px;
    font-size: 56px;
  }
  
  #butonEchipa {
    padding: 10px 20px 10px 20px;
    background:red;
    color: white;
    border:none;
    border-radius: 12px;
    cursor: pointer;
  }
  .darkModeClass {
    background-color: black;
  }
  </style>
  