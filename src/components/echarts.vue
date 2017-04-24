<template>
  <div id="main"></div>
</template>


<style lang="scss">
  #main {
    width: 100%;
    height: 11rem;
    overflow: hidden;
  }

</style>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import echarts from 'echarts'
  export default {
    props: {
      sourcekey: String
    },
    data() {
      return {}
    },
    mounted() {
      this.initChart();
    },
    methods: {
      initChart() {
        let myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(this.getChartOption());
      },
      getChartOption() {
        var dataObj = this.getChartData();

        var option = {
          tooltip: {
            show: false
          },
          legend: {
            data:['Reading Curve'],
            top: '5px',
            left: '10px',
            borderColor: '#2a2a2a',
            textStyle:{
              fontSize: '15',
              color: '#2a2a2a'
            }
          },
          grid: {
            left: '0px',
            right: '22px',
            containLabel: true,
            bottom: '10px',
            top: '28px',
          },
          xAxis: {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            type: 'category',
            nameTextStyle: {
              fontSize: '1rem',
              fontFamily: 'inherit',
              color: '#9a9a9c'
            },
            boundaryGap: false,
            data: dataObj.month
          },
          yAxis: {
            show: false,
            min: 0
          },
          lineStyle: {
            normal: {
              color: '#2a9ef9',
              width: 10,
              shadowColor: '#007edf',
              shadowBlur: 50,
              shadowOffsetY: 10,
              shadowOffsetX: 5
            }
          },
          textStyle: {
            color: '#9a9a9c'
          },
          series: [{
            name: 'Reading Curve',
            type: 'line',
            label: {
              normal: {
                show: false,
                offset: [0, -5]
              }
            },
            smooth: true,
            lineStyle: {
              color: '#2a9ef9'
            },
            symbolSize: 3,
            color: '#2a9ef9',
            itemStyle: {
              normal: {
                borderColor: '#2a9ef9'
              }
            },
            data: dataObj.data
          }]
        }

        return option;
      },
      getChartData() {
        var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'];
        var data = [];
        var random = function (min,max) {
          return (Math.random()*(max-min)+min).toFixed(2);
        };
        for(var i=0;i<8;i++){
          data.push(random(1,50));
        }

        return {
          month:month,
          data:data
        }
      }
    }

  };
</script>
