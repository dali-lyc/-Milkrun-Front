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
  <el-row class="map-block" style="padding: 0px 20px;">
    <el-col :span="24" style="padding: 10px; height: 100%">
      <el-card style="height: 100%">
        <div class="map-card" style="height: 100%">
          <div id="milkMap" style="height: 100%"></div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import LegendController from "./mapControllers/LegendController";

export default {
  name: "Map",
  data() {
    return {};
  },
  created() {},
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoiem91eWkxMDAiLCJhIjoiY2o2bjVrNXp2MDU2ZTJ3bGE4eXN1c3dndSJ9.GINwEL5g0rQT8IYGLRg1Pw";
    const map = new mapboxgl.Map({
      container: "milkMap",
      style: "mapbox://styles/zouyi100/ckh3exfbq1tc519o1gnyjwqto",
    });
    map.addControl(
      new mapboxgl.FullscreenControl({
        container: document.querySelector("body"),
      })
    );
    map.addControl(new LegendController(), "bottom-right");
    var el = document.createElement("div");
    el.className = "marker";
    el.innerHTML = `<div>Milk Run 2</div><svg t="1604682881181" class="icon" viewBox="0 0 1751 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2962" width="64" height="64"><path d="M1684.645161 548.335484l-102.4-122.219355c-26.425806-26.425806-56.154839-36.335484-85.883871-49.548387-36.335484-13.212903-72.670968-26.425806-99.096774-66.064516l-115.612903-175.070968c-39.63871-66.064516-112.309677-105.703226-188.283871-105.703226l-848.929032 0c-95.793548 0-175.070968 79.277419-175.070968 175.070968l0 287.380645c0 23.122581-9.909677 29.729032-29.729032 42.941935-16.516129 13.212903-42.941935 29.729032-33.032258 69.367742l29.729032 151.948387c23.122581 95.793548 122.219355 95.793548 155.251613 95.793548l66.064516 0c6.606452 82.580645 75.974194 145.341935 161.858065 145.341935 82.580645 0 151.948387-62.76129 161.858065-145.341935l545.032258 0c6.606452 82.580645 75.974194 145.341935 161.858065 145.341935 82.580645 0 151.948387-62.76129 161.858065-145.341935l79.277419 0c46.245161 0 92.490323-19.819355 125.522581-56.154839 16.516129-9.909677 75.974194-49.548387 75.974194-148.645161C1720.980645 584.670968 1691.251613 554.941935 1684.645161 548.335484zM1086.76129 66.064516c66.064516 0 125.522581 33.032258 158.554839 89.187097l118.916129 175.070968c13.212903 19.819355 26.425806 33.032258 39.63871 42.941935l-320.412903 0c-56.154839 0-105.703226-29.729032-128.825806-79.277419l-112.309677-224.619355L1086.76129 69.367742zM412.903226 967.845161c-72.670968 0-128.825806-59.458065-128.825806-128.825806 0-72.670968 59.458065-128.825806 128.825806-128.825806 72.670968 0 128.825806 59.458065 128.825806 128.825806C545.032258 911.690323 485.574194 967.845161 412.903226 967.845161zM1281.651613 967.845161c-72.670968 0-128.825806-59.458065-128.825806-128.825806 0-72.670968 59.458065-128.825806 128.825806-128.825806 69.367742 0 128.825806 59.458065 128.825806 128.825806C1410.477419 911.690323 1351.019355 967.845161 1281.651613 967.845161zM1628.490323 769.651613l-3.303226 0-3.303226 3.303226c-26.425806 29.729032-62.76129 46.245161-99.096774 46.245161l-79.277419 0c-6.606452-82.580645-75.974194-145.341935-161.858065-145.341935-82.580645 0-151.948387 62.76129-161.858065 145.341935l-545.032258 0c-6.606452-82.580645-75.974194-145.341935-161.858065-145.341935-82.580645 0-151.948387 62.76129-161.858065 145.341935l-66.064516 0c-72.670968 0-109.006452-23.122581-122.219355-69.367742l-29.729032-151.948387c-3.303226-16.516129 3.303226-23.122581 19.819355-36.335484 16.516129-13.212903 42.941935-29.729032 42.941935-69.367742l0-287.380645c0-79.277419 66.064516-142.03871 142.03871-142.03871l568.154839 0 118.916129 241.135484c29.729032 59.458065 92.490323 99.096774 158.554839 99.096774l383.174194 0c3.303226 0 6.606452 3.303226 9.909677 3.303226 29.729032 9.909677 56.154839 19.819355 75.974194 39.63871l102.4 122.219355 3.303226 3.303226c0 0 26.425806 16.516129 26.425806 72.670968C1687.948387 739.922581 1628.490323 769.651613 1628.490323 769.651613z" p-id="2963" fill="#707070"></path><path d="M1232.103226 521.909677l-194.890323 0c-9.909677 0-16.516129-6.606452-16.516129-16.516129s6.606452-16.516129 16.516129-16.516129l194.890323 0c9.909677 0 16.516129 6.606452 16.516129 16.516129S1242.012903 521.909677 1232.103226 521.909677z" p-id="2964" fill="#707070"></path></svg>`;
    el.style.width = 64 + "px";
    el.style.height = 64 + "px";
    el.style.position = "relative";
    el.style.top = "-20px";
    let milkRun1Car = new mapboxgl.Marker(el)
      .setLngLat([1.5, 12.75])
      .addTo(map);

    /* setTimeout(() => {
      milkRun1Car.setLngLat([13.35, 12.75])
    }, 5000) */

    // add station
    /* map.addSource("Station", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [{
          type: "Feature",
          properties: {
            status: "init",
          },
          geometry: {
            type: "Point",
            coordinates: [0, 0],
          },
        }, ],
      },
    });

    map.getSource("Station").setData({
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [{
          type: "Feature",
          properties: {
            status: "Succrss",
          },
          geometry: {
            type: "Point",
            coordinates: [0, 0],
          },
        }, ],
      },
    }); */
  },
  methods: {},
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

.map-block {
  height: calc(100% - 325px);
}

.map-block #milkMap {
  height: 100%;
  box-sizing: border-box;
}
</style>
