<template>
  <h1 class="text-center">Progress</h1>

  <div class="container d-flex align-items-center justify-content-center mt-5">
    <div class="circle1" :class="{ bg: activeCircle >= 1 }"><h1>1</h1></div>
    <div class="line1"></div>
    <div class="circle2" :class="{ bg: activeCircle >= 2 }"><h1>2</h1></div>
    <div class="line2"></div>
    <div class="circle3" :class="{ bg: activeCircle >= 3 }"><h1>3</h1></div>
  </div>
  <div class="buttons container d-flex justify-content-center gap-2 mt-5">
    <button class="btn btn-danger" :disabled="activeCircle < 1" @click="avant()">Précédent</button>
    <button class="btn btn-primary" :disabled="activeCircle >= 3"  @click="apres()">Suivant</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCircle: 0
    }
  },
  methods: {
    avant: function () {
      if (this.activeCircle > 0) {
        this.activeCircle--
      }
    },
    apres: function () {
      if (this.activeCircle <= 3) {
        this.activeCircle++
      }
    }
  }
}
</script>

<style scoped>
.circle1 {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  width: 100px;
  height: 100px;
  border-radius: 90px;
  border: 2px solid black;
  display: grid;
  place-items: center;
}
.line1 {
  width: 150px;
  height: 5px;
  background-color: black;
}
.circle2 {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  width: 100px;
  height: 100px;
  border-radius: 90px;
  border: 2px solid black;
  display: grid;
  place-items: center;
}
.line2 {
  width: 150px;
  height: 5px;
  background-color: black;
}
.circle3 {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  width: 100px;
  height: 100px;
  border-radius: 90px;
  border: 2px solid black;
  display: grid;
  place-items: center;
}
.bg {
  background-color: black;
  color: white;
}

@media (max-width: 1250px) {
  button {
    margin-bottom: 30%;
  }
}

</style>
