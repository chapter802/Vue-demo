<template>
  <div class="user">
      <!--user header start-->
      <div class="bd-head">
        <span class="f-bars"><i class="fa fa-bars" aria-hidden="true"></i></span>
        <h3>Andy's Space</h3>
        <span class="f-bell"><i class="fa fa-bell" aria-hidden="true"></i></span>
      </div>
      <!-- user header end -->
    <div class="u-container">
      <div class="u-info">
        <img src="../assets/image/user/avatar.jpg" alt="">
        <div class="u-desc">
        <h3>Andy Zhang</h3>
        <span>Reading, coding, Music, Headphones. A Front-end Developer</span>
        </div>
        <div class="u-follow">follow</div>
      </div>
      <div class="u-plan">
        <ul>
          <li>
            <div class="u-num">
              <h3>Done</h3>
              <span>24</span>
            </div>
          </li>
          <li>
            <div class="u-num">
              <h3>Ongoing</h3>
              <span>6</span>
            </div>
          </li>
          <li>
            <div class="u-num">
              <h3>favorte</h3>
              <span>5</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="hr"></div>
    </div>
    <div class="u-list">
      <h3>My List</h3>
      <ul>
        <li><img src="../assets/image/booksc/Photography,Langfords9thed(2010).jpg" alt=""></li>
        <li><img src="../assets/image/booksc/TheCambridgeCompaniontoModernChineseCulture.jpg" alt=""></li>
        <li><img src="../assets/image/booksc/EnglishGrammarDemystifiedASelfTeachingGuide-PhyllisDutwin.jpg" alt=""></li>
        <li><img src="../assets/image/booksc/FrommersEngland2010-DarwinPorter.jpg" alt=""></li>
        <li><img src="../assets/image/booksc/WhyMenDontListenandWomenCantReadMaps-BarbaraPease&AllanPease.jpg" alt=""></li>
        <li><img src="../assets/image/booksc/AModernHistoryofHongKong.jpg" alt=""></li>
        <li><img src="../assets/image/booksc/ComputerSecurity,Principles2011.jpg" alt=""></li>
      </ul>
    </div>
    <v-echarts></v-echarts>
  </div>
</template>

<script type="text/ecmascript-6">
  import echarts from './echarts.vue';
  export default {
    components: {
      'v-echarts': echarts
    }
  };
</script>

<style lang="scss">

  .user {
    width: 100%;
    .bd-head {
      width: 100%;
      height: 3.6rem;
      margin-top: 1rem;
      line-height: 3.6rem;
      font: 600 2.8rem/3.6rem sans-serif;
      color: #bdbdbd;
      .f-bars {
        display: inline-block;
        float: left;
        margin-left: 5%;
      }
      h3 {
        display: inline-block;
        text-align: center;
        color: #000;
      }
      .f-bell {
        display: inline-block;
        float: right;
        margin-right: 5%;
      }
    }
   .u-container {
     .u-info {
       position: relative;
       width: 84%;
       margin: 3rem 6% 0;
       &.clearfix {
         content:".";
         display:block;
         height:0;
         clear:both;
         visibility:hidden;
       }
       img {
         display: inline-block;
         float: left;
         width: 30%;
         height: 30%;
       }
       .u-desc {
         position: relative;
         display: inline-block;
         float: left;
         width: 70%;
         height: 200%;
         h3 {
           float: left;
           height: 30%;
           padding-left: 2rem;
           font: 400 1.7rem/2rem sans-serif;
         }
         span {
           display: block;
           float: left;
           height: 30%;
           padding-top: 0.5rem;
           padding-left: 2rem;
           font: 400 1.2rem/1.6rem sans-serif;
           color: #b6b6b6;
           text-align: left;
           word-break: break-all;
         }
       }
       .u-follow {
         float: right;
         bottom: 0;
         width: 20%;
         height: 2.4rem;
         margin-top: 5%;
         font: 600 1rem/2.4rem sans-serif;
         color: #9a9a9c;
         text-align: center;
         background-color: #fff;
         box-shadow: 0 2px 10px 1px rgba(0,0,0,.1);
       }
     }
     .u-plan {
       position: relative;
       display: block;
       float: left;
       width: 84%;
       height: 5rem;
       margin: 3rem 6% 0;
       ul li {
         display: inline-block;
         margin: 0 8.2%;
         .u-num {
           h3 {
             font: 400 1.4rem/2rem sans-serif;
             color: #9a9a9c;
           }
           span {
             display: block;
             height: 2.6rem;
             margin-top: 0.5rem;
             border-bottom: 2px solid #000;
             font: 400 1.4rem/2rem sans-serif;
           }
         }
       }
     }
     .hr {
       padding-top: 2rem;
       height: 1rem;
       box-shadow: 0 8px 26px rgba(0,0,0,.1);
       clear: both;
     }
   }
    .u-list {
      margin: 1.5rem 6% 0;
      overflow: hidden;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      h3 {
        position: absolute;
        float: left;
        font: 400 1.6rem/2rem arial;
      }
      ul {
        float: left;
        margin: 3rem 0 1rem -3rem;
        width: 330%;
        li {
          display: inline-block;
          width: 11.8%;
          margin-left: 2%;
          box-shadow: 5px 5px 24px rgba(0,0,0,.3)
          }
        }
    }
  }


</style>