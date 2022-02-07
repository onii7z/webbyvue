<template>
    <div>
        <div v-for="lexique in lexiques" :key="lexique.id">
            <h3>{{lexique.title.rendered}}</h3>
            <p>{{lexique.acf.description}}</p>
            <p>{{lexique.acf.lien_source}}</p>
            <!-- <router-link :to="{ name: 'Module_Tuto', params : {id : tuto.id}}">
                <button  type="submit" >Voir le tuto</button>
            </router-link> -->
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