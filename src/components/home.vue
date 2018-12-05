<template>
 <main id="home">
  <div class="home-slick">
     <div class="slick-item"><img src="../assets/home/air_jordan_4_tattoo.jpg" alt=""></div>
     <div class="slick-item"><img src="../assets/home/ao9292_001_002_psny_nike_af1.jpg" alt=""></div>
     <div class="slick-item"><img src="../assets/home/new_arrival.jpg" alt=""></div>
     <div class="slick-item"><img src="../assets/home/nike_air_jordan_6_retro.jpg" alt=""></div>
     <div class="slick-item"><img src="../assets/home/yeezy350_v2_triplewhite_v2.png" alt=""></div>
  </div>
</main>
</template>

<script>
 import $ from 'jquery'
 import slicks from '../assets/lib/slick.js'
 export default {
   name: 'home',
   data () {
     return {
       msg: 'Welcome to Your Vue.js App'
     }
   },
    mounted(){
       console.log($(window));
       this.say();
        $(".home-slick").slick({
            autoplay: false,
            autoplaySpeed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
        });

    },
     methods:{
        say:function () {
            console.log($("#say"))
        }
     }
 }



 window.onload = function () {

 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

 @import  '../assets/lib/slick.css';

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


#home{
 width: 100%;
    position: relative;z-index: 8;
}


.slick-item{
 width: 100%;
 background: #f3f3f3;
 font-size: 20px;
}
 .home-slick{
 width: 100%;
 overflow: hidden;
}
 .slick-item img{
     width: 100%;
 }
 .home-slick button:focus {
     outline: none;
 }
 .home-slick .slick-dots{
     position: absolute;
     width: 100%;
     bottom: 0;
     z-index: 9;
     text-align: center;
 }

 .home-slick .slick-dots button{
     font-size: 0;
     width: 10px;
     height: 10px;
     padding: 0;
     border: 0;
     border-radius: 50%;
 }

 .home-slick .slick-dots .slick-active button{
     background: #fff;
 }

/*pc*/
@media screen and (min-width:768px){
    .home-slick .slick-list.draggable{
        width:calc(100% - 200px);
        margin-left: 100px;
        overflow: visible;
    }

    .home-slick .slick-arrow{
        position: absolute;
        z-index: 9;
        top: 0;
        bottom: 0;
        width: 100px;
        display: block;
        background: rgba(0,0,0,0.4);
        font-size: 0;
        border: 0;
        padding: 0;
        text-align: center;
    }

    .home-slick  .slick-prev{
        right: 0;
    }
    .home-slick  .slick-prev:after{
        display: inline-block;
        content: "";
        width: 16px;
        height: 16px;
        border: 1px solid #b4aaaa;
        -webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);transform: rotate(45deg);
        border-bottom: 0;
        border-left: 0;
     }
    .home-slick  .slick-next{
        left: 0;
    }

    .home-slick  .slick-next:after{
        display: inline-block;
        content: "";
        width: 16px;
        height: 16px;
        border: 1px solid #b4aaaa;
        -webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);transform: rotate(45deg);
        border-top: 0;
        border-right: 0;
    }
}

/*mobile*/
@media screen and (max-width:768px){
    .home-slick .slick-arrow{
        display:none;
    }
}
</style>
