<template>
    <div class="grid">
        <div class="cards" v-for="tuto in listeTuto" :key="tuto.id">
            <img class="cards__img" :src="tuto.image" alt="">
            <h3 class="cards__titre">{{tuto.titre}}</h3>
            <h5 class="cards__desc">Note : {{tuto.note}}/5</h5>
            <router-link class="cards__lien" :to="{ name: 'Module_Tuto', params : {id : tuto.id}}">
                <p class="cards__sstitre">Voir le tuto</p>
            </router-link>
        </div>
    </div>
</template>

<script>
  import param from '@/param/param'

    export default {
        name: "Tuto",
        data() {
            return {
                listeTuto : [],
            }
        },
        created() {
            axios({
                method: 'get',
                url: param.hostTuto + '/listeTuto',
            }).then(function(response) {
                console.log('test tuto', response);
                this.listeTuto = response.data;
                console.log('liste tuto', this.listeTuto);
            }.bind(this))
            .catch(error => console.log(error))
        },
    };
</script>

<style scoped>

</style>