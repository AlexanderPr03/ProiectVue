<template>
    <div>
        <h1>{{ articol.title }}</h1>
        <h3>{{ articol.body }}</h3>
    </div>
</template>

<script>
export default {
    name:'ArticleView',
    data() {
        return {
            parametruURL:'',
            articol:{},
        }
    },
    created() {
        this.parametruURL = this.$route.params.id;

        fetch('https://jsonplaceholder.typicode.com/posts/'+this.parametruURL)
            .then(data => data.json())
            .then(dateJSON => {
                this.articol = dateJSON;
            });
    }
}
</script>

<style>

</style>