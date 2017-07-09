<template>
  <div class="compile-cv">
  	<ul>
  		<li v-for="(img,n) in imgList" @click="change(n)">
  			<img v-show="select[n]" :src="img.img1"/>
  			<img v-show="!select[n]" :src="img.img2"/>
  		</li>
  	</ul>


    
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      select:[true,false,false,false,false,false],
      // imgs:["xinxi","jiaoyu","shixi","zhiwei","jineng","xiangmu"],
      imgList:[
      	{
      		"img1":require("../assets/img/xinxi.png"),
      		"img2":require("../assets/img/xinxi2.png")
     	},
      	{
      		"img1":require("../assets/img/jiaoyu.png"),
      		"img2":require("../assets/img/jiaoyu2.png")
      	},
      	{
      		"img1":require("../assets/img/shixi.png"),
      		"img2":require("../assets/img/shixi2.png")
      	},
      	{
      		"img1":require("../assets/img/zhiwei.png"),
      		"img2":require("../assets/img/zhiwei2.png")
      	},
      	{
      		"img1":require("../assets/img/jineng.png"),
      		"img2":require("../assets/img/jineng2.png")
      	},
      	{
      		"img1":require("../assets/img/xiangmu.png"),
      		"img2":require("../assets/img/xiangmu2.png")
      	}]
    }
  },
  mounted(){
  	this.change(0);
  },
  methods:{
  	change(n){
  		for (var i = 0; i < this.select.length; i++) {
  			if(i!=n){
  				this.select[i] = false;
  			}else{
  				this.select[i] = true;
  			}
  			if(this.select[i]){
  				$('ul li img').css('background','#000');
  				$('ul').find('li').eq(i).find('img').css('background','#fff');
  			}
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../assets/css/reset.css";
	.compile-cv{
		width: 30vw;
		height: 90vh;
		margin: 5vh 2.5vw;
		border: 1px solid rgb(0,0,0,0.3);
		border-radius: 6px;
		box-shadow: 0 4px 12px rgba(0,0,0,0.5);
		float: left;
	}
	ul{
		float: left;
		width: 5vw;
		height: 87vh;
		/*background: #5e9fa1;*/
		background: #000;
		padding-top: 3vh;
	}
	img{
		/*background: #ccc;*/
		width: 3vw;
		padding: 1vw;
	}
</style>
