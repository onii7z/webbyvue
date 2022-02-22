<template>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Votre Nom/Pseudo</label>
    <input type="text" name="user_name">
    <label> Votre Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Envoyer">
  </form>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_yswjkwh', 'template_wv5kapz', this.$refs.form, 'user_RHZXIbvoJrtTEIdFa28pt')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>
