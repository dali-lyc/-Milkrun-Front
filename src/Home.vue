<template>
  <div class="body">
    <p class="header">欢迎访问milkrun实时系统</p>
    <el-row type="flex" style="margin: 30px;">
      <el-col :span="4" :offset="6">
        <router-link to="/map" style="text-decoration: none">
          <el-card class="card1">
            <span>实时路线</span>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="4" :offset="4">
        <router-link to="/report" style="text-decoration: none">
          <el-card class="card2">
            <span>报表</span>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
    <div id="main" style="width: 600px;height:400px; text-align: center; display: inline-block;"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },
  created() { },
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
.header {
  display: inline-block;
  text-align: center;
  font-size: 40px;
  color: #7a7f87;
  margin: 100px 0 60px 0;
}
.card1 {
  text-align: center;
  background: #66b1ff;
  border-color: #66b1ff;
}
.card1:hover {
  background: #358be6;
}
.card2 {
  text-align: center;
  background: #23c1a3;
  border-color: #23c1a3;
}
.card2:hover {
  background: #0cab8d;
}
.el-card span {
  color: #fff;
  line-height: 60px;
  font-size: 24px;
}
</style>