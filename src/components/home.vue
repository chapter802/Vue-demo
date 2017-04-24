<template>
  <div>
    <!--slider start-->
  <v-slider></v-slider>
    <!--slider end-->
    <!--popular books start-->
  <div class="home">
    <!--popular books title start-->
    <div class="popular">
      <h2>popular</h2>
      <span>more&nbsp;<i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
    </div>
    <!--popular books title end-->
    <!--popular books content start-->
    <div class="books-rcd">
      <ul>
        <li>
          <div class="books-rcd-container">
            <a class="books-rcdlk" href=""><img src="../assets/image/booksc/DontMakeMeThink.jpg" alt="" /><h3 class="book-name">Dont Make Me Think</h3></a>
            <a class="dload" href="">Download</a>
          </div>
        </li>
        <li>
          <div class="books-rcd-container">
            <a class="books-rcdlk" href=""><img src="../assets/image/booksc/HowtoLearnEnglishAguidetospeakingEnglishlikeanativespeake.jpg" alt="" /><h3 class="book-name">How to Learn English A guide to speaking English like a native speake</h3></a>
            <a class="dload" href="">Download</a>
          </div>
        </li>
        <li>
          <div class="books-rcd-container">
            <a class="books-rcdlk" href=""><img src="../assets/image/booksc/ProfessionalJavaScriptforWebDevelopers,3rdEdition.jpg" alt="" /><h3 class="book-name">Professional JavaScript for Web Developers, 3rd Edition</h3></a>
            <a class="dload" href="">Download</a>
          </div>
        </li>
        <li>
          <div class="books-rcd-container">
            <a class="books-rcdlk" href=""><img src="../assets/image/booksc/WhyMenDontListenandWomenCantReadMaps-BarbaraPease&AllanPease.jpg" alt="" /><h3 class="book-name">Why Men Don't Listen and Women Can't Read Maps</h3></a>
            <a class="dload" href="">Download</a>
          </div>
        </li>
        <li>
          <div class="books-rcd-container">
            <a class="books-rcdlk" href=""><img src="../assets/image/booksc/AModernHistoryofHongKong.jpg" alt="" /><h3 class="book-name">A Modern History of Hong Kong</h3></a>
            <span class="dload">Download</span>
          </div>
        </li>
        <li>
          <div class="books-rcd-container">
            <a class="books-rcdlk" href=""><img src="../assets/image/booksc/ComputerSecurity,Principles2011.jpg" alt="" /><h3 class="book-name">Computer Security, Principles 2011</h3></a>
            <a class="dload" href="">Download</a>
          </div>
        </li>
        <li>
          <div class="books-rcd-container">
            <a class="books-rcdlk" href=""><img src="../assets/image/booksc/EnglishGrammarDemystifiedASelfTeachingGuide-PhyllisDutwin.jpg" alt="" /><h3 class="book-name">English Grammar Demystified A Self Teaching Guide</h3></a>
            <a class="dload" href="">Download</a>
          </div>
        </li>
        <li>
          <div class="books-rcd-container">
            <a class="books-rcdlk" href=""><img src="../assets/image/booksc/FrommersEngland2010-DarwinPorter.jpg" alt="" /><h3 class="book-name">Frommer's England 2010 - Darwin Porter</h3></a>
            <a class="dload" href="">Download</a>
          </div>
        </li>
        <li>
          <div class="books-rcd-container">
            <a class="books-rcdlk" href=""><img src="../assets/image/booksc/HowtoTalktoAnyone-92LittleTricksforBigSuccessinRelationships.jpg" alt="" /><h3 class="book-name">How to Talk to Anyone - 92 Little Tricks for Big Success in Relationships</h3></a>
            <a class="dload" href="">Download</a>
          </div>
        </li>
        <li>
          <div class="books-rcd-container">
            <a class="books-rcdlk" href=""><img src="../assets/image/booksc/HowToWriteABusinessPlan2004.jpg" alt="" /><h3 class="book-name">How To Write A Business Plan 2004</h3></a>
            <a class="dload" href="">Download</a>
          </div>
        </li>
        <li>
          <div class="books-rcd-container">
            <a class="books-rcdlk" href=""><img src="../assets/image/booksc/Photography,Langfords9thed(2010).jpg" alt="" /><h3 class="book-name">Photography, Langford's 9th ed (2010)</h3></a>
            <span class="dload">Download</span>
          </div>
        </li>
        <li>
          <div class="books-rcd-container">
            <a class="books-rcdlk" href=""><img src="../assets/image/booksc/TheCambridgeCompaniontoModernChineseCulture.jpg" alt="" /><h3 class="book-name">The Cambridge Companion to Modern Chinese Culture</h3></a>
            <a class="dload" href="">Download</a>
          </div>
        </li>
      </ul>
    </div>
    <!--popular books content end-->
  </div>
    <!--popular books end-->
  </div>

</template>

<script type="text/ecmascript-6">
  import slider from './slider.vue';
  export default {
    components: {
      'v-slider': slider
    }
  };
</script>

<style lang="scss">
  .home {
    overflow-x: hidden;
    overflow-y: scroll ;
    padding-bottom: 4rem;
  }
  .home::-webkit-scrollbar {
    display: none;
  }
  .popular {
    width: 100%;
    height: 2rem;
    margin-top: 0.8rem;
  }
  .popular h2 {
    display: inline-block;
    float: left;
    padding-left: 6%;
    font: 600 1.8rem/2rem sans-serif;
    color: #1e1e1e;
  }
  .popular span {
    float: right;
    padding-right: 6%;
    font: 600 1.4rem/2rem sans-serif;
    color: #1e1e1e;
  }
 .books-rcd ul li {
    position: relative;
    display: block;
    float: left;
    width: 40%;
    height: auto;
  }
  .books-rcd ul li:nth-child(odd) {
    padding: 5% 0 5% 6%;
  }
  .books-rcd ul li:nth-child(even) {
    padding: 5% 6% 5% 8%;
    color: red;
  }
  .books-rcd .books-rcd-container {
    position: relative;
    width: 100%;
    padding: 0.5rem 0.5rem 0 0;
    text-align: center;
    background: #fff;
    box-shadow:0 15px 30px rgba(0,0,0,0.1);
  }
  .books-rcd .books-rcd-container .book-name {
    position: relative;
    display: block;
    margin: 0.5rem auto 1em;
    max-width: 100%;
    height: 3.4rem;
    font: 1.3rem/1.7rem  Helvetica;
    color: #777;
    overflow: hidden;
    word-wrap: break-word;
  }
  .books-rcd .dload {
    display: block;
    position: relative;
    left: 52%;
    bottom: 0.5rem;
    width: 6.8rem;
    height: 2.4rem;
    margin-left: -3.4rem;
    font: 1.2rem/2.4rem Helvetica;
    color: #FFF;
    background: #756059;
  }
  .books-rcd .dload:hover {
    background: #684C44;
  }
</style>