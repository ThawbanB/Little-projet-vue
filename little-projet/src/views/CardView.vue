<script>
import amitigo from './../assets/img/amitigo.png'
import guide from './../assets/img/guidedugolfe.png'
import alpha from './../assets/img/alphaomegacours.png'
import myzah from './../assets/img/myzah.png'

export default {
  created() {
    // Initialisez currentContent avec le premier élément de content lors de la création du composant
    this.currentContent = this.content[this.currentIndex]
  },

  data() {
    return {
      currentContent: [],
      content: [
        {
          title: 'AMITIGO',
          text: 'Landing Page',
          image: amitigo,
          url: 'https://amitigo.com/'
        },
        {
          title: 'GUIDE DU GOLFE',
          text: 'Responsive Design',
          image: guide,
          url: 'https://guidedugolfe.com/'
        },
        {
          title: 'ALPHAOMEGOCOURS',
          text: 'Dark Mode',
          image: alpha,
          url: 'https://alphaomegacours.fr/'
        },
        {
          title: 'MYZAH',
          text: 'Gestion Des Mails',
          image: myzah,
          url: 'https://myzah.com/'
        }
      ],

      currentIndex: 0
    }
  },
  methods: {
    changeContent() {
      // Incrémente l'index de l'image actuelle
      this.currentIndex++

      if (this.currentIndex >= this.content.length) {
        this.currentIndex = 0
      }

      // Mettez à jour la source de l'image actuelle
      this.currentContent = this.content[this.currentIndex]

      // Si l'index dépasse le nombre d'images disponibles, revenez à la première image
    }
  }
}
</script>

<template>
  <h1 class="text-center mb-5">Card</h1>

  <div class="card">
    <div class="image">
      <a :href="currentContent.url"> <img :src="currentContent.image" alt="" /></a>
    </div>
    <div class="content">
      <span class="title"> {{ currentContent.title }} </span>

      <p class="desc">
        {{ currentContent.text }}
      </p>

      <a @click="changeContent()" class="action">
        Cliquez-ici
        <span aria-hidden="true"> → </span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  background-color: #fff;
  background: #e0e0e0;
  box-shadow:
    20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
}

.card a {
  text-decoration: none;
}

.content {
  padding: 1.1rem;
}

.image {
  object-fit: cover;
  width: 100%;
  height: 150px;
}
img {
  width: 100%;
}

.title {
  color: #111827;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
}

.desc {
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.action {
  display: inline-flex;
  margin-top: 1rem;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  align-items: center;
  gap: 0.25rem;
  background-color: #2563eb;
  padding: 4px 8px;
  border-radius: 4px;
}

.action span {
  transition: 0.3s ease;
}

.action:hover span {
  transform: translateX(4px);
}

@media (max-width: 1250px) {
  .card {
    margin-bottom: 40%;
  }
}
</style>
