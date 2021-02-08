<template>
  <TopBar />
</template>

<script>
import TopBar from './components/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>

<style>
* {
	box-sizing: border-box;
}
html {
	scroll-behavior: smooth;
}
body {
	margin: 0;
	width: 100%;
}
.container {
	margin: 0 auto;
	max-width: 1200px;
}
.clearfix {
	clear: both;
}
img {
	display: block;
	width: 100%;
	height: auto;
}
a {
  text-decoration: none;
}
/* #app {
} */
</style>
