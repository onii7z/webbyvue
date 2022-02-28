<template>
  <div class="contact grid">
    <h2 class="contact__titre">Nous contacter</h2>
    <form class="contact__form form" ref="form" @submit.prevent="sendEmail">
      <label class="form__desc">Votre nom/pseudo : </label><br>
      <input class="form__input" type="text" name="user_name" placeholder="Nom/pseudo" /><br>
      <label class="form__desc"> Votre Email : </label><br>
      <input class="form__input" type="email" name="user_email" placeholder="Email" /><br>
      <label class="form__desc">Message : </label><br>
      <input class="form__input form__input--text"  type="textarea" name="message" placeholder="Entrez votre message ici"><br>
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
            // console.log('form', this.user_name);
            console.log("SUCCESS!", result.text);
            alert("E-mail envoyé");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
