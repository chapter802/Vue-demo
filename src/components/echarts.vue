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
      /*getChartOption() {
        var dataObj = this.getChartData();
        option = {
          title: {
            text: '未来一周气温变化',
            subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['最高气温','最低气温']
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} °C'
            }
          },
          series : [
            {
              name:'最高气温',
              type:'line',
              itemStyle : {
                normal : {
                  color:'#f5bf58',   // 设置最高气温线的颜色
                }
              },
              smooth: true,          // 设置最高气温线的平滑
              data:[11, 11, 15, 13, 12, 13, 10],
              markPoint : {
                data : [
                  {type : 'max', name: '最大值'},
                  {type : 'min', name: '最小值'}
                ]
              },
              markLine : {
                data : [
                  {type : 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'最低气温',
              type:'line',
              data:[1, -2, 2, 5, 3, 2, 0],
              markPoint : {
                data : [
                  {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
              },
              markLine : {
                data : [
                  {type : 'average', name : '平均值'}
                ]
              }
            }
          ]

        };
        myChart.setOption(option);
      }*/
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
            axisLine: { //横坐标线是否显示
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
