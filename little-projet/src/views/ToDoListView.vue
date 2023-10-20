<template>
    <div class="todolist">
      <h1>TodoList</h1>
      <br />
      <div class="d-flex row justify-content-center gap-2 mb-5">
        <div class="col-lg-6">
          <input maxlength="20" v-model="champ" type="text" @keyup.enter="add()" /> <br />
        </div>
        <div class="col-lg-6">
          <button v-bind:disabled="!champ" class="ajouter btn btn-primary" @click="add()">
            Ajouter
          </button>
        </div>
        <div class="col-lg-6">
          <button
            v-bind:disabled="tasks.length === 0"
            type="button"
            class="supprimer btn btn-danger"
            aria-label="close"
            @click="removeAll()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div>
          <div
            class="d-flex justify-content-between gap-5"
            v-for="(task, index) in tasks"
            :key="index"
          >
            <div class="row">
              <div class="col-lg-6">
                <p>{{ task }}</p>
              </div>
            <div class="col-lg-6">
              <button class="btn btn-danger mb-3" @click="remove(index)">Supprimer</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        champ: '',
        tasks: [],
        time: null,
        select: []
      }
    },
    methods: {
      add: function () {
        // Obtenez la date et l'heure actuelles
        const currentTime = new Date()
        // Formatez l'heure en HH:MM:SS
        const formattedTime = `${currentTime.getDate()}/${
          currentTime.getMonth() + 1
        }/${currentTime.getFullYear()}`
        // Ajoutez l'heure à la tâche avant de la pousser dans le tableau
        const taskWithTime = `${this.champ} - ${formattedTime}`
        this.tasks.push(taskWithTime)
        this.champ = ''
      },
      /* add: function () {
          this.tasks.push(this.champ)
          this.champ = ''
        },*/
      remove: function (index) {
        this.tasks = this.tasks.filter((_, i) => i !== index)
      },
      removeAll: function () {
        this.tasks = []
      }
    }
  }
  </script>
  
  <style scoped>
  .todolist {
    width: 50%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 20px;
  }
  .ajouter,
  input,
  .supprimer {
    width: 70%;
  }
  </style>
  