<template>
  <div class="books">
    <!--Books header start-->
    <div class="bd-head">
      <span class="f-bars"><i class="fa fa-bars" aria-hidden="true"></i></span>
      <input type="text" minlength="2" maxlength="60" placeholder="search...">
      <span class="f-bell"><i class="fa fa-bell" aria-hidden="true"></i></span>
    </div>
    <!--Books header end-->
    <!--Book Details start-->
    <div id="iSlider-wrapper">
      <div class="c-c">
        <div class="book-cover">
          <img src="../assets/image/booksc/EnglishGrammarDemystifiedASelfTeachingGuide-PhyllisDutwin.jpg" alt="">
          <span class="bd-title">English Grammar Demystified A SelfTeaching Guide</span>
          <span class="bd-author">Phyllis Dutwin</span>
          <span class="bd-content">Why should you study English? Do you speak and write English? That’s reason enough. When you speak or write, you present yourself to others, and if you care at all about how you’re perceived—and who doesn’t?—you care about how your use of language represents you. Certainly, not all jobs depend exclusively upon writing and speaking skills, but most do to some signiﬁcant extent. If you are in school, your teachers have probably set a standard for written and spoken English.</span>
          <div class="s-line"></div>
          <div class="bd-rcd">
            <h3>Recommend</h3>
            <span>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="c-c">
        <div class="book-cover">
          <img src="../assets/image/booksc/EnglishGrammarDemystifiedASelfTeachingGuide-PhyllisDutwin.jpg" alt="">
          <span class="bd-title">English Grammar Demystified A SelfTeaching Guide</span>
          <span class="bd-author">Phyllis Dutwin</span>
          <span class="bd-content">Why should you study English? Do you speak and write English? That’s reason enough. When you speak or write, you present yourself to others, and if you care at all about how you’re perceived—and who doesn’t?—you care about how your use of language represents you. Certainly, not all jobs depend exclusively upon writing and speaking skills, but most do to some signiﬁcant extent. If you are in school, your teachers have probably set a standard for written and spoken English.</span>
          <div class="s-line"></div>
          <div class="bd-rcd">
            <h3>Recommend</h3>
            <span>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="c-c">
        <div class="book-cover">
          <img src="../assets/image/booksc/EnglishGrammarDemystifiedASelfTeachingGuide-PhyllisDutwin.jpg" alt="">
          <span class="bd-title">English Grammar Demystified A SelfTeaching Guide</span>
          <span class="bd-author">Phyllis Dutwin</span>
          <span class="bd-content">Why should you study English? Do you speak and write English? That’s reason enough. When you speak or write, you present yourself to others, and if you care at all about how you’re perceived—and who doesn’t?—you care about how your use of language represents you. Certainly, not all jobs depend exclusively upon writing and speaking skills, but most do to some signiﬁcant extent. If you are in school, your teachers have probably set a standard for written and spoken English.</span>
          <div class="s-line"></div>
          <div class="bd-rcd">
            <h3>Recommend</h3>
            <span>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--Book Details end-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  };
</script>

<style lang="scss">
  .books {
    &::-webkit-scrollbar {
      display: none;
    }
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
      input {
        position: fixed;
        display: inline-block;
        top: 1.5rem;
        width: 28rem;
        height: 3rem;
        margin-left: -15.6rem;
        text-align: center;
        color: #000;
        background: rgba(245,245,245,.8);
        &[type=text]:focus {
          outline: 0;
        }
      }
      .f-bell {
        display: inline-block;
        float: right;
        margin-right: 5%;
      }
    }
    .c-c {
      width: 100%;
      margin-top: 2rem;
      text-align: center;
    .book-cover {
      display: inline-block;
      width: 84%;
      background: #fff;
      box-shadow: 0 15px 30px rgba(0,0,0,0.1);
      img {
        margin-top: 2.6rem;
        box-shadow: 5px 8px 20px rgba(0,0,0,0.3);
      }
      .bd-title {
        display: block;
        margin-top: 3rem;
        padding: 0 15%;
        font: 400 1.6rem/2rem sans-serif;
        color: #313131;
      }
      .bd-author {
        display: block;
        margin-top: 1rem;
        font: 600 1.2rem/1.6rem sans-serif;
        color: #b6b6b6;
      }
      .bd-content {
        display: block;
        height: 5.4rem;
        margin: 2rem 0;
        padding: 0 5%;
        font: 400 1.3rem/1.8rem sans-serif;
        color: #8d8d8d;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .s-line {
        width: 100%;
        height: 0.6rem;
        background: #efefef;
      }
      .bd-rcd {
        height: 4.4rem;
        padding-left: 5%;
        padding-right: 5%;
        h3 {
          display: inline-block;
          float: left;
          font: 400 1.6rem/4.4rem sans-serif;
          color: #313131;
        }
        span i {
          display: inline-block;
          float: right;
          margin-right: 0.4rem;
          font-size: 1.8rem;
          line-height: 4.4rem;
          color: #ffb541;
          &:first-child {
            color: #ebebeb;
          }
        }
      }
      }
    }
  }
</style>