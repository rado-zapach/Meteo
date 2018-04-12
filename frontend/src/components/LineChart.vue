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
//        {
//          'type': 'serial',
//          'theme': 'light',
//          'marginRight': 40,
//          'marginLeft': 40,
//          'autoMarginOffset': 20,
//          'mouseWheelZoomEnabled': true,
//          'dataDateFormat': 'YYYY-MM-DD',
//          'valueAxes': [{
//            'id': 'v1',
//            'axisAlpha': 0,
//            'position': 'left',
//            'ignoreAxisWidth': true
//          }],
//          'balloon': {
//            'borderThickness': 1,
//            'shadowAlpha': 0
//          },
//          'graphs': [{
//            'balloon': {
//              'drop': true,
//              'adjustBorderColor': false,
//              'color': '#ffffff'
//            },
//            'bullet': 'round',
//            'bulletBorderAlpha': 1,
//            'bulletColor': '#FFFFFF',
//            'bulletSize': 5,
//            'hideBulletsCount': 50,
//            'lineThickness': 2,
//            'title': 'Cpu temperature',
//            'useLineColorForBulletBorder': true,
//            'valueField': this.valueField
//          }],
//          'chartCursor': {
//            'categoryBalloonDateFormat': 'DD.MM.YYYY JJ:NN:SS'
//          },
//          'categoryField': this.categoryField,
//          'categoryAxis': {
//            'parseDates': true,
//            'dashLength': 1,
//            'minorGridEnabled': true
//          },
//          'dataProvider': this.dataProvider
//        }
        {
          'type': 'serial',
          'chartCursor': {
            'categoryBalloonDateFormat': 'DD.MM.YYYY JJ:NN:SS'
          },
          'graphs': [
            {
              'bullet': 'round',
              'bulletBorderAlpha': 1,
              'bulletColor': '#FFFFFF',
              'lineThickness': 2,
              'useLineColorForBulletBorder': true,
              'title': this.title,
              'valueField': this.valueField
            }
          ],
          'categoryField': this.categoryField,
          'dataProvider': this.dataProvider,
          'categoryAxis': {
            'parseDates': true,
            'minPeriod': 'ss'
          }
        }
      )
    }
  }
</script>
