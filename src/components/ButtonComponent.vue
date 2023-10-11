<template>
    
    

    <button @click="notificaParinte()" class="button" :style="{backgroundColor: color, marginTop:margineSus}">{{ text }} {{ counter }}</button>

    <slot></slot>
    
</template>

<script>

export default {
    name:'ButtonComponent',
    components: {

    },
    data() {
        return {
           nume:'damdwadaw',
           age:25,
           persoane: [

           ],

        }
    },
    methods: {
        salutaPersoana() {
            console.log('Salut!')
        },

    },
    props: {
        text: {
            type:String,
            default:'Site inexistent'
        },
        color:String,
        margineSus:String,
    },
    computed: {
        counter() {
            return this.$store.state.count;
        }
    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    updated() {
        
    }
}
</script>

<style>
    .button {
        width: 70%;
        height: 50px;
        border: none;
        border-radius: 24px;
        color: white;;
        cursor: pointer;
    }
</style>