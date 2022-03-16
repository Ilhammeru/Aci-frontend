<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/assets/css/general.scss'
export default {
  name: "App"
}
</script>

<style lang="scss">
// load font
@font-face {
  font-family: "roboto-regular";
  src: local("roboto-regular"),
  url(./assets/font/Roboto-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "roboto-bold";
  src: local("roboto-bold"),
  url(./assets/font/Roboto-Bold.ttf) format("truetype");
}

@font-face {
  font-family: 'poppins-bold';
  src: local("poppins-bold"),
  url(./assets/font/Poppins/Poppins-Bold.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'roboto-regular';
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 0;
}
</style>
