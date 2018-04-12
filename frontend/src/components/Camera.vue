<template>
  <video id="video" ref="video" width="640" controls autoplay></video>
</template>
<script>
  import shaka from 'shaka-player'
  import {AXIOS} from './http-commons'

  export default {
    data () {
      return {
      }
    },
    props: ['manifest'],
    mounted () {
      shaka.polyfill.installAll()
      if (shaka.Player.isBrowserSupported()) {
        this.initPlayer()
      } else {
        console.error('Browser not supported!')
      }

      window.onkeypress = function (event) {
        if (event.keyCode === 97) {
          AXIOS.get('servo/left')
        } else if (event.keyCode === 100) {
          AXIOS.get('servo/right')
        } else if (event.keyCode === 119) {
          AXIOS.get('servo/up')
        } else if (event.keyCode === 115) {
          AXIOS.get('servo/down')
        }
      }
    },
    methods: {
      initPlayer: function () {
        var video = this.$refs.video
        var player = new shaka.Player(video)
        player.addEventListener('error', this.onErrorEvent)
        player.load(this.manifest).then(function () {
          console.log('The video has now been loaded!')
        }).catch(this.onError)
      },
      onErrorEvent: function (event) {
        this.onError(event.detail)
      },
      onError: function (error) {
        console.error('Error code', error.code, 'object', error)
      }
    }
  }
</script>
