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
            <h5 class="tuto__sstitre">Lien</h5><a class="tuto__lien" :href="tutos.lien"><button><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.09961 17.0499V13.9499H21.6996L15.4996 7.7499L17.0496 4.6499L27.8996 15.4999L17.0496 26.3499L15.4996 23.2499L21.6996 17.0499H3.09961Z" fill="white"/>
</svg></button></a>
            <h5 class="tuto__sstitre">Langue</h5>
            <p class="tuto__desc" v-for="lang in tutos.langue" :key="lang.id">
                {{lang.nom}}
            </p>
            <h5 class="tuto__sstitre">Note</h5>
            <p class="tuto__desc">{{tutos.note}}/5</p>
            <h5 class="tuto__sstitre">Notez moi</h5>
            <p class="tuto__desc">note/5</p>
            <button class="tuto__noter">Noter</button>
            <img class="tuto__image" :src="tutos.image" alt="">
            <h3 class="tuto__titre">Commentaires : </h3><hr class="tuto__barre">
            <form @submit="creer" class="tuto__comments comments">
                <input v-model="commentaires.contenu" class="comments__input"  type="textarea" placeholder="Votre commentaire">
                <button type="submit" class="comments__btn">Envoyer</button>
            </form>
            <div class="tuto__comm" v-for="com in tutos.comments" :key="com.id">
                <p>{{com.comment_author}} : </p>
                <br>
                <p>{{com.comment_content}}</p> 
            </div>
        </div>
    </div>
</template>

    

<script>
    import param from '@/param/param';
    import appService from '@/services/appService';


    export default {
        name: "Module_Tuto",
        data() {
            return {
                tuto : {
                    id: 0
                },
                commentaires : {
                    contenu:null
                },
                utilisateur: null
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
        },
        methods: {
            creer: function() {
                this.utilisateur = appService.getLocal();
                console.log('utilisateur', this.utilisateur);
                var idpost = this.$route.params.id;
                console.log('id', idpost);

                let headers = {
                    'Authorization' : 'Bearer ' + this.utilisateur.token
                }
                axios({
                    method: 'post',
                    data: {
                        post: idpost,
                        content: this.commentaires.contenu,
                        status: "approved",
                        type: "comment",
                    },
                    url: param.host + 'comments',
                    headers: headers
                }).then(function(response) {
                    console.log('Retour Créa comm', response);
                    // this.$router.push('/module_tuto/'+idpost);
                    // location.reload();
                    // this.name.$forceUpdate();
                    this.$router.go();
                    // $router.go();
                }.bind(this))
                .catch(error => console.log(error))
            }
        }
    }
</script>
<style scoped>

</style>