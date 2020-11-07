<template>
  <div class="body">
    <el-header style="height: 10px;">
      <img src="./assets/img/bottom.png" style="height: 10px; position: fixed; left: 0; width: 100%; z-index: 10;" />
    </el-header>
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line1"></div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart" id="line2"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'reportStation',
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
            position: 'top'
          }
        }, {
          name: 'Station3',
          type: 'bar',
          data: [7, 5, 6, 3, 5, 9],
          label: {
            show: true,
            position: 'top'
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
            position: 'top'
          }
        }, {
          name: 'Station3',
          type: 'bar',
          data: [8, 4, 11, 6, 8, 4],
          label: {
            show: true,
            position: 'top'
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
  height: 400px;
  width: 600px;
}
</style>