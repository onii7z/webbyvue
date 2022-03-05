<template>
  <div class="presentation">
    <h3 class="presentation__title">{{ liste.title.rendered }}</h3>
    <div
      class="presentation__contenu"
      v-for="content in liste.acf.contenu"
      :key="content.id"
    >
      <h4 class="presentation__subtitle">{{ content.sous_titre }}</h4>
      <img
        class="presentation__logo"
        src="../../../assets/WebbyYeux.gif"
        alt="Webby"
      />
      <div
        class="presentation__text"
        v-for="area in content.zone_contenu"
        :key="area.id"
      >
        <p class="presentation__desc">{{ area.area_text }}</p>
        <br /><br />
      </div>
      <div
        class="presentation__clic"
        v-for="link in content.lien_contenu"
        :key="link.id"
      >
        <p class="presentation__link">{{ link.link_content }}</p>
      </div>
    </div>
    <router-link class="presentation__lien" to="/liste_parcours">
      Liste des parcours
    </router-link>
  </div>
</template>

<script>
import param from "@/param/param";
export default {
  data() {
    return {
      liste: [],
    };
  },
  created() {
    axios({
      method: "get",
      url: param.host + "page_content/165",
    })
      .then(
        function (response) {
          this.liste = response.data;
        }.bind(this)
      )
      .catch((error) => console.log(error));
  },
};
</script>