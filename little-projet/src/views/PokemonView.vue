<template>
  <div class="poke">
    <h1 class="text-center">Pokémon</h1>
    <img :src="pokeball" id="pokeball" class="pokeball mt-2 mb-2" :class="{ 'rotate-30deg': show }" alt="" srcset="" />
    <div class="container">
      <div class="d-flex justify-content-center mt-3">
        <button v-if="!show" class="btn btn-primary" @click="show = !show">
          Sortir les Pokémon
        </button>
        <button v-else class="btn btn-danger" @click="show = !show">Ranger les Pokémon</button>
      </div>
      <div>
        <div id="pokemon-list">
          <div class="row">
            <div v-show="show" class="mt-5 names col-lg-4" v-for="pokemon in names" :key="pokemon">
              <div>
                <h2 class="text-center">{{ pokemon.name }}</h2>
                <img :src="pokemon.image" alt="{{ pokemon.name }} Image" />
                <p style="color: green">HP: {{ pokemon.hp }}</p>
                <p style="color: red">Attack: {{ pokemon.atk }}</p>
                <p style="color: blue">Defense: {{ pokemon.def }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import pokeball from './../assets/img/pokeball.png'

export default {
  data() {
    return {
      pokeball: pokeball,
      show: false,
      names: []
    }
  },
  created() {
    axios
      .get('https://pokebuildapi.fr/api/v1/pokemon')
      .then((response) => {
        this.names = response.data
          .map((pokemon) => {
            return {
              name: pokemon.name,
              hp: pokemon.stats.HP,
              atk: pokemon.stats.attack,
              def: pokemon.stats.defense,
              image: pokemon.image
            }
          })
          .splice(0, 6)
      })
      .catch((error) => {
        console.error("Erreur lors de l'appel API GET :", error)
      })
  }
}
</script>

<style scoped>
.poke {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  text-align: center;
  padding: 20px;
}
#pokemon-list img {
  width: 50%;
}
.pokeball {
  width: 20%;
}
.rotate-30deg {
  transform: rotate(-30deg);
}
@media (max-width: 1250px) {
  .poke {
    margin-bottom: 30%;
  }
  #pokeball {
    width: 100px;
  }
}
</style>
