<template>
  <div class="hello">
    <compile-cv></compile-cv>
    <show-cv></show-cv>
  </div>
</template>

<script>
import CompileCv from './CompileCv'
import ShowCv from './ShowCv'
export default {
  data () {
    return {
      
    }
  },
  components: {
    CompileCv,
    ShowCv
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
