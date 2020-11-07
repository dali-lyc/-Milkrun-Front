<template>
  <div class="body">
    <el-header style="height: 10px;">
      <img src="./assets/img/bottom.png" style="height: 10px; position: fixed; left: 0; width: 100%; z-index: 10;" />
    </el-header>
    <p>MR路线维护</p>
    <el-table class="settlement-table" :data="lineData">
      <el-table-column label="No." type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="线路名称" width="180">
      </el-table-column>
      <el-table-column prop="type" label="线路类型">
      </el-table-column>
      <el-table-column prop="room" label="厂房">
      </el-table-column>
      <el-table-column prop="factory" label="工厂">
      </el-table-column>
      <el-table-column prop="duration" label="周期">
      </el-table-column>
      <el-table-column label="操作">
        <el-button size="mini">编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
      </el-table-column>
    </el-table>
    <p>MR站点维护</p>
    <el-table class="settlement-table" :data="stationData">
      <el-table-column label="No." type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="站点名称" width="180">
      </el-table-column>
      <el-table-column prop="type" label="站点类型">
      </el-table-column>
      <el-table-column prop="room" label="厂房">
      </el-table-column>
      <el-table-column prop="coordinate" label="坐标">
      </el-table-column>
      <el-table-column label="操作">
        <el-button size="mini">编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
      </el-table-column>
    </el-table>
    <p>牛奶车维护</p>
    <el-table class="settlement-table" :data="carData">
      <el-table-column label="No." type="index" width="50"></el-table-column>
      <el-table-column prop="id" label="牛奶车编号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="牛奶车名称">
      </el-table-column>
      <el-table-column prop="room" label="厂房">
      </el-table-column>
      <el-table-column prop="speed" label="速度">
      </el-table-column>
      <el-table-column label="操作">
        <el-button size="mini">编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
      </el-table-column>
    </el-table>
    <p>班次维护</p>
    <el-table class="settlement-table" :data="shiftData">
      <el-table-column label="No." type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="班次名称" width="180">
      </el-table-column>
      <el-table-column prop="type" label="班次类型">
      </el-table-column>
      <el-table-column prop="start" label="班次开始时间">
      </el-table-column>
      <el-table-column prop="end" label="班次结束时间">
      </el-table-column>
      <el-table-column label="操作">
        <el-button size="mini">编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Configure',
  data() {
    return {
      lineData: [{
        "name": "101原材料",
        "type": "原材料",
        "room": "CC-101",
        "factory": "2570",
        "duration": "60分钟"
      }, {
        "name": "101成品",
        "type": "	成品",
        "room": "CC-101",
        "factory": "2570",
        "duration": "40分钟"
      }],
      stationData: [{
        "name": "站点1",
        "type": "起始点",
        "room": "CC-101",
        "coordinate": "120.3', 56.7'"
      }, {
        "name": "站点2",
        "type": "	中间点",
        "room": "CC-101",
        "coordinate": "121.1', 56.8'"
      }],
      carData: [{
        "id": "F-MR-01",
        "name": "成品1号车",
        "room": "CC-101",
        "speed": "5km/h"
      }, {
        "id": "F-MR-02",
        "name": "成品2号车",
        "room": "CC-101",
        "speed": "5km/h"
      }],
      shiftData: [{
        "name": "shift1",
        "type": "白班",
        "start": "07:00",
        "end": "19:00"
      }, {
        "name": "shift2",
        "type": "夜班",
        "start": "19:00",
        "end": "07:00"
      }, {
        "name": "shift2",
        "type": "早班",
        "start": "23:00",
        "end": "07:00"
      }, {
        "name": "shift2",
        "type": "中班",
        "start": "07:00",
        "end": "15:00"
      }, {
        "name": "shift2",
        "type": "晚班",
        "start": "15:00",
        "end": "23:00"
      }],
    };
  },
  computed: {
  },
  created() {
    this.getOrder();
  },
  mounted() { },
  methods: {
  },
};
</script>

<style scoped>
.body {
  background: #f5f5f5;
  /* height: 100%; */
  text-align: center;
}
.settlement-table {
  display: inline-table;
  width: 80%;
}
</style>