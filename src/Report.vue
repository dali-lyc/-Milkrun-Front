<template>
  <div class="body">
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line1"></div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line6"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line2"></div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line7"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line3"></div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line8"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line4"></div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line9"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line5"></div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line10"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Report',
  data() {
    return {
    };
  },
  created() { },
  mounted() {
    this.draw1();
    this.draw2();
    this.draw3();
    this.draw4();
    this.draw5();
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
        legend: {
          data: ['Loop']
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
                width: 3
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
                width: 3
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
          subtext: '地点停留时间'
        },
        tooltip: {},
        legend: {
          data: ['Station2', 'Station3']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        xAxis: {
          data: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00"]
        },
        yAxis: {},
        series: [{
          name: 'Station2',
          type: 'bar',
          data: [5, 8, 6, 10, 9, 7],
          label: {
            show: true,
            position: 'inside'
          }
        }, {
          name: 'Station3',
          type: 'bar',
          data: [7, 5, 6, 3, 5, 9],
          label: {
            show: true,
            position: 'inside'
          }
        }]
      };
      myChart2.setOption(option2);
    },
    draw3() {
      var myChart3 = this.$echarts.init(document.getElementById('line3'), this.GLOBAL.Theme);
      var option3 = {
        title: {
          text: 'Line1',
          subtext: '地点到达时间'
        },
      };
      myChart3.setOption(option3);
    },
    draw4() {
      var myChart4 = this.$echarts.init(document.getElementById('line4'), this.GLOBAL.Theme);
      var option4 = {
        title: {
          text: 'Line1',
          subtext: 'Daily OTD (11月)'
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
            interval: 1
          },
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
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
                return '';
              }
            },
          },
        }]
      };
      myChart4.setOption(option4);
    },
    draw5() {
      var myChart5 = this.$echarts.init(document.getElementById('line5'), this.GLOBAL.Theme);
      var option5 = {
        title: {
          text: 'Line1',
          subtext: 'Monthly OTD (2020年)'
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
          data: [85.4, 89.7, 94.5, 91.5, 93.6, 98.6],
          label: {
            show: true,
            position: 'top'
          },
        }]
      };
      myChart5.setOption(option5);
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
  /* text-align: center; */
  /* display: inline-block; */
}
</style>