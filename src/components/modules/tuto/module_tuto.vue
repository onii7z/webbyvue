<template>
    <div>
        single tuto
    </div>
</template>

    <!-- <div>
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
    </div> -->

<script>
    import param from '@/param/param'
    export default {
        name: "Module_Tuto",
        data() {
            return {
                tuto : {
                    id: 0
                }
            }
        },
        created(){
            this.tuto.id = this.$route.params.id;
            console.log('id tuto', this.tuto.id);

            axios({
                method: 'get',
                url : param.hostTuto + '/listeTutos/'+this.tuto.id,     
            }).then(response=>{
                this.tuto = response.data;
                console.log('single tuto', this.tuto);
            })
            .catch(error => console.log('erreur tuto', error))
        }
    }
</script>
<style scoped>

</style>