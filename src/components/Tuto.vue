<template>
    <div>
        <div v-for="tuto in listeTuto" :key="tuto.id">
            <h3>{{tuto.titre}}</h3>
            <h5>Catégorie</h5>
            <p v-for="cat in tuto.categorie" :key="cat.id">
                {{cat.nom}}
            </p>
            <h5>Niveau</h5>
            <p v-for="niv in tuto.niveau" :key="niv.id"> 
                {{ niv.nom }} 
            </p>
            <h5>Résumé </h5><p>{{ tuto.resume }}</p>
            <h5>Format</h5>
            <p v-for="format in tuto.type" :key="format.id">
                {{format.nom}}
            </p>
            <h5>Lien</h5><a>{{tuto.lien}}</a>
            <h5>Langue</h5>
            <p v-for="lang in tuto.langue" :key="lang.id">
                {{lang.nom}}
            </p>
            <h5>Note</h5>
            <img :src="tuto.image" alt="">
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