<template>
    <div>
        <div v-for="tutos in tuto" :key="tutos.id">
            <h3>{{tuto.titre}}</h3>
            <h5>Catégorie</h5>
            <p v-for="cat in tutos.categorie" :key="cat.id">
                {{cat.nom}}
            </p>
            <h5>Niveau</h5>
            <p v-for="niv in tutos.niveau" :key="niv.id"> 
                {{ niv.nom }} 
            </p>
            <h5>Résumé </h5><p>{{ tutos.resume }}</p>
            <h5>Format</h5>
            <p v-for="format in tutos.type" :key="format.id">
                {{format.nom}}
            </p>
            <h5>Lien</h5><a>{{tutos.lien}}</a>
            <h5>Langue</h5>
            <p v-for="lang in tutos.langue" :key="lang.id">
                {{lang.nom}}
            </p>
            <h5>Note</h5>
            <img :src="tutos.image" alt="">
            <h3>Commentaires : </h3>
            <p v-for="com in tutos.comments" :key="com.id">
                {{com.comment_content}}
            </p>
        </div>
    </div>
</template>

    

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