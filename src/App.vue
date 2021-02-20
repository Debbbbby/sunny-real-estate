<template>
	<div id="top-bar" class="clearfix">
		<router-link :to="{name: 'Home'}" id="goToHome">
            <img id="logo" src="./assets/logo_bg-removed.png" alt="logo" title="回首頁">
        </router-link>
        <div id="contact-sunny" @click="toggleContact()">
            <img id="sunny-profile-pic" src="./assets/sunny-profile-pic.png" alt="sunny profile pic" title="聯絡秀雅">
        </div>
	</div>
	<div id="contact-card" v-bind:class="{ active: contactOpen }">
		<div id="close" class="clearfix" @click="toggleContact()">
			<i class="icon-cancel"></i>
		</div>
		<!-- <img src="./assets/sunny-profile-pic.png" class="sunny-pic" alt="sunny profile pic"> -->
		<ul class="contact-list">
			<li class="contact-btn line">
				<img id="lineLogo" src="./assets/150px_LINE_logo.png" class="icon_contact-way">
				<a href="https://line.me/R/ti/p/sunnyya0612">加秀雅為 LINE 好友</a>
			</li>
			<li class="contact-btn cellphone">
				<i class="icon-phone icon_contact-way"></i>
				<a href="tel:0913-320-118">打給秀雅</a>
			</li>
			<li class="contact-btn email">
				<i class="icon-mail icon_contact-way"></i>
				<a href="mailto:ya919350@gmail.com">寄 email 給秀雅</a>
			</li>
		</ul>
	</div>
	<div id="backdrop" v-bind:class="{ active: backdropOpen }"></div>
	<!-- <div id="sidebar-contact"></div> -->
	<div class="container">
		<router-view></router-view>
	</div>
	<footer></footer>
</template>

<script>

export default {
  name: 'App',
  data() {
	return {
		contactOpen: false,
		backdropOpen: false
	}
  },
  methods: {
	/** 開關-聯絡卡片 */
	toggleContact() {
		this.backdropOpen = !this.backdropOpen;
		this.contactOpen = !this.contactOpen;
	},
	/** 開關-黑幕 */
	toggleBackdrop() {
		this.backdropOpen = !this.backdropOpen;
	}
  }
}
</script>

<style lang="scss">
@import url("./css/fontello.css");
$theme-color: #ffed68;
$theme-orange: #F96303; // repetitive in /PropertyDetail
$gray-text: #767a86;

@font-face {
	// 蘋繁中
    font-family: "PingFang";
    src: "./font/PingFang.ttc";
}
@font-face {
	// 正黑體
    font-family: "STHeitiMedium";
    src: "./font/STHeitiMedium.ttc";
}

// animations
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes swing {
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}
// @keyframes slideInRight {
//   from {
//     transform: translate3d(100%, 0, 0);
//     opacity: 0;
//   }
//   to {
//     transform: translate3d(0, 0, 0);
//     opacity: 1;
//   }
// }
// global
* {
	box-sizing: border-box;
	font-family: PingFang, '微軟正黑體', sans-serif;
}
html {
	scroll-behavior: smooth;
}
body {
	margin: 0;
	width: 100%;
}
footer {
	height: 60px;
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
	z-index: 99;
	#logo {
		float: left;
		max-width: 50px;
		cursor: pointer;
		&:hover, &:active {
			// transform-origin: top center;
			-webkit-animation: swing 2s; /* Safari 4.0 - 8.0 */
			animation: swing 2s;
		}
	}
	#contact-sunny {
		float: right;
		max-width: 50px;
		cursor: pointer;
		&:hover, &:active {
			// transform-origin: top center;
			-webkit-animation: pulse 1s; /* Safari 4.0 - 8.0 */
			animation: pulse 1s;
			animation-iteration-count: 3;
		}
	}
	#sunny-profile-pic {
		border: 1px solid #fff;
		border-radius: 50%;
	}
}
// contact-card
#contact-card {
	display: none;
	position: fixed;
	top: 50vh;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 85%;
	max-width: 460px;
	border-radius: 6px;
	background-color: #fff;
	z-index: 101;
	#close {
		float: right;
		padding: 6px;
		cursor: pointer;
	}
	// .sunny-pic {
	// 	display: inline-block;
	// 	width: 60px;
	// }
	ul.contact-list {
		margin: 0px;
		padding: 10px;
		list-style: none;
	}
	&.active {
		display: block;
		-webkit-animation: fadeIn 1s; /* Safari 4.0 - 8.0 */
		animation: fadeIn 1s;
	}
	.contact-btn {
		position: relative;
		width: 90%;
		margin: 15px auto;
		padding: 0px 20px;
		border-radius: 30px;
		background-color: $theme-color;
		box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.1);;
		.icon_contact-way {
			display: inline-block;
			position: absolute;
			top: 50%;
			transform: translate(0px, -50%);
			width: 28px;
			font-size: 28px;
			color: $theme-orange;
		}
		a {
			line-height: 40px;
			text-align: center;
			color: #5b5b5b;
			font-weight: bold;
		}
		&:hover {
			-webkit-animation: pulse 1s; /* Safari 4.0 - 8.0 */
			animation: pulse 1s;
			animation-iteration-count: 3;
		}
	}
}
#backdrop {
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
	&.active {
		display: block;
		// -webkit-animation: fadeIn 1s; /* Safari 4.0 - 8.0 */
		// animation: fadeIn 1s;
	}
}
// // sidebar-contact
// #sidebar-contact {
// 	display: none;
// 	position: absolute;
// 	top: 61px;
// 	right: 0;
// 	background-color: #fff;
// 	border-left: 0px;
// 	border-radius: 0px 10px 10px 0px;
// 	width: 70%;
// 	height: 100%;
// 	box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.3);
// 	-webkit-animation: slideInRight 1s backwards; /* Safari 4.0 - 8.0 */
// 	animation: slideInRight 1s backwards;
// 	z-index: 2;
// }
</style>
