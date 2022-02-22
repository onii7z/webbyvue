<template>
  <div class="contact grid">
    <h2 class="contact__titre">Nous contacter</h2>
    <form class="contact__form form" ref="form" @submit.prevent="sendEmail">
      <label class="form__desc">Votre Nom/Pseudo : </label><br>
      <input class="form__input" type="text" name="user_name" placeholder="Entrer votre pseudo" /><br>
      <label class="form__desc"> Votre Email : </label><br>
      <input class="form__input" type="email" name="user_email" placeholder="Entrer votre mail" /><br>
      <label class="form__desc">Message : </label><br>
      <!-- <textarea class="form__input form__input--text" rows="4" name="message"></textarea><br> -->
        <input class="form__input form__input--text"  type="textarea" name="message" placeholder="Votre commentaire"><br>
      <input class="form__btn" type="submit" value="Envoyer" /><br>
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_yswjkwh", //service ID
          "template_wv5kapz", // Template ID
          this.$refs.form,
          "user_RHZXIbvoJrtTEIdFa28pt" //id   tout se trouve sur le site
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
