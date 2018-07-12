<template>
  <div style="position: relative; z-index: 2; background-color: #000; height: 100vh;">
    <parallax style="height: 100vh;">
      {{ data }}
    </parallax>
  </div>
</template>

<script>
export default {
  name: 'FirstLogin',
  data () {
    return {
      data: 'FirstLogin Page'
    }
  }
}
</script>
