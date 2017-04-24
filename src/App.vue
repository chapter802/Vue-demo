<template>
  <div class="app">
      <router-view class="content"></router-view>
    <div class="footer">
      <router-link to="/home" class="item"><i class="fa fa-home" aria-hidden="true"></i></router-link>
      <router-link to="/books" class="item"><i class="fa fa-book" aria-hidden="true"></i></router-link>
      <router-link to="/user" class="item"><i class="fa fa-user" aria-hidden="true"></i></router-link>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">

  </script>

<style lang="scss">
  @import './common/scss/mixin.css';

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .content {
      flex-grow: 1;
      width: 100%;
      height: 100%;
      text-align: center;
    }
  .footer {
    position: fixed;
    bottom: 0;
    display: flex;
    z-index: 5;
    width: 100%;
    height: 4rem;
    border-top: 1px solid #ccc;
    background: #fff;
    .item {
      flex: 1;
      font-size: 2.4rem;
      line-height: 4rem;
      text-align: center;
      color: #000;
    }
  }

  }
</style>
