<template>
  <div class="container">
    <div class="mb-1 gap-5 row d-flex justify-content-center">
      <div class="col-lg-1" v-for="item in items" :key="item.url">
        <RouterLink :to="`/${item.url}`" @click="selectItem(item)">
          <p :class="{ underline: selectedItem === item }">{{ item.nom }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
  <RouterLink to="/">
    <div class="box container">
      <h1>Bienvenue dans mon petit portfolio (En cours de production)</h1>
    </div>
  </RouterLink>
  <RouterView />
  <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>

    <ul class="menu">
      <li class="menu__item">
        <a class="menu__link" href="mailto:thawbanjabss@outlook.fr"
          ><img src="./assets/img/enveloppe-de-courrier-electronique.png" alt=""
        /></a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="https://www.linkedin.com/in/thawban-boujja-83670118b/"
          ><img src="./assets/img/linkedin.png" alt=""
        /></a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="https://twitter.com/?lang=fr"
          ><img src="./assets/img/twitter.png" alt=""
        /></a>
      </li>
    </ul>
    <p>&copy;2023 Thawban Boujja | Tout droit réservées</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          nom: 'Pokemon(API)',
          url: 'Pokemon'
        },
        {
          nom: 'ToDolist(CRUD)',
          url: 'ToDoList'
        },
        {
          nom: 'Card(Caroussel)',
          url: 'Card'
        },
        {
          nom: 'Animation(3D)',
          url: 'Calculate'
        },
        {
          nom: 'Progress',
          url: 'Progress'
        },
        {
          nom: 'FAQ',
          url: 'FAQ'
        }
      ],
      selectedItem: null // Ajout de la propriété pour suivre l'élément sélectionné
    }
  },

  methods: {
    selectItem(item) {
      this.selectedItem = item // Met à jour l'élément sélectionné
    }
  }
}
</script>

<style scoped>
.box {
  height: 43px;
  display: grid;
  place-items: center;
}

a {
  text-decoration: none;
  color: black;
  transition-duration: 0.2s;
}
a:hover {
  color: white;
}
p {
  font-size: 15px;
  font-weight: bold;
  color: black;
  transition-duration: 0.2;
}
p:hover {
  color: white;
}
.underline {
  color: white;
}
.container {
  margin-top: 5%;
  margin-bottom: 5%;
}

.footer {
  margin-top: 14%;
  position: relative;
  width: 100%;
  background: #3586ff;
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.social-icon,
.menu {
  position: relative;
  display: flex;
  justify-content: center;
}

.social-icon__item,
.menu__item {
  text-align: center;
  list-style: none;
}

.social-icon__link {
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
}
.social-icon__link:hover {
  transform: translateY(-10px);
}

.menu__link {
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;
}

.menu__link:hover {
  opacity: 1;
}

.footer p {
  color: #fff;
  margin: 15px 0 10px 0;
  font-size: 1rem;
  font-weight: 300;
}

.wave {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('https://i.ibb.co/wQZVxxk/wave.png');
  background-size: 1000px 100px;
}

.wave#wave1 {
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: animateWaves 4s linear infinite;
}

.wave#wave2 {
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: animate 4s linear infinite !important;
}

.wave#wave3 {
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: animateWaves 3s linear infinite;
}

.wave#wave4 {
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: animate 3s linear infinite;
}

@keyframes animateWaves {
  0% {
    background-position-x: 1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}

@keyframes animate {
  0% {
    background-position-x: -1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}

.menu img {
  width: 9vh;
}

@media (max-width: 1000px) {
  h1 {
    text-align: center;
  }
  .row {
    gap: 0 !important;
    text-align: center;
    margin-top: 20%;
  }
  .container {
  margin-bottom: 15%;
}
}
</style>
