<template>
    <div class="card-border">
        <h1>{{ nume }} {{ nrPersoanei }}</h1>
        <h2>{{ email+'@gmail.com' }}</h2>

        <input type="text" v-model="prenume">

        <ButtonComponent @butonApasat="afiseazaInConsola" :text="textButton" :color="colorButton" :margineSus="butonSus" />
    </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';


export default {
    name:'PersonCard',
    components: {
        ButtonComponent
    },
    props: {
        nrPersoanei:Number,
        name:String,
        textButton:String,
        colorButton:String,
        butonSus:String,
        email: {
            type:String,
            default:'hrteam'
        }
    },
    data() {
        return {
            nume:'', 
            
            numeFamilie:'Prohnitchi',
            prenume:'Alexandru'

            
        }
    },
    methods: {
        afiseazaInConsola(color) {
            this.nrApasat++;
            console.log('Butonul apasat e de culoare', color);

            this.$emit('darkMode');
        }
     },
    mounted() {
        this.nume = this.name;
    },
    computed: {
        fullName: function() {
            return this.numeFamilie + " " + this.prenume;
        },
        // pretInValutaLocala: function() {
        //     return pretInitial * cursValutarLocal;
        // }
    },
    watch: {
        fullName: function(prenumeNou, prenumeVechi) {
            console.log('Prenumele a fost schimbat din ' + prenumeVechi + " in " + prenumeNou);
        }
    }
}

</script>


<style>
.card-border {
    border: 4px solid black;
    width: 300px;
    height: 400px;
    border-radius: 20px;
}
</style>