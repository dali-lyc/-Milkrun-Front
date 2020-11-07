<template>
<div id="app">
  <router-view>
  </router-view>
</div>
</template>

<script>
</script>

<style>
@import '../node_modules/font-awesome/css/font-awesome.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.map-block .el-card__body {
  height: 100% !important;
  box-sizing: border-box;
}

.mapboxgl-ctrl-legend {
  margin: 0 10px 10px 0;
  z-index: 100;
  border-radius: 2px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, .1);
  background-color: #fff;
  width: 200px;
  padding: 30px;
}

.mapboxgl-ctrl-legend .legend-item {
  display: flex;
  align-items: center;
  justify-content: left;
  height: 30px;
}

.mapboxgl-ctrl-legend .legend-item span {
  display: block;
  margin-left: 10px;
}

.mapboxgl-ctrl-legend .legend-item div {
  width: 30px;
}

.mapboxgl-ctrl-legend .legend-item div.fill {
  width: 30px;
  height: 10px;
}

.mapboxgl-ctrl-legend .legend-item div.line {
  width: 30px;
  height: 2px;
}

.mapboxgl-ctrl-legend .legend-item div.point {
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.icon-block {
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
