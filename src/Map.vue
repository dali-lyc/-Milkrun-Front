<template>
  <div class="body">
    <el-header style="height: 10px;">
      <img src="./assets/img/bottom.png" style="height: 10px; position: fixed; left: 0; width: 100%; z-index: 10;" />
    </el-header>
    <p class="header">Milkrun Real-time System</p>
    <el-row style="padding: 0px 20px;">
      <el-col :span="12" style="padding: 10px;">
        <el-card>
          <div class="line">Line1</div>
          <el-row>
            <el-col :span="7">
              <router-link to="/reportOTD" style="text-decoration: none">
                <el-card class="card1">
                  <p style="margin: 40px 0 10px 0;"><span style="color: red;">83.3%</span> / 95%</p>
                  <b>Avg. OTD</b>
                </el-card>
              </router-link>
            </el-col>
            <el-col :span="10">
              <router-link to="/reportStation" style="text-decoration: none">
                <el-card class="card2">
                  <p><span style="color: red;">6min</span> / 5min</p>
                  <b>Station2 efficiency</b>
                </el-card>
                <el-card class="card2">
                  <p><span style="color: green;">4min</span> / 5min</p>
                  <b>Station3 efficiency</b>
                </el-card>
              </router-link>
            </el-col>
            <el-col :span="7">
              <router-link to="/reportError" style="text-decoration: none">
                <el-card class="card1">
                  <p style="margin: 40px 0 10px 0;"><span style="color: red;">1</span> / 0</p>
                  <b>Failure</b>
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
                <p style="margin: 40px 0 10px 0;"><span style="color: red;">66.7%</span>/ 95%</p>
                <b>Avg. OTD</b>
              </el-card>
            </el-col>
            <el-col :span="10">
              <el-card class="card2">
                <p><span style="color: green;">4min</span> / 5min</p>
                <b>Station2 efficiency</b>
              </el-card>
              <el-card class="card2">
                <p><span style="color: red;">7min</span> / 5min</p>
                <b>Station3 efficiency</b>
              </el-card>
            </el-col>
            <el-col :span="7">
              <el-card class="card1">
                <p style="margin: 40px 0 10px 0;"><span style="color: red;">2</span> / 0</p>
                <b>Failure</b>
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