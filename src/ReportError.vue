<template>
  <div class="body">
    <el-header style="height: 10px;">
      <img src="./assets/img/bottom.png" style="height: 10px; position: fixed; left: 0; width: 100%; z-index: 10;" />
    </el-header>
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line1"></div>
          <el-input type="textarea" placeholder="请输入异常原因" :rows="3" style="margin-top: -30px; margin-left: -80px; width: 70%" maxlength="100" show-word-limit />
        </el-card>
      </el-col>
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line2"></div>
          <el-input type="textarea" placeholder="请输入异常原因" :rows="3" style="margin-top: -30px; margin-left: -80px; width: 70%" maxlength="100" show-word-limit />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ReportError',
  data() {
    return {
    };
  },
  created() { },
  mounted() {
    this.draw1();
    this.draw2();
  },
  methods: {
    draw1() {
      var myChart1 = this.$echarts.init(document.getElementById('line1'), this.GLOBAL.Theme);
      var option1 = {
        title: {
          text: 'Line1',
          subtext: '地点到达时间'
        },
        grid: {
          x: '60',
          x2: '40',
          y: '90',
          y2: '60',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'time',
          position: 'top',
          maxInterval: 3600 * 1000
        },
        yAxis: {
          inverse: true
        },
        series: [{
          symbolSize: 10,
          data: [
            ['2020-11-07 08:00', 1],
            ['2020-11-07 08:07', 1],
            ['2020-11-07 08:15', 1],
            ['2020-11-07 08:27', 1],
            ['2020-11-07 09:05', 2],
            ['2020-11-07 09:11', 2],
            ['2020-11-07 09:22', 2],
            ['2020-11-07 09:43', 2],
            ['2020-11-07 10:00', 3],
            ['2020-11-07 10:09', 3],
            ['2020-11-07 10:21', 3],
            ['2020-11-07 10:40', 3],
            ['2020-11-07 11:00', 4],
            ['2020-11-07 11:10', 4],
            ['2020-11-07 11:26', 4],
            ['2020-11-07 11:40', 4],
            ['2020-11-07 12:00', 5],
            ['2020-11-07 12:10', 5],
            ['2020-11-07 12:20', 5],
            ['2020-11-07 12:40', 5],
            ['2020-11-07 13:00', 6],
            ['2020-11-07 13:10', 6],
            ['2020-11-07 13:20', 6],
            ['2020-11-07 13:40', 6],
          ],
          type: 'scatter',
          itemStyle: {
            normal: {
              color: item => {
                if (item.data[0] == '2020-11-07 11:26') {
                  return 'red'
                } else {
                  return 'green'
                }
              }
            }
          }
        }]
      };
      myChart1.setOption(option1);
    },
    draw2() {
      var myChart2 = this.$echarts.init(document.getElementById('line2'), this.GLOBAL.Theme);
      var option2 = {
        title: {
          text: 'Line2',
          subtext: '地点到达时间'
        },
        grid: {
          x: '60',
          x2: '40',
          y: '90',
          y2: '60',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'time',
          position: 'top',
          maxInterval: 3600 * 1000
        },
        yAxis: {
          inverse: true
        },
        series: [{
          symbolSize: 10,
          data: [
            ['2020-11-07 08:00', 1],
            ['2020-11-07 08:20', 1],
            ['2020-11-07 08:30', 1],
            ['2020-11-07 08:40', 1],
            ['2020-11-07 09:00', 2],
            ['2020-11-07 09:21', 2],
            ['2020-11-07 09:32', 2],
            ['2020-11-07 09:43', 2],
            ['2020-11-07 10:00', 3],
            ['2020-11-07 10:09', 3],
            ['2020-11-07 10:31', 3],
            ['2020-11-07 10:42', 3],
            ['2020-11-07 11:00', 4],
            ['2020-11-07 11:20', 4],
            ['2020-11-07 11:30', 4],
            ['2020-11-07 11:50', 4],
            ['2020-11-07 12:00', 5],
            ['2020-11-07 12:20', 5],
            ['2020-11-07 12:30', 5],
            ['2020-11-07 12:40', 5],
            ['2020-11-07 13:00', 6],
            ['2020-11-07 13:20', 6],
            ['2020-11-07 13:30', 6],
            ['2020-11-07 13:40', 6],
          ],
          type: 'scatter',
          itemStyle: {
            normal: {
              color: item => {
                if (item.data[0] == '2020-11-07 10:09' || item.data[0] == '2020-11-07 11:50') {
                  return 'red'
                } else {
                  return 'green'
                }
              }
            }
          }
        }]
      };
      myChart2.setOption(option2);
    },
  }
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