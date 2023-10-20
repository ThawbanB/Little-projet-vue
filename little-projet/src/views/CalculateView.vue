<template>
  <h1 class="text-center">Animation 3D</h1>
  <div class="image-container" @mousemove="handleMouseMove">
    <div class="image" :style="imageStyle">
      <!-- Contenu de votre image ici -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0
    }
  },
  computed: {
    imageStyle() {
      const maxRotation = 40 // Ajustez l'angle de rotation maximal
      const xOffset = (this.mouseX / 300) * maxRotation
      const yOffset = (this.mouseY / 200) * maxRotation

      return {
        transform: `rotateX(${yOffset}deg) rotateY(${xOffset}deg)`
      }
    }
  },
  methods: {
    handleMouseMove(event) {
      const boundingBox = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - boundingBox.left - boundingBox.width / 2
      const y = event.clientY - boundingBox.top - boundingBox.height / 2

      this.mouseX = x
      this.mouseY = y
    }
  }
}
</script>

<style scoped>
.image-container {
  perspective: 1000px; /* Ajustez la perspective selon vos préférences */
  width: 300px; /* Ajustez la taille du conteneur selon vos besoins */
  height: 300px; /* Ajustez la taille du conteneur selon vos besoins */
  position: relative;
  margin-left: auto;
  margin-right: auto;
  perspective-origin: center;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  background-image: url('./../assets/img/pokeball.png'); /* Remplacez par l'URL de votre image */
  background-size: cover;
  transform: translateZ(0); /* Permet d'appliquer la perspective */
  transition: transform 0.2s ease-out; /* Ajustez la durée de transition selon vos préférences */
  will-change: transform;
}
@media (max-width: 1250px) {
  .image-container {
    margin-top: 10%;
    margin-bottom: 40%;
  }
}
</style>
