<template>
    <div class="lexique">
        <h2 class="lexique__title">Lexique</h2>
        <div class="lexique__contenu" v-for="lexique in lexiques" :key="lexique.id">
            <ul class="lexique__list">
                <li class="lexique__item">
                    <router-link class="lexique__link" :to="{ name: 'Lexique', params : {id : lexique.id}}">
                        <h3 class="lexique__mot">{{lexique.title.rendered}}</h3>
                    </router-link>
                </li>
            </ul>
            
        
        </div>
    </div>
</template>

<script>
  import param from '@/param/param'

    export default {
        name: "Lexique_Sommaire",
        data() {
            return {
                lexiques : [],
            }
        },
        created() {
            axios({
                method: 'get',
                url: param.host + 'lexique',
            }).then(function(response) {
                console.log('test lexique', response);
                this.lexiques = response.data;
                console.log('liste lexique', this.lexiques);
            }.bind(this))
            .catch(error => console.log(error))
        },
    };
</script>

<style scoped>

</style>