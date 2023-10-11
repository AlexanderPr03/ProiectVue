<template>
  <div id="card">
    <h1>Primul Articol</h1>
    <!-- <slot name="email"></slot><br>
    <slot name="tel"></slot> -->

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolores numquam, molestias consequuntur accusantium, quos ab corrupti excepturi nobis rem dignissimos modi! Minus autem dicta porro placeat maxime? Saepe, nobis!</p>
    <button>Click me</button>
  </div>
</template>

<script>
export default {
    name:"CardComponent",

    // props: {
    //     title:String,
    // }
}
</script>

<style>
  #card {
    border: 2px solid black;
    border-radius: 12px;
    width: 300px;
    height: 400px;
  }
</style>