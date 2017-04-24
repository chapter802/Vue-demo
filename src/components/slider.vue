<template>
  <div class="slider">
    <ul>
      <li><img src="../assets/image/slider/2.jpg" alt=""></li>
      <li><img src="../assets/image/slider/3.jpg" alt=""></li>
      <li><img src="../assets/image/slider/4.jpg" alt=""></li>
      <li><img src="../assets/image/slider/5.jpg" alt=""></li>
    </ul>
    <ol>
      <li class="active"></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
    <div class="search-bar">
      <input type="text" minlength="2" maxlength="60" placeholder="search...">
      <span><i class="fa fa-commenting-o" aria-hidden="true"></i></span>
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){
      this.fnSlider();
    },
    methods:{
      fnSlider(){
        $(function (){
          var mySwipe=new Swipe($('.slider')[0],{
            auto:3000,
            continuous:true,
            stopPropation:true,
            callback:function (index,element){
              var soli = $('.slider ol li');
              soli.removeClass('active');
              soli.eq(index).addClass('active');
            }
          });
        });
      }
    }
  }
</script>

<style lang="scss">
  .slider {
    position: relative;
    width: 100%;
    height: 20rem;
    overflow: hidden;
    ul li {
      display: inline-block;
      width: 100%;
      float: left;
      position: relative;
      img {
        width: 100%;
        height: 20rem;
      }
    }
    ol {
      position: absolute;
      right: 1.5rem;
      bottom: 1.5rem;
      li{
        width: 1.2rem;
        height: 1.2rem;
        float: left;
        margin-right: 0.5rem;
        border-radius: 50%;
        background: #000;
        &.active{
          background:#fff;
        }
        }
      }
    .search-bar {
      position: absolute;
      top: 1rem;
      z-index: 5;
      width:100%;
      height: 3rem;
      background: transparent;
      input {
        display: inline-block;
        float: left;
        width: 84%;
        height: 3rem;
        margin-left: 3%;
        font: 300 1.5rem/3rem sans-serif;
        color: #fff;
        text-indent: 1rem;
        background: rgba(255,255,255,.4);
        &[type=text]:focus {
        outline:0;
      }
        &::-webkit-input-placeholder{
          text-align: left;
          text-indent: 1rem;
          color: #ccc;
        }
      }
      span {
        float: right;
        margin-right: 3%;
        font-size: 2.4rem;
        line-height: 3rem;
        color: #fff;

      }
    }
    }


</style>