<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-lg-3"></div>
      <div class="col-lg-3 mt-5 d-flex justify-content-center align-items-center">
        <div class="loader">
          <div class="box box-1">
            <div class="side-left"></div>
            <div class="side-right"></div>
            <div class="side-top"></div>
          </div>
          <div class="box box-2">
            <div class="side-left"></div>
            <div class="side-right"></div>
            <div class="side-top"></div>
          </div>
          <div class="box box-3">
            <div class="side-left"></div>
            <div class="side-right"></div>
            <div class="side-top"></div>
          </div>
          <div class="box box-4">
            <div class="side-left"></div>
            <div class="side-right"></div>
            <div class="side-top"></div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 d-flex justify-content-center">
        <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 3D tower loader made by: csozi | Website: www.csozi.hu*/

h1 {
  text-align: center;
  margin-bottom:5%;
  font-size: 24px;
}

.loader {
  scale: 4;
  height: 50px;
  width: 40px;
}

.box {
  position: relative;
  opacity: 0;
  left: 10px;
}

.side-left {
  position: absolute;
  background-color: #286cb5;
  width: 19px;
  height: 5px;
  transform: skew(0deg, -25deg);
  top: 14px;
  left: 10px;
}

.side-right {
  position: absolute;
  background-color: #2f85e0;
  width: 19px;
  height: 5px;
  transform: skew(0deg, 25deg);
  top: 14px;
  left: -9px;
}

.side-top {
  position: absolute;
  background-color: #5fa8f5;
  width: 20px;
  height: 20px;
  rotate: 45deg;
  transform: skew(-20deg, -20deg);
}

.box-1 {
  animation: from-left 4s infinite;
}

.box-2 {
  animation: from-right 4s infinite;
  animation-delay: 1s;
}

.box-3 {
  animation: from-left 4s infinite;
  animation-delay: 2s;
}

.box-4 {
  animation: from-right 4s infinite;
  animation-delay: 3s;
}

@keyframes from-left {
  0% {
    z-index: 20;
    opacity: 0;
    translate: -20px -6px;
  }

  20% {
    z-index: 10;
    opacity: 1;
    translate: 0px 0px;
  }

  40% {
    z-index: 9;
    translate: 0px 4px;
  }

  60% {
    z-index: 8;
    translate: 0px 8px;
  }

  80% {
    z-index: 7;
    opacity: 1;
    translate: 0px 12px;
  }

  100% {
    z-index: 5;
    translate: 0px 30px;
    opacity: 0;
  }
}

@keyframes from-right {
  0% {
    z-index: 20;
    opacity: 0;
    translate: 20px -6px;
  }

  20% {
    z-index: 10;
    opacity: 1;
    translate: 0px 0px;
  }

  40% {
    z-index: 9;
    translate: 0px 4px;
  }

  60% {
    z-index: 8;
    translate: 0px 8px;
  }

  80% {
    z-index: 7;
    opacity: 1;
    translate: 0px 12px;
  }

  100% {
    z-index: 5;
    translate: 0px 30px;
    opacity: 0;
  }
}

.spinner {
  width: 70.4px;
  height: 70.4px;
  --clr: rgb(247, 197, 159);
  --clr-alpha: rgb(247, 197, 159, 0.1);
  animation: spinner 1.6s infinite ease;
  transform-style: preserve-3d;
}

.spinner > div {
  background-color: var(--clr-alpha);
  height: 100%;
  position: absolute;
  width: 100%;
  border: 3.5px solid var(--clr);
}

.spinner div:nth-of-type(1) {
  transform: translateZ(-35.2px) rotateY(180deg);
}

.spinner div:nth-of-type(2) {
  transform: rotateY(-270deg) translateX(50%);
  transform-origin: top right;
}

.spinner div:nth-of-type(3) {
  transform: rotateY(270deg) translateX(-50%);
  transform-origin: center left;
}

.spinner div:nth-of-type(4) {
  transform: rotateX(90deg) translateY(-50%);
  transform-origin: top center;
}

.spinner div:nth-of-type(5) {
  transform: rotateX(-90deg) translateY(50%);
  transform-origin: bottom center;
}

.spinner div:nth-of-type(6) {
  transform: translateZ(35.2px);
}

@keyframes spinner {
  0% {
    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
  }

  50% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
  }

  100% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
  }
}

@media (max-width: 1250px) {
  .loader {
    margin-top: 15%;
    margin-bottom: 25%;
  }
  .spinner {
    margin-bottom:25% ;
  }

}
</style>
