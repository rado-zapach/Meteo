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
    props: ['value'],
    watch: {
      value: function (value) {
        this.chart.arrows[ 0 ].setValue(value)
        this.chart.axes[ 0 ].setBottomText(value + ' °C')
      }
    },
    created () {
      this.chart = window.AmCharts.makeChart(this.id, {
        'type': 'gauge',
        'theme': 'light',
        'axes': [ {
          'axisThickness': 1,
          'axisAlpha': 0.2,
          'tickAlpha': 0.2,
          'valueInterval': 10,
          'bands': [ {
            'color': '#84b761',
            'endValue': 40,
            'startValue': 0
          }, {
            'color': '#fdd400',
            'endValue': 70,
            'startValue': 40
          }, {
            'color': '#cc4748',
            'endValue': 100,
            'startValue': 70
          } ],
          'bottomTextYOffset': -20,
          'endValue': 100
        } ],
        'arrows': [{}]
      })
    }
  }
</script>
