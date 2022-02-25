<template>
  <div>
    <input v-model="query" placeholder="Recherche de tuto" />
    <select v-model="query">
      <option selected disabled>Catégories</option>
      <option v-for="cat in cats" :key="cat.id" :value="cat.name">
        {{ cat.name }}
      </option>
    </select>
    <select v-model="query">
      <option selected disabled>Niveau</option>
      <option v-for="niv in nivs" :key="niv.id" :value="niv.name">
        {{ niv.name }}
      </option>
    </select>
    <select v-model="query">
      <option selected disabled>Format</option>
      <option v-for="format in formats" :key="format.id" :value="format.name">
        {{ format.name }}
      </option>
    </select>
    <select v-model="query">
      <option selected disabled>Langue</option>
      <option v-for="lang in langs" :key="lang.id" :value="lang.name">
        {{ lang.name }}
      </option>
    </select>
    <a href="https://webby.houlle.org/wp-admin/post-new.php?post_type=tuto">Ajouter un tuto</a>

    <div class="grid">
      <p v-if="recherche.length == 0">Aucun résultat</p>
      <div class="cards" v-for="tuto in recherche" :key="tuto.id">
        <img class="cards__img" :src="tuto.image" alt="" />
        <h3 class="cards__titre">{{ tuto.titre }}</h3>
        <h5 class="cards__desc">Note : {{ tuto.note }}/5</h5>
        <router-link
          class="cards__lien"
          :to="{ name: 'Module_Tuto', params: { id: tuto.id } }"
        >
          <p class="cards__sstitre">Voir le tuto</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import param from "@/param/param";

export default {
  name: "search",
  data() {
    return {
      search: [],
      query: "",
      cats: [],
      nivs: [],
      langs: [],
      formats: [],
    };
  },
  computed: {
    recherche: function () {
      var query = this.query;
      var res;
      return this.search.filter(function (tuto) {
        for (let i = 0; i < tuto.categorie.length; i++) {
          // console.log('titre', tuto.categorie[i].nom);
          if (query.toLowerCase() == tuto.categorie[i].nom.toLowerCase()) {
            res = tuto.categorie[i].nom;
            return res.toLowerCase().includes(query.toLowerCase());
          }
        }
        for (let i = 0; i < tuto.tag.length; i++) {
          // console.log('titre', tuto.categorie[i].nom);
          if (query.toLowerCase() == tuto.tag[i].nom.toLowerCase()) {
            res = tuto.tag[i].nom;
            return res.toLowerCase().includes(query.toLowerCase());
          }
        }
        for (let i = 0; i < tuto.langue.length; i++) {
          // console.log('titre', tuto.categorie[i].nom);
          if (query.toLowerCase() == tuto.langue[i].nom.toLowerCase()) {
            res = tuto.langue[i].nom;
            return res.toLowerCase().includes(query.toLowerCase());
          }
        }
        for (let i = 0; i < tuto.niveau.length; i++) {
          // console.log('titre', tuto.categorie[i].nom);
          if (query.toLowerCase() == tuto.niveau[i].nom.toLowerCase()) {
            res = tuto.niveau[i].nom;
            return res.toLowerCase().includes(query.toLowerCase());
          }
        }
        for (let i = 0; i < tuto.type.length; i++) {
          // console.log('titre', tuto.categorie[i].nom);
          if (query.toLowerCase() == tuto.type[i].nom.toLowerCase()) {
            res = tuto.type[i].nom;
            return res.toLowerCase().includes(query.toLowerCase());
          }
        }
        if (query.toLowerCase() == tuto.resume.toLowerCase()) {
          return tuto.resume.toLowerCase().includes(query.toLowerCase());
        }
        if (query.toLowerCase() == tuto.titre.toLowerCase()) {
          return tuto.titre.toLowerCase().includes(query.toLowerCase());
        }
        return tuto.titre.toLowerCase().includes(query.toLowerCase());
      });
    },
  },
  created() {
    axios({
      method: "get",
      url: param.hostTuto + "/listeTuto",
    })
      .then(
        function (response) {
          //   console.log('Json réponse', response);
          this.search = response.data;
          console.log("Json search", this.search);
        }.bind(this)
      )
      .catch((error) => console.log(error));
    axios({
      method: "get",
      url: param.host + "cat_tuto",
    })
      .then(
        function (response) {
          //   console.log('Json réponse', response);
          this.cats = response.data;
          console.log("Json cat", this.cats);
        }.bind(this)
      )
      .catch((error) => console.log(error));
    axios({
      method: "get",
      url: param.host + "niv_tuto",
    })
      .then(
        function (response) {
          //   console.log('Json réponse', response);
          this.nivs = response.data;
          console.log("Json niv", this.nivs);
        }.bind(this)
      )
      .catch((error) => console.log(error));
    axios({
      method: "get",
      url: param.host + "lang_tuto",
    })
      .then(
        function (response) {
          //   console.log('Json réponse', response);
          this.langs = response.data;
          console.log("Json langs", this.langs);
        }.bind(this)
      )
      .catch((error) => console.log(error));
    axios({
      method: "get",
      url: param.host + "type_tuto",
    })
      .then(
        function (response) {
          //   console.log('Json réponse', response);
          this.formats = response.data;
          console.log("Json formats", this.formats);
        }.bind(this)
      )
      .catch((error) => console.log(error));
  },
};
</script>
