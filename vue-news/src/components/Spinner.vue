<template>
  <div class="lbs-facebook" v-if="loading">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type:Boolean,
      required: true,
    }
  }
}
</script>

<style scoped>
.lbs-facebook {
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;
  top: 47%;
  left: 47%;

}
.lbs-facebook div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #42b883;
  animation: lbs-facebook 1.2s cubic-bezier(0, 0.5 ,0.5 ,1) infinite;

}
.lbs-facebook div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.lbs-facebook div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}

.lbs-facebook div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}


@keyframes lbs-facebook {
  0% {
    top: 6px;
    height: 51px;
  }
  50%, 100% {
    top: 19px;
    height: 26;
  }
}
</style>