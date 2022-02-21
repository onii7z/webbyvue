<template>

<div class="modal__connect">
  <transition name ="apparition">
<form class="modal__connect connect">
     <button class="connect__close" @click="close">
                    <svg class="connect__svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M31.6666 6.33331L6.33331 31.6666M31.6666 31.6666L6.33331 6.33331L31.6666 31.6666Z"
                    stroke="#1DD0D7"
                    stroke-width="2"
                    stroke-linecap="round"
                    />
                </svg>
            </button>

    <p class="connect__desc">Nom d'utilisateur</p>
    <input class="connect__input" type="text" v-model="utilisateur.username"  />
    <p class="connect__desc">Mot de passe</p>
    <input class="connect__input" type="password" v-model="utilisateur.password" />
    <a class="connect__link" href="#">Mot de passe oublié ? </a>
    <button class="connect__submit" type="submit" value="Se connecter" @click="connect" >{{titre}}</button>
    
</form>
</transition>
</div>

    
</template>

<script>
import param from "@/param/param";
import appService from '@/services/appService';

export default {
  name: "Connect",
  data() {
    return {
      utilisateur: {
        username: null,
        password: null,
        token: null,
        role: null,
      },
      titre:null,
    };
  },
  created() {
    this.titre = param.titre;
    axios({
      method: "get",
      url: param.host + "option",
    })
      .then(
        function (response) {
          console.log("Response :", response);
          this.liste = response.data;
          console.log("Liste Options", this.liste);
        }.bind(this)
      )
      .catch((error) => console.log(error));
  },
  methods:{
    connect:function(){
      console.log("Connect");

      let params = new FormData();
      params.append('username', this.utilisateur.username);
      params.append('password', this.utilisateur.password);

      axios({
        method: 'post',
        // url: param.auth+"token",
        url: param.auth,
        data: params
      }).then(function(response) {
        console.log("reponse token", response);
        this.utilisateur = response.data;
        console.log("utilisateur", response.data);
        this.titre = this.utilisateur.user_display_name;
        // $('#cnxModal').modal('hide');
        // save local

        let localValues = {
          nom:    this.utilisateur.user_display_name,
          role:   this.utilisateur.user_role[0],
          token:  this.utilisateur.token
        };
        appService.setLocal(localValues);

      }.bind(this))
      .catch(error => {
        console.log("erreur de connexion", error);

        // this.message = param.message.errCnx;
      })
    },
    close(){
        this.$emit('close');
    }
        }
  
};
</script>
<style scoped>

</style>