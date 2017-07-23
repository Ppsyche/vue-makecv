<template>
  <div class="compile-cv">
    <ul class="nav nav-pills nav-stacked">
      <li v-for="(li,n) in liList" @click="change(n)" role="presentation">
        <a href="#" :class="'glyphicon glyphicon-'+li"></a>
      </li>
    </ul>
    <div class="input-box">
      <add-one></add-one>
    </div>
    
  </div>
</template>

<script>
import addOne from './add/addOne'
import $ from 'jquery'
export default {
  data () {
    return {
     liList:["home","user","book","pencil","briefcase","folder-open"],
     show:false
    }
  },
  components: {
    addOne,
  },
  mounted(){
  	this.change(0);
  },
  methods:{
  	 change(n){
        $("li").eq(n).addClass("active").siblings().removeClass("active");
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../assets/lib/bootstrap/css/bootstrap.css";
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
		height: 90vh;
		/*background: #5e9fa1;*/
		background: #c71223;
		padding-top: 3vh;
	}
  li a{
    width: 5vw;
    height: 3.4vw;
    border-radius: 0;
    font-size: 2em;
    /*background: #c71223;*/
    color: #fff;
    margin-top: 1vh;
  }
  .nav>li>a:hover, .nav>li>a:focus {
    background: #fff;
    color: #c71223;
  }
  .nav-pills>li.active>a, .nav-pills>li.active>a:hover, .nav-pills>li.active>a:focus {
    background: #fff;
    color: #c71223;
  }
  .input-box{
    float: left;
    width: 20vw;
    padding: 3vw 1vw;
  }

</style>
