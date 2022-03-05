<template>
  <div class="contenu">
    <h3 class="contenu__title">{{ liste.title.rendered }}</h3>
    <svg
      class="contenu__ligne"
      width="100%"
      height="10px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="10" x2="300" stroke="#5BBF7E" stroke-width="5" />
    </svg>
    <div
      class="contenu__contenu"
      v-for="content in liste.acf.contenu"
      :key="content.id"
    >
      <h4 class="contenu__subtitle">{{ content.sous_titre }}</h4>
      <div
        class="contenu__text"
        v-for="area in content.zone_contenu"
        :key="area.id"
      >
        <p class="text">{{ area.area_text }}</p>
      </div>
      <div
        class="contenu__link"
        v-for="link in content.lien_contenu"
        :key="link.id"
      >
        <a class="link" :href="link.link_content">{{ link.link_content }}</a>
      </div>
      <svg
        class="contenu__ligne"
        width="100%"
        height="10px"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10" x2="300" stroke="#5BBF7E" stroke-width="5" />
      </svg>
    </div>
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
      url: param.host + "page_content/158",
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