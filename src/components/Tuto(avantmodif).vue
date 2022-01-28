<template>
    <div>
        <div v-for="tuto in listeTuto" :key="tuto.id">
            <h3>{{tuto.title.rendered}}</h3>
            <h5>Catégorie</h5><p></p>
            <h5>Niveau</h5><p></p>
            <h5>Résumé et avis</h5><p>{{ tuto.acf. resume_du_tuto}}</p>
            <h5>Format</h5><p></p>
            <h5>Lien</h5><a>{{tuto.acf.lien}}</a>
            <h5>Langue</h5><p></p>
            <h5>Note</h5>
            <img src="" alt="">
            <h3>Commentaires : </h3><p></p>
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
                url: param.host + 'tuto',
            }).then(function(response) {
                console.log('test tuto', response);
                this.listeTuto = response.data;
                console.log('liste tuto', this.liste);
            }.bind(this))
            .catch(error => console.log(error))
        },
    };
</script>

<style scoped>

</style>