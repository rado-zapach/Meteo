<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="text-center">System information</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <system-info :info="computerSystem" :title="csTitle"></system-info>
          <system-info :info="processor" :title="pTitle"></system-info>
          <system-info :info="memory" :title="mTitle"></system-info>
          <system-info :info="powerSources" :title="pwTitle"></system-info>
        </div>
        <div class="col-sm-4">
          <system-info :info="diskStores" :title="dsTitle"></system-info>
          <system-info :info="networkInterfaces" :title="nTitle"></system-info>
          <system-info :info="displays" :title="dTitle"></system-info>
          <system-info :info="sensors" :title="sTitle"></system-info>
        </div>
        <div class="col-sm-4">
          <system-info :info="usbDevices" :title="usbTitle"></system-info>
          <system-info :info="operatingSystem" :title="osTitle"></system-info>
          <system-info :info="processes" :title="prTitle"></system-info>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <h2 class="text-center">Camera</h2>
        </div>
      </div>
      <div class="row">
        <camera style="float: none; margin: 0 auto;" manifest="/camera/manifest.mpd"></camera>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <h2 class="text-center">CPU temperature</h2>
        </div>
      </div>
      <div class="row">
        <line-graph type="t-cpu" title="t-cpu"></line-graph>
        <cpu-temperature-gauge></cpu-temperature-gauge>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <h2 class="text-center">Temperature sensors t1, t2</h2>
        </div>
      </div>
      <div class="row">
        <line-graph type="t-DHT22-22" title="22-t"></line-graph>
        <line-graph type="t-DHT22-27" title="27-t"></line-graph>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <h2 class="text-center">Humidity sensors h1, h2</h2>
        </div>
      </div>
      <div class="row">
        <line-graph type="h-DHT22-22" title="22-h"></line-graph>
        <line-graph type="h-DHT22-27" title="27-h"></line-graph>
      </div>

    </div>
  </div>
</template>

<script>
  import SystemInfo from './SystemInfo.vue'
  import {AXIOS} from './http-commons'
  import LineGraph from './LineGraph.vue'
  import CpuTemperatureGauge from './CpuTemperatureGauge.vue'
  import Camera from './Camera.vue'

  export default {
    components: {SystemInfo, LineGraph, CpuTemperatureGauge, Camera},
    data () {
      return {
        csTitle: 'Computer system',
        computerSystem: null,
        pTitle: 'Processor',
        processor: null,
        mTitle: 'Memory',
        memory: null,
        pwTitle: 'Power sources',
        powerSources: null,
        dsTitle: 'Disk stores',
        diskStores: null,
        nTitle: 'Network interfaces',
        networkInterfaces: null,
        dTitle: 'Displays',
        displays: null,
        sTitle: 'Sensors',
        sensors: null,
        usbTitle: 'USB devices',
        usbDevices: null,
        osTitle: 'Operating system',
        operatingSystem: null,
        prTitle: 'Processes',
        processes: null
      }
    },
    created () {
      AXIOS.get('system/computerSystem').then(response => { this.computerSystem = response.data })
      AXIOS.get('system/processor').then(response => { this.processor = response.data })
      AXIOS.get('system/memory').then(response => { this.memory = response.data })
      AXIOS.get('system/powerSources').then(response => { this.powerSources = response.data })
      AXIOS.get('system/diskStores').then(response => { this.diskStores = response.data })
      AXIOS.get('system/networkIFs').then(response => { this.networkInterfaces = response.data })
      AXIOS.get('system/displays').then(response => { this.displays = response.data })
      AXIOS.get('system/sensors').then(response => { this.sensors = response.data })
      AXIOS.get('system/usbDevices').then(response => { this.usbDevices = response.data })
      AXIOS.get('system/OS').then(response => { this.operatingSystem = response.data })
      AXIOS.get('system/processes').then(response => { this.processes = response.data })
    }
  }
</script>
