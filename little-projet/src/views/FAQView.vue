<template>
  <h1 class="text-center mb-5">FAQ</h1>
  <div class="container content">
    <div class="row">
      <div class="col-lg-12">
        <div class="quote" @click="quote1 = !quote1">
          <h2>Qui suis-je ?</h2>
          <br />
          <div class="answer1">
            <Transition name="reponse">
              <p v-show="quote1">
                Je suis Thawban Boujja, Développeur Web Front-End, passionné par les nouvelles
                technologies et leurs facultés à améliorer la productivité des entreprises.
              </p>
            </Transition>
          </div>
          <button class="btn" :class="{ tourne: quote1 }">
            <img src="./../assets/img/arrow.png" alt="" />
          </button>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="quote" @click="quote2 = !quote2">
          <h2>Compétences</h2>
          <br />
          <div class="answer2">
            <Transition name="reponse">
              <div v-show="quote2">
                <div class="rep2">
                  <li>HTML/CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>VUEJS</li>
                  <li>BOOTSTRAP</li>
                  <li>NODEJS</li>
                  <li>PHP/MYSQL</li>
                </div>
              </div>
            </Transition>
          </div>
          <button class="btn" :class="{ tourne: quote2 }">
            <img src="./../assets/img/arrow.png" alt="" />
          </button>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="quote" @click="quote3 = !quote3">
          <h2>Expériences</h2>
          <br />
          <div class="answer3">
            <Transition name="reponse">
              <p v-show="quote3">
                Au cours de mes 3 ans éxpériences dans le développement web, j'ai pu travailler sur
                plusieurs projets tels que Amitigo (Landing Page), Guide du Golfe (Responsive
                Design) ou encore Alpha Omega Cours (Dark Mode). Les sites sont accesible depuis
                l'onglet "Caroussel."
              </p>
            </Transition>
          </div>
          <button class="btn" :class="{ tourne: quote3 }">
            <img src="./../assets/img/arrow.png" alt="" />
          </button>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="quote quote4" @click="quote4 = !quote4">
          <h2>Contact</h2>
          <br />
          <div class="answer3">
            <Transition name="reponse">
              <p v-show="quote4">
                E-mail: thawbanjabss@outlook.fr <br />
                Téléphone : 07.67.78.75.31
              </p>
            </Transition>
          </div>
          <button class="btn" :class="{ tourne: quote4 }">
            <img src="./../assets/img/arrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quote1: false,
      quote2: false,
      quote3: false,
      quote4: false
    }
  }
}
</script>
<style scoped>
.quote {
  padding: 4%;
  margin-bottom: 5%;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: grid;
  place-items: center;
}
h2 {
  font-size: 20px;
}
.reponse-enter-active,
.reponse-leave-active {
  transition: opacity 0.2s ease;
}

.reponse-enter-from,
.reponse-leave-to {
  opacity: 0;
}

button {
  width: 50px;
  height: 50px;
  border-radius: 90px;
}
button img {
  width: 70%;
}

.rep2 li {
  list-style: none;
}
.rep2 li:hover {
  color: white;
}
.tourne {
  transform: rotate(180deg);
}
@media (max-width: 1250px) {
  .quote4 {
    margin-bottom: 30%;
  }
}

</style>
