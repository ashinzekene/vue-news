<template>
  <div id="app">
    <nav class="navbar my-navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h1 class="title is-3">Newzz</h1>
      </div>
      <MyTabs></MyTabs>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import MyTabs from '@/components/NavTabs'

export default {
  name: 'App',
  components: {
    MyTabs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.my-navbar {
  padding: 20px 30px 1px;
  box-shadow: 0px 0px 20px 2px rgba(100, 100, 100, 0.3);
}
</style>
