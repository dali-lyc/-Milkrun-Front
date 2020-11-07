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
            <router-link to="/reportOTD" style="text-decoration: none">
              <el-card class="card1">
                <p style="margin: 40px 0 10px 0;"><span style="color: red;">66.7%</span>/ 95%</p>
                <b>Avg. OTD</b>
              </el-card>
            </router-link>
          </el-col>
          <el-col :span="10">
            <router-link to="/reportLocation" style="text-decoration: none">
              <el-card class="card2">
                <p><span style="color: green;">4min</span> / 5min</p>
                <b>Station2 efficiency</b>
              </el-card>
              <el-card class="card2">
                <p><span style="color: red;">7min</span> / 5min</p>
                <b>Station3 efficiency</b>
              </el-card>
            </router-link>
          </el-col>
          <el-col :span="7">
            <router-link to="/reportError" style="text-decoration: none">
              <el-card class="card1">
                <p style="margin: 40px 0 10px 0;"><span style="color: red;">2</span> / 0</p>
                <b>Failure</b>
              </el-card>
            </router-link>
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
import OperationController from "./mapControllers/OperationController";
import milk from "./utils/geojson";

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
    map.addControl(new OperationController(), "top-left");
    document.getElementById("line_selector").onchange = (e) => {
      if (map.getSource("Milk")) {
        console.log("remove milk");
        map.removeLayer("milk_layer");
        map.removeSource("Milk");
        map.removeLayer("station_layer");
        map.removeSource("Station");
        map.removeLayer("stationbuffer_layer");
        map.removeSource("StationBuffer");
      }
      let index = e.target.selectedIndex;
      let milkjson = undefined;
      let stationjson = undefined;
      let stationbufferjson = undefined;
      if (index == 0) {
        milkjson = undefined;
        stationjson = undefined;
        stationbufferjson = undefined;
      } else if (index == 1) {
        milkjson = milk.milk1;
        stationjson = milk.station1;
        stationbufferjson = milk.stationbuffer1;
      } else if (index == 2) {
        milkjson = milk.milk2;
        stationjson = milk.station2;
        stationbufferjson = milk.stationbuffer2;
      }
      if (milkjson) {
        map.addSource("Milk", {
          type: "geojson",
          data: milkjson,
        });
        map.addSource("Station", {
          type: "geojson",
          data: stationjson,
        });
        map.addSource("StationBuffer", {
          type: "geojson",
          data: stationbufferjson,
        });
        map.addLayer({
          id: "milk_layer",
          source: "Milk",
          type: "line",
          layout: {
            "line-cap": "square",
          },
          paint: {
            "line-color": "hsl(34, 100%, 42%)",
            "line-width": 2,
            "line-dasharray": [2, 2],
          },
        });
        map.addLayer({
          id: "station_layer",
          type: "circle",
          source: "Station",
          layout: {},
          paint: {
            "circle-radius": 5,
            "circle-color": "hsl(207, 91%, 46%)",
            "circle-blur": ["interpolate", ["linear"],
              ["zoom"], 0, 0, 22, 0
            ],
            "circle-stroke-color": "hsl(0, 65%, 44%)",
            "circle-stroke-width": [
              "interpolate",
              ["linear"],
              ["zoom"],
              0,
              0,
              22,
              0,
            ],
          },
        });
        map.addLayer({
          id: "stationbuffer_layer",
          source: "StationBuffer",
          type: "line",
          layout: {},
          paint: {
            "line-color": "hsl(321, 58%, 44%)",
            "line-width": 2
          },
        });
      }
    };
    var el = document.createElement("div");
    el.className = "marker";
    el.innerHTML = `<div>Milk Run</div><svg t="1604710987796" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3320" width="32" height="32"><path d="M94.786807 616.919585 94.786807 234.941893c0-21.22644 17.200754-38.433334 38.416961-38.433334l381.616464 0c21.216207 0 38.414915 17.206894 38.414915 38.433334l0 381.979738c0 7.076162-5.731538 12.809747-12.805654 12.809747L107.59246 629.731378C100.518345 629.731378 94.786807 623.997793 94.786807 616.919585zM402.952398 747.776911c0 44.024679-35.673477 79.713506-79.676667 79.713506-44.004213 0-79.678714-35.687804-79.678714-79.713506 0-44.022633 35.673477-79.713506 79.678714-79.713506C367.278921 668.063405 402.952398 703.754279 402.952398 747.776911zM363.113041 747.776911c0-22.011316-17.836227-39.85573-39.839357-39.85573-22.001083 0-39.841404 17.844413-39.841404 39.85573 0 22.013363 17.84032 39.859823 39.841404 39.859823C345.277838 787.636734 363.113041 769.791298 363.113041 747.776911zM254.650771 668.063405 76.104305 668.063405c-7.072069 0-12.805654 5.735631-12.805654 12.811794l0 38.865169c0 7.076162 5.733585 12.811794 12.805654 12.811794L219.216747 732.552162C222.953861 706.907085 235.894591 684.250062 254.650771 668.063405zM819.841204 747.776911c0 44.024679-35.673477 79.713506-79.678714 79.713506s-79.676667-35.687804-79.676667-79.713506c0-44.022633 35.671431-79.713506 79.676667-79.713506S819.841204 703.754279 819.841204 747.776911zM780.003893 747.776911c0-22.011316-17.838274-39.85573-39.841404-39.85573-22.005176 0-39.83731 17.844413-39.83731 39.85573 0 22.013363 17.836227 39.859823 39.83731 39.859823C762.166643 787.636734 780.003893 769.791298 780.003893 747.776911zM960.700325 680.875199l0 38.865169c0 7.076162-5.731538 12.811794-12.805654 12.811794L844.218404 732.552162c-7.414877-50.877761-51.183729-90.110297-104.051821-90.110297-52.880371 0-96.649224 39.234583-104.066147 90.110297L427.333692 732.552162c-3.737114-25.644053-16.675798-48.303122-35.429931-64.488757l197.946304 0L589.850066 301.626665c0-14.152325 11.467169-25.625634 25.611308-25.625634l120.893394 0c34.040281 0 65.853847 16.917298 84.901669 45.140083l77.936023 115.482151C910.621766 453.563076 916.732951 473.534943 916.732951 493.974461l0 174.089967 31.16172 0C954.968787 668.063405 960.700325 673.799036 960.700325 680.875199zM830.795697 439.58062l-62.322417-88.597851c-2.39863-3.406586-6.305613-5.435803-10.472516-5.435803l-97.208972 0c-7.072069 0-12.8077 5.735631-12.8077 12.811794l0 88.595804c0 7.076162 5.733585 12.811794 12.8077 12.811794l159.533436 0C830.699506 459.766358 836.767711 448.068945 830.795697 439.58062z" p-id="3321" fill="#d67900"></path></svg>`;
    el.style.width = 64 + "px";
    el.style.height = 64 + "px";
    el.style.position = "relative";
    el.style.top = "0px";
    let milkRun1Car = new mapboxgl.Marker(el)
      .setLngLat([1.5, 12.75])
      .addTo(map);

    /*this.websocket = new WebSocket(
      "ws://192.168.43.5:8080/connectServer/frontend"
    );
    this.websocket.onopen = () => {
      console.log("open success");
    };
    this.websocket.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      console.log(data);
      let point = data.point;
      if (
        point.x &&
        point.y &&
        point.x > 0 &&
        point.y > 0 &&
        point.x < 19.94 &&
        point.y < 16.3
      ) {
        if (point.x < 13 && point.y < 12 || point.x > 14.54 && point.x < 17.64 && point.y > 9.6 && point.y < 12.2 || point.x > 17.64 && point.y > 9.6) {
          return;
        } else {
          milkRun1Car.setLngLat([point.x, point.y]);
        }
      } else {
        console.log("No signal");
      }
    }; */

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
