<template>
    <button @click="notificaParinte()" class="button" :style="{backgroundColor: color, marginTop:margineSus}">{{ text }}</button>
</template>

<script>

export default {
    name:'ButtonComponent',
    props: {
        text: {
            type:String,
            default:'Site inexistent'
        },
        color:String,
        margineSus:String,
    },
    methods:{
        notificaParinte() {
            this.$emit('butonApasat',this.color);
        }
    }
}
</script>

<style>
    .button {
        width: 70%;
        height: 50px;
        border: none;
        border-radius: 24px;
        cursor: pointer;
    }
</style>