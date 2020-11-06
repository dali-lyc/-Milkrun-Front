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
          <div class="chart" id="line2"></div>
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
        tooltip: {},
        legend: {
          data: ['Station2', 'Station3']
        },
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
        tooltip: {},
        legend: {
          data: ['Station2', 'Station3']
        },
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