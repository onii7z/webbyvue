<template>
  <footer>
      <h2>{{ liste.title}} {{ liste.description }}  </h2>
      <router-link to="/mentions"> Mentions legales </router-link>
      <router-link to="/"> Conditions d'utilisations </router-link>
  </footer>
</template>

<script>
  import param from '@/param/param'

  export default {
    name: "Footer",
    data() {
      return {
        liste : [],
      }
    },
    created() {
      axios({
          method: 'post',
          url: param.auth,
          data: {
            'username': param.user,
            'password': param.psw
          }
      }).then(function(response) {
        // console.log("Reponse token", response);

        let token = response.data.token;
        // console.log("Token", token)

        let headers = {'Authorization' : 'Bearer ' + token}
        axios({
          method: 'get',
          url: param.host + 'settings',
          headers: headers
        }).then(function(response) {
          // console.log('test', response);
          this.liste = response.data;
          // console.log('liste', this.liste);
        }.bind(this))
      }.bind(this))
      .catch(error => console.log(error))
    },
  };
</script>

<style scoped>
    footer {
        background-color: black;
        color: white;
    }
</style>
  

