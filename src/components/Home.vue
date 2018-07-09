<template>
  <div style="position: relative; z-index: 2; background-color: #000; height: 100vh;">
    <parallax>
      <div class="foo" style="position: absolute; z-index: 3; color:#fff; font-size:40px;"> foo</div>
      <div class="bar" style="position: absolute; z-index: 3; color:#fff; font-size:40px; top: 50px;"> Bar </div>
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
    sr.reveal('.foo', { delay: 0, origin: 'top' }, 200)
    sr.reveal('.bar', 200)
  },
  components: {
    Parallax
  }
}
</script>
