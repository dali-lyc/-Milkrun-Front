<template>
  <div class="body">
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart">Line1</div>
          <el-row>
            <el-col :span="8">
              <el-card class="card1">
                <span>80% / 95%</span>
                <span>Avg. OTD</span>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="card1">
                <span>2min / 5min</span>
                <span>efficiency</span>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="card1">
                <span>1 / 0</span>
                <span>Failure</span>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="chart">Line2</div>
          <el-row>
            <el-col :span="8">
              <el-card class="card1">
                <span>80% / 95%</span>
                <span>Avg OTD</span>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="card1">
                <span>20 / 30</span>
                <span>efficiency</span>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="card1">
                <span>1 / 0</span>
                <span>Failure</span>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="map">map1</div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="map">map2</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
    };
  },
  created() {

  },
  mounted() {
  },
  methods: {

  }
};
</script>

<style scoped>
.body {
  background: #f5f5f5;
  height: 100%;
  text-align: center;
}
.card1 {
  background: #75a4d5;
  border-color: #75a4d5;
  box-shadow: none;
  margin: 10px 10px 0;
  height: 80px;
  color: #FFF;
}
</style>