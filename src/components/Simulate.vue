<template>
  <div class="simulate">
    <rom-list 
      v-bind:paused="paused"
      @onLoading="handleLoading" 
      @onLoaded="handleLoaded" 
      @onError="handleError"
    />

    <div class="simulate"></div>
    
    <p>{{status}}</p>
    
    <control 
      v-show="running"
      v-bind:paused="paused"
      @onPauseResume="handlePausedResume"
      @onRestart="handleRestart"
    />
  </div>
</template>

<script>
  import RomList from './RomList'
  import Control from './Control'

  export default {
    name: 'simulate',
    data () {
      return {
        running: false,
        paused: false,
        status: 'Booting...',
        romList: {
          'roms/croom/croom.nes': 'Concentration Room',
          'roms/lj65/lj65.nes': 'LJ65',
          'roms/local/Super Mario Bros. (JU) (PRG0) [!].nes': 'Super Mario Bros'
        }
      }
    },
    methods: {
      handleLoading () {
        this.status = 'Loading...'
      },
      handleLoaded () {
        this.status = 'loaded'
        this.running = true
        this.paused = false
      },
      handleError () {
        this.status = 'Error!'
        this.running = false
      },
      handlePausedResume () {
        if (this.paused) {
          this.paused = false
          this.status = 'Running'
        } else {
          this.paused = true
          this.status = 'Paused'
        }
      },
      handleRestart () {}
    },
    components: { RomList, Control }
  }
</script>
