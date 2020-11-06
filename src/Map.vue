<template>
  <div class="body">
    <p class="header">Milkrun Real-time system</p>
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="line">Line1</div>
          <el-row>
            <el-col :span="7">
              <router-link to="/reportOTD" style="text-decoration: none">
                <el-card class="card1">
                  <p style="margin-top: 45px;">80% / 95%</p>
                  <p>Avg. OTD</p>
                </el-card>
              </router-link>
            </el-col>
            <el-col :span="10">
              <router-link to="/reportLocation" style="text-decoration: none">
                <el-card class="card2">
                  <p>2min / 5min</p>
                  <p>location2 efficiency</p>
                </el-card>
                <el-card class="card2">
                  <p>4min / 5min</p>
                  <p>location3 efficiency</p>
                </el-card>
              </router-link>
            </el-col>
            <el-col :span="7">
              <router-link to="/reportError" style="text-decoration: none">
                <el-card class="card1">
                  <p style="margin-top: 45px;">1 / 0</p>
                  <p>Failure</p>
                </el-card>
              </router-link>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="line">Line2</div>
          <el-row>
            <el-col :span="7">
              <el-card class="card1">
                <p style="margin-top: 45px;">80% / 95%</p>
                <p>Avg. OTD</p>
              </el-card>
            </el-col>
            <el-col :span="10">
              <el-card class="card2">
                <p>2min / 5min</p>
                <p>location2 efficiency</p>
              </el-card>
              <el-card class="card2">
                <p>4min / 5min</p>
                <p>location3 efficiency</p>
              </el-card>
            </el-col>
            <el-col :span="7">
              <el-card class="card1">
                <p style="margin-top: 45px;">1 / 0</p>
                <p>Failure</p>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding: 0px 28px;">
      <el-card>
        <div class="map">map</div>
      </el-card>
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
  height: 165px;
  color: #fff;
}
.card2 {
  background: #75a4d5;
  border-color: #75a4d5;
  box-shadow: none;
  margin: 10px 10px 0;
  color: #fff;
}
.card1 p,
.card2 p {
  margin: 0px;
}
.header {
  display: inline-block;
  text-align: center;
  font-size: 30px;
  color: #7a7f87;
  margin: 10px 0 10px 0;
}
</style>