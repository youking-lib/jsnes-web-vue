<template>
  <div class="control">
    <button @click="onPauseResume">{{status}}</button>
  </div>
</template>

<script>
  export default {
    props: ['paused'],
    data () {
      return {}
    },
    methods: {
      onPauseResume () {
        this.$emit('onPauseResume')
      }
    },
    computed: {
      status () {
        if (this.paused) {
          return 'Paused'
        } else {
          return 'Start'
        }
      }
    }
  }
</script>