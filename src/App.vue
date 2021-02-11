<template>
	<div id="top-bar" class="clearfix">
        <div id="contact-sunny">
            <img id="sunny-profile-pic" src="./assets/sunny-profile-pic.png" alt="sunny profile pic">
        </div>
	</div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
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
.clearfix:before, .clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1; /*For IE 6&7 only*/
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
#top-bar {
    /* max-height: 70px; */
    background-color: #ffeb3f;
	padding: 6px 10px;
}
#contact-sunny {
	float: left;
	max-width: 50px;
}
#sunny-profile-pic {
	border: 1px solid #fff;
	border-radius: 50%;
}
</style>
