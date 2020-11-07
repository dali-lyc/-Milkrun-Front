<template>
  <div class="body">
    <el-header style="height: 10px;">
      <img src="./assets/img/bottom.png" style="height: 10px; position: fixed; left: 0; width: 100%; z-index: 10;" />
    </el-header>
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          日：<el-date-picker v-model="value1" type="date" size="mini" placeholder="选择日期">
          </el-date-picker>
          <div style="margin-top: 20px;">Line1 Current OTD: 83.3%</div>
          <div class="chart" id="line1"></div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          日：<el-date-picker v-model="value1" type="date" size="mini" placeholder="选择日期">
          </el-date-picker>
          <div style="margin-top: 20px;">Line2 Current OTD: 66.7%</div>
          <div class="chart" id="line4"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          月：<el-date-picker v-model="value2" type="month" size="mini" placeholder="选择日期">
          </el-date-picker>
          <div class="chart" id="line2"></div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          月：<el-date-picker v-model="value2" type="month" size="mini" placeholder="选择日期">
          </el-date-picker>
          <div class="chart" id="line5"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          年：<el-date-picker v-model="value3" type="year" size="mini" placeholder="选择日期">
          </el-date-picker>
          <div class="chart" id="line3"></div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          年：<el-date-picker v-model="value3" type="year" size="mini" placeholder="选择日期">
          </el-date-picker>
          <div class="chart" id="line6"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ReportOTD',
  data() {
    return {
      value1: '2020.11.07',
      value2: '2020.11',
      value3: '2020',
    };
  },
  created() {
  },
  mounted() {
    this.draw1();
    this.draw2();
    this.draw3();
    this.draw4();
    this.draw5();
    this.draw6();
  },
  watch: {
  },
  methods: {
    draw1() {
      var myChart1 = this.$echarts.init(document.getElementById('line1'), this.GLOBAL.Theme);
      var option1 = {
        title: {
          text: 'Line1',
          subtext: 'Loop时间'
        },
        tooltip: {},
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        xAxis: {
          data: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00"]
        },
        yAxis: {},
        series: [{
          name: 'Loop',
          type: 'bar',
          data: [50, 70, 60, 55, 85, 60],
          label: {
            show: true,
            position: 'inside'
          },
          itemStyle: {
            normal: {
              color: item => {
                if (item.data == 85) {
                  return 'red'
                }
              }
            }
          },
          markLine: {
            symbol: ['none', 'arrow'],
            label: {
              position: "start"
            },
            data: [{
              silent: false,
              lineStyle: {
                type: "solid",
                color: "#999",
                width: 2
              },
              label: {
                formatter: '上限'
              },
              yAxis: 75
            },
            {
              silent: false,
              lineStyle: {
                type: "solid",
                color: "#999",
                width: 2
              },
              label: {
                formatter: '下限'
              },
              yAxis: 45
            },
            { type: 'average', name: '平均值' }]
          }
        }]
      };
      myChart1.setOption(option1);
    },
    draw2() {
      var myChart2 = this.$echarts.init(document.getElementById('line2'), this.GLOBAL.Theme);
      var option2 = {
        title: {
          text: 'Line1',
          subtext: 'Daily OTD'
        },
        tooltip: {
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['OTD']
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0
          },
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}%'
          }
        },
        series: [{
          name: 'OTD',
          type: 'line',
          data: [83.7, 85.7, 89.5, 91.5, 87.6, 95.6],
          label: {
            show: true,
            position: 'top',
            formatter: function (params) {
              if (params.dataIndex % 2 == 0) {
                return params.value + '%'
              } else {
                return ''
              }
            },
          },
        }]
      };
      myChart2.setOption(option2);
    },
    draw3() {
      var myChart3 = this.$echarts.init(document.getElementById('line3'), this.GLOBAL.Theme);
      var option3 = {
        title: {
          text: 'Line1',
          subtext: 'Monthly OTD '
        },
        tooltip: {},
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['OTD']
        },
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}%'
          }
        },
        series: [{
          name: 'OTD',
          type: 'line',
          data: [82.4, 89.7, 94.5, 91.5, 93.6, 98.6, 89.7, 94.5, 91.5, 93.6, 98.6],
          label: {
            show: true,
            position: 'top',
            formatter: function (params) {
              return params.value + '%'
            },
          },
        }]
      };
      myChart3.setOption(option3);
    },
    draw4() {
      var myChart4 = this.$echarts.init(document.getElementById('line4'), this.GLOBAL.Theme);
      var option4 = {
        title: {
          text: 'Line2',
          subtext: 'Loop时间'
        },
        tooltip: {},
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        xAxis: {
          data: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00"]
        },
        yAxis: {},
        series: [{
          name: 'Loop',
          type: 'bar',
          data: [64, 83, 70, 61, 42, 57],
          label: {
            show: true,
            position: 'inside'
          },
          itemStyle: {
            normal: {
              color: item => {
                if (item.data == 83 || item.data == 42) {
                  return 'red'
                }
              }
            }
          },
          markLine: {
            symbol: ['none', 'arrow'],
            label: {
              position: "start"
            },
            data: [{
              silent: false,
              lineStyle: {
                type: "solid",
                color: "#999",
                width: 2
              },
              label: {
                formatter: '上限'
              },
              yAxis: 75
            },
            {
              silent: false,
              lineStyle: {
                type: "solid",
                color: "#999",
                width: 2
              },
              label: {
                formatter: '下限'
              },
              yAxis: 45
            },
            { type: 'average', name: '平均值' }]
          }
        }]
      };
      myChart4.setOption(option4);
    },
    draw5() {
      var myChart5 = this.$echarts.init(document.getElementById('line5'), this.GLOBAL.Theme);
      var option5 = {
        title: {
          text: 'Line2',
          subtext: 'Daily OTD'
        },
        tooltip: {
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['OTD']
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0
          },
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}%'
          }
        },
        series: [{
          name: 'OTD',
          type: 'line',
          data: [83.7, 75.7, 89.5, 91.5, 67.6, 95.6],
          label: {
            show: true,
            position: 'top',
            formatter: function (params) {
              if (params.dataIndex % 2 == 0) {
                return params.value + '%'
              } else {
                return ''
              }
            },
          },
        }]
      };
      myChart5.setOption(option5);
    },
    draw6() {
      var myChart6 = this.$echarts.init(document.getElementById('line6'), this.GLOBAL.Theme);
      var option6 = {
        title: {
          text: 'Line2',
          subtext: 'Monthly OTD'
        },
        tooltip: {},
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['OTD']
        },
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}%'
          }
        },
        series: [{
          name: 'OTD',
          type: 'line',
          data: [85.4, 79.7, 84.5, 91.5, 85.6, 88.6, 89.7, 74.5, 91.5, 73.6, 88.6],
          label: {
            show: true,
            position: 'top',
            formatter: function (params) {
              return params.value + '%'
            },
          },
        }]
      };
      myChart6.setOption(option6);
    },
  },
};
</script>

<style scoped>
.body {
  background: #f5f5f5;
  height: 100%;
  text-align: center;
}
.chart {
  height: 300px;
  width: 600px;
}
</style>