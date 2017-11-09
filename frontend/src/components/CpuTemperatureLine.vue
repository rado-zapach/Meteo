<template>
  <line-chart :dataProvider="dataProvider" :title="title" :valueField="valueField"
              :categoryField="categoryField"></line-chart>
</template>
<script>
  import {AXIOS} from './http-commons'
  import LineChart from './LineChart.vue'

  export default {
    components: {LineChart},
    data () {
      return {
        dataProvider: null,
        title: 'Cpu temperature',
        valueField: 'value',
        categoryField: 'created',
        date: new Date(),
        ended: true
      }
    },
    created () {
      this.date.setDate(this.date.getDate() - 365)
      this.getData(this.date)

      setInterval(() => {
        if(this.ended) {
          this.getData()
        }
      }, 10000)
    },
    methods: {
      getData: function () {
        this.ended = false
        AXIOS.get('sensors/search/findAllByTypeAndCreatedAfterOrderByCreatedAsc', {
          params: {
            'type': 'Temperature',
            'createdAfter': this.date.toISOString()
          }
        }).then(response => {
          this.dataProvider = response.data._embedded.sensors
          this.date = new Date()
          this.ended = true
        })
      }
    }
  }
</script>
