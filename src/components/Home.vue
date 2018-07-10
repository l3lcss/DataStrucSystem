<template>
  <div style="position: relative; z-index: 2; background-color: #000; height: 100vh;">
    <parallax>
      <div class="glitch load" data-text="BLACKPINK" style="color:white;">BLACKPINK</div>
      <div class="row">
        <div class="col s2"/>
        <div class="input-field col s8 load">
          <input type="text" id="username" autocomplete="off">
          <label for="username">USERNAME</label>
        </div>

        <div class="col s2"/>
      </div>
      <div class="row">
        <div class="col s2"/>
        <div class="input-field col s8 load">
          <input type="password" id="password" autocomplete="off">
          <label for="password">PASSWORD</label>
        </div>
        <div class="col s2"/>
      </div>
      <div class="row">
        <div class="col s2"/>
        <div class="col s2 load">
          <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
        <div class="col s2"/>
      </div>
    </parallax>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import ScrollReveal from 'scrollreveal'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    const sr = ScrollReveal({
      duration: 400,
      delay: 200
    })
    sr.reveal('.load', { delay: 0, origin: 'top' }, 200)
  },
  components: {
    Parallax
  }
}
</script>

<style>
#username, #password {
  color:aliceblue;
}
.btn {
  background-color: #c9788c;
  color: black;
  font-weight: bold;
}
.btn:hover, .btn:focus {
  background-color: rgb(52, 42, 42);
  color: #c9788c;
}
</style>
