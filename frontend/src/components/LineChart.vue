<template>
  <div :id="id" style="width: 100%; height: 300px;"></div>
</template>
<script>
  export default {
    data () {
      return {
        id: this._uid.toString(),
        chart: null
      }
    },
    props: ['dataProvider', 'title', 'valueField', 'categoryField'],
    watch: {
      dataProvider: function (dataProvider) {
        if (this.chart.dataProvider == null) {
          this.chart.dataProvider = dataProvider
        } else {
          this.chart.dataProvider.push.apply(this.chart.dataProvider, dataProvider)
        }
        this.chart.validateData()
      }
    },
    created () {
      this.chart = window.AmCharts.makeChart(this.id,
        {
          'type': 'serial',
          'chartCursor': {
            'categoryBalloonDateFormat': 'DD.MM.YYYY JJ:NN:SS'
          },
          'graphs': [
            {
              'title': this.title,
              'valueField': this.valueField
//              'connect': false
            }
          ],
          'categoryField': this.categoryField,
          'dataProvider': this.dataProvider,
          'categoryAxis': {
            'parseDates': true,
            'minPeriod': 'mm'
          }
        }
      )
    }
  }
</script>
