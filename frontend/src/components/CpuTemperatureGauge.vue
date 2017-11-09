<template>
  <gauge-chart :value="value"></gauge-chart>
</template>
<script>
  import {AXIOS} from './http-commons'
  import GaugeChart from './GaugeChart.vue'

  export default {
    components: {GaugeChart},
    data () {
      return {
        value: 0
      }
    },
    created () {
      setInterval(() => {
        this.getData()
      }, 2000)
    },
    methods: {
      getData: function (date) {
        AXIOS.get('system/sensors'
        ).then(response => {
          this.value = response.data.cpuTemperature
        })
      }
    }
  }
</script>
