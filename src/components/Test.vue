<template>
  <div id="test">
    <span>{{title}}</span>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        title: 'hi I m test'
      }
    }
  }
</script>

<!-- scoped is used when css specific for this template -->
<style scoped>
  #test {
    color : red;
    font-size: 24px;
  }
</style>
