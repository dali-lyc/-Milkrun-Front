<template>
  <div class="map-back">
    <el-button type="primary" @click="put" style="position: absolute; top: 0%; left: 10%;">Create</el-button>
    <el-button type="primary" @click="grab" style="position: absolute; top: 0%; left: 20%;">Grab</el-button>
    <el-button type="primary" @click="remove" style="position: absolute; top: 0%; left: 30%;">Finish</el-button>
    
    <breathe-lamp v-model="breatheType" style="top: 10%; left: 46%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 9%; left: 48%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 11%; left: 48%;"></breathe-lamp>

    <breathe-lamp v-model="breatheType3" style="top: 19%; left: 41%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 19%; left: 42%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType4" style="top: 23%; left: 40%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 23%; left: 42%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 21%; left: 40%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType4" style="top: 21%; left: 41%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 21%; left: 42%;"></breathe-lamp>

    <breathe-lamp v-model="breatheType3" style="top: 42%; left: 20%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType4" style="top: 44%; left: 21%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 46%; left: 20%;"></breathe-lamp>

    <breathe-lamp v-model="breatheType3" style="top: 42%; left: 30%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType4" style="top: 43%; left: 31%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 45%; left: 30%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 46%; left: 32%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType4" style="top: 48%; left: 31%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 50%; left: 30%;"></breathe-lamp>

    <breathe-lamp v-model="breatheType4" style="top: 42%; left: 37%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 43%; left: 38%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 44%; left: 37%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 45%; left: 39%;"></breathe-lamp>

    <breathe-lamp v-model="breatheType4" style="top: 42%; left: 45%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 43%; left: 46%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType3" style="top: 44%; left: 45%;"></breathe-lamp>
    <breathe-lamp v-model="breatheType4" style="top: 45%; left: 46%;"></breathe-lamp>

    <el-collapse class="order-collapse">
      <el-collapse-item class="order-collapse-title" title="Real-time Order Information">
        <div class="order-info" v-html="orderData">
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Stomp from "stompjs";
export default {
  name: 'Dispatch',
  data() {
    return {
      breatheType: 'remove',
      breatheType2: 'put',
      breatheType3: 'put',
      breatheType4: 'grab',
      client: null,
      orderData: '',
    };
  },
  created() {
    this.connect();
  },
  mounted() {
  },
  activated() { },
  methods: {
    put() {
      this.breatheType = 'put';
      this.orderData += '2019-10-21 09:20:33  Order message: order01 from 7A-A36-A03-->PVBMS_SMT, delivery charge is 3 RMB, has been created by Mr.Zhang!' + '<br/>' + "======================" + '<br/>';
    },
    grab() {
      this.breatheType = 'grab';
      this.orderData += '2019-10-21 09:20:36 order01 has been grabbed by Mr.Wang!' + '<br/>' + "======================" + '<br/>';
    },
    remove() {
      this.breatheType = 'remove';
      this.orderData += '2019-10-21 09:30:25 order01 has been finished by Mr.Wang!' + '<br/>' + "======================" + '<br/>';
    },
    connect: function () {
      this.client = Stomp.client("ws://10.187.232.14:15674/ws")
      const headers = {
        login: 'joyaAdmin',
        passcode: '123456'
      };
      this.client.connect(headers, this.onConnected, this.onFailed);
    },
    onConnected: function (frame) {
      const topic1 = "/queue/topic.web";
      this.client.subscribe(topic1, this.responseCallback1, this.onFailed);
      const topic2 = "/queue/web.only.message";
      this.client.subscribe(topic2, this.responseCallback2, this.onFailed);
    },
    responseCallback1: function (frame) {
      console.log("status msg: " + JSON.parse(frame.body).status);
      this.breatheType = frame.body.breatheType == 0 ? 'put' : frame.body.breatheType == 1 ? 'grap' : 'none';
    },
    responseCallback2: function (frame) {
      console.log("desc msg: " + frame.body);
      this.orderData += frame.body + '<br/>' + "======================" + '<br/>';
    },
    onFailed: function (frame) {
      console.log("MQ Failed: " + frame);
    },
  },
};
</script>

<style scoped>
.map-back {
  width: 100%;
  height: 100%;
  display: flex;
  background: url('./assets/img/map3.jpg') no-repeat;
  background-size: cover;
}
.order-collapse {
  position: fixed;
  width: 600px;
  top: 0%;
  right: 0;
  opacity: 0.8;
}
.order-info {
  height: 300px;
  overflow-y: auto;
  font-size: 14px;
  color: #5cf112;
}
.order-collapse-title >>> .el-collapse-item__header {
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
  background: #999;
  color: #eee;
}
.order-collapse-title >>> .el-collapse-item__wrap {
  background: #000;
  border: 1px solid #000;
}
</style>
