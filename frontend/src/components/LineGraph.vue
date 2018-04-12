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
        categoryField: 'created'
      }
    },
    props: ['type'],
    created () {
      var date = new Date()
      date.setMonth(date.getMonth() - 1)

      this.getData(date)
    },
    methods: {
      getData: function (date) {
        AXIOS.get('sensors/search/findAllByTypeAndCreatedAfterOrderByCreatedAsc', {
          params: {
            'type': this.type,
            'createdAfter': date.toISOString()
          }
        }).then(response => {
          this.dataProvider = response.data._embedded.sensors
          console.log(this.dataProvider)
        })
      }
    }
  }
</script>
