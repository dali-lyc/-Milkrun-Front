<template>
  <div class="body">
    <el-table class="settlement-table" :data="orderData" :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border show-summary>
      <el-table-column label="No." type="index" width="50"></el-table-column>
      <el-table-column prop="id" label="工号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="time" label="抢单时间">
      </el-table-column>
      <el-table-column prop="score" label="积分">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Settlement',
  data() {
    return {
      orderData: [],
    };
  },
  computed: {
  },
  created() {
    this.getOrder();
  },
  mounted() { },
  methods: {
    getOrder() {
      this.$http.mockdata('/order').then(res => {
        this.orderData = res;
      });
    }
  },
};
</script>

<style scoped>
.body {
  background: #000;
  height: 100%;
  text-align: center;
}
.settlement-table {
  display: inline-table;
  width: 80%;
  top: 10%;
  background: #000;
}
</style>