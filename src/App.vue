<template>
	<div id="top-bar" class="clearfix">
        <div id="contact-sunny" @click="toggleContact()">
            <img id="sunny-profile-pic" src="./assets/sunny-profile-pic.png" alt="sunny profile pic">
        </div>
		<div id="menu">
			<i class="icon-th-large"></i>
		</div>
	</div>
	<div id="sidebar-contact" v-bind:class="{ active: contactOpen }">
		<ul class="contact-list">
			<li class="contact-btn line">
				<a href="https://line.me/R/ti/p/Shh506720">加秀雅為 LINE 好友</a>
			</li>
			<li class="contact-btn cellphone">
				<a href="tel:0913-320-118">打給秀雅</a>
			</li>
			<li class="contact-btn email">
				<a href="mailto:ya919350@gmail.com">寄 email 給秀雅</a>
			</li>
		</ul>
	</div>
	<div class="container">
		<router-view></router-view>
	</div>
</template>

<script>

export default {
  name: 'App',
  data() {
	return {
		contactOpen: false
	}
  },
  methods: {
	toggleContact() {
		this.contactOpen = !this.contactOpen
	}
  }
}
</script>

<style lang="scss">
$theme-color: #ffed68;
$gray-text: #767a86;

@font-face {
	// 蘋繁中
    font-family: "PingFang";
    src: "./fonts/PingFang.ttc";
}
@font-face {
	// 正黑體
    font-family: "STHeitiMedium";
    src: "./fonts/STHeitiMedium.ttc";
}

@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
* {
	box-sizing: border-box;
	font-family: "PingFang";
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
	display: block;
	text-decoration: none;
}
.ellipsis-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
// app
#app {
	min-height: 100vh;
	position: relative;
}
// TopBar
#top-bar {
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
    background-color: $theme-color;
	padding: 6px 10px;
	#contact-sunny {
		float: left;
		max-width: 50px;
		cursor: pointer;
	}
	#sunny-profile-pic {
		border: 1px solid #fff;
		border-radius: 50%;
	}
}
// sidebar-contact
#sidebar-contact {
	display: none;
	position: absolute;
	top: 61px;
	left: 0;
	background-color: #fff;
	// border: 1px solid #ffbf51;
	border-left: 0px;
	// border-style: solid #ffbf51;
	border-radius: 0px 10px 10px 0px;
	width: 70%;
	// height: calc(100% - 61px);
	height: 100%;
	box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.3);
	-webkit-animation: slideInLeft 1s backwards; /* Safari 4.0 - 8.0 */
	animation: slideInLeft 1s backwards;
	z-index: 2;
	ul.contact-list {
		margin: 0px;
		padding: 10px;
		list-style: none;
	}
	&.active {
		display: block;
		-webkit-animation: slideInLeft 1s; /* Safari 4.0 - 8.0 */
		animation: slideInLeft 1s;
	}
	.contact-btn {
		width: 90%;
		margin: 15px auto;
		padding: 10px;
		border-radius: 30px;
		&.line {
			background-color: #09b801;
		}
		&.cellphone {
			background-color: $theme-color;
		}
		&.email {
			background-color: $theme-color;
		}
		a {
			text-align: center;
			color: #fff;
		}
	}
}
</style>
