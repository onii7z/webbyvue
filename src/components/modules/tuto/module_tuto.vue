<template>
    <div>
        <div v-for="tutos in tuto" :key="tutos.id" class="tuto grid">
            <h3 class="tuto__titre">{{tutos.titre}}</h3><hr class="tuto__barre">
            <h5 class="tuto__sstitre">Catégorie</h5>
            <p class="tuto__desc" v-for="cat in tutos.categorie" :key="cat.id">
                {{cat.nom}}
            </p>
            <h5 class="tuto__sstitre">Niveau</h5>
            <p class="tuto__desc" v-for="niv in tutos.niveau" :key="niv.id"> 
                {{ niv.nom }} 
            </p>
            <h5 class="tuto__sstitre">Résumé </h5><p class="tuto__desc">{{ tutos.resume }}</p>
            <h5 class="tuto__sstitre">Format</h5>
            <p class="tuto__desc" v-for="format in tutos.type" :key="format.id">
                {{format.nom}}
            </p>
            <h5 class="tuto__sstitre">Lien</h5><a class="tuto__lien" :href="tutos.lien"><button>tt</button></a>
            <h5 class="tuto__sstitre">Langue</h5>
            <p class="tuto__desc" v-for="lang in tutos.langue" :key="lang.id">
                {{lang.nom}}
            </p>
            <h5 class="tuto__sstitre">Note</h5>
            <p class="tuto__desc">{{tutos.note}}/5</p>
            <img class="tuto__image" :src="tutos.image" alt="">
            <h3 class="tuto__titre">Commenaires : </h3><hr class="tuto__barre">
            <input class="tuto__comments" type="textarea" placeholder="Votre commentaire">
            <p class="tuto__comm" v-for="com in tutos.comments" :key="com.id">
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