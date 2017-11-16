<template>
  <video id="video" ref="video" width="640" controls autoplay></video>
</template>
<script>
  import shaka from 'shaka-player'

  export default {
    data () {
      return {
      }
    },
    props: ['manifest'],
    mounted () {
      shaka.polyfill.installAll()
      if (shaka.Player.isBrowserSupported()) {
        // Everything looks good!
        this.initPlayer()
      } else {
        // This browser does not have the minimum set of APIs we need.
        console.error('Browser not supported!')
      }
    },
    methods: {
      initPlayer: function () {
        // Create a Player instance.
        var video = this.$refs.video
        var player = new shaka.Player(video)
        // Listen for error events.
        player.addEventListener('error', this.onErrorEvent)
        // Try to load a manifest.
        // This is an asynchronous process.
        player.load(this.manifest).then(function () {
          // This runs if the asynchronous load is successful.
          console.log('The video has now been loaded!')
        }).catch(this.onError)  // onError is executed if the asynchronous load fails.
      },
      onErrorEvent: function (event) {
        // Extract the shaka.util.Error object from the event.
        this.onError(event.detail)
      },
      onError: function (error) {
        // Log the error.
        console.error('Error code', error.code, 'object', error)
      }
    }
  }
</script>
