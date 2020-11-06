<template>
  <div class="breathe-lamp" :style="{'animation-name': breatheType}" :breatheType="breatheType"></div>
</template>

<script>
export default {
  name: 'BreatheLamp',
  props: ['value'],
  data() {
    return {
      breatheType: this.value,
    };
  },
  computed: {},
  watch: {
    value(val) {
      this.breatheType = val;
    },
    breatheType(val) {
      this.$emit('input', val);
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style>
.breathe-lamp {
  position: fixed;
  top: 30%;
  left: 30%;
  width: 16px;
  height: 16px;
  margin: 10px 10px;
  line-height: 16px;
  border-radius: 16px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); */
  overflow: hidden;
  animation-timing-function: ease-in-out;
  animation-name: put;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes put {
  0% {
    border: 1px solid #e4c323;
    background-image: linear-gradient(left, #e4c323, #f0c90a);
  }
  100% {
    border: 1px solid #f0c90a;
    background-image: linear-gradient(left, #e4c323, #f0c90a);
  }
}
@keyframes grab {
  0% {
    border: 1px solid #f24f4f;
    background-image: linear-gradient(left, #f24f4f, #f41207);
    opacity: 0.3;
    box-shadow: 0px 0px 5px 0px #f24f4f;
  }
  100% {
    border: 1px solid #f41207;
    background-image: linear-gradient(left, #f24f4f, #f41207);
    opacity: 1;
    box-shadow: 0px 0px 10px 10px #f41207;
  }
}
</style>
