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
            <!-- <input type="hidden" :placeholder="tutos.nbnote"> -->
            <h5 class="tuto__sstitre">Notez moi</h5>
            <form @submit="noter" >
                <p class="tuto__desc">
                    <select v-model="notes">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    /5
                </p>
                <button type="submit" class="tuto__noter">Noter</button>
            </form>
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
    // import apiFetch from '@wordpress/api-fetch';


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
                notes : "",
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
            },
            noter: function() {

                console.log("tuto notes", this.tuto[0].note);
                console.log("tuto nbnotes", this.tuto[0].nbnote);
                console.log("notes", this.notes);
                // var n1 = parseInt(this.tuto[0].note);
                // var n2 = parseInt(this.tuto[0].nbnote);
                // var n3 = parseInt(this.notes);
                // var test = n1 + n3;
                // var test = (n1, n3 ) => n1 + n3;
                // console.log('rrrrrrr', test);

                // limite à 2 chiffres après la virgule
                function nombre(x) {
                    return Number.parseFloat(x).toFixed(2);
                }
                // création des variables pour l'opération c'est plus lisible
                var temp1 = nombre(this.tuto[0].note);
                console.log('temp1 note globales', temp1);
                var temp2 = parseInt(this.tuto[0].nbnote);
                console.log('temp2 nb notes', temp2);
                var temp3 = parseInt(this.notes);
                console.log('temp3 note', temp3);

                // Addition pour augmenter le compteur de vote à chaque vote
                var newNbNote = temp2 +1;
                console.log('nouvelle nb note', newNbNote);

                // Début du calcul de la nouvelle note
                // on multiplie la note existante par le nombre de note actuelle 
                var mult = temp1 * temp2;
                console.log('resul mult', mult);
                
                // On addicte le résultat précedent avec la note mise par l'utilisateur
                var add = mult + temp3;
                console.log('resul add', add);

                // On divise le résultat précedent par le nouveau nombre de vote
                var div = add / newNbNote;
                console.log('resul div', div);

                // Pour finir on le passe dans la fonctionne pour éviter qu'il y a plus de 2 chiffres après la virgule.
                var newNote = nombre(div);
                console.log('nouvele note', newNote);

                






                // var newNote = ((parseInt(this.tuto[0].note) * parseInt(this.tuto[0].nbnote))+parseInt(this.notes))/(parseInt(newNbNote));
                // console.log('parse', newNote);
                // var newNote1 = (this.tuto[0].note*this.tuto[0].nbnote)+this.notes;
                // var newNote2 = (this.tuto[0].nbnote++);
                // var newNote = newNote1/newNote2;

                

                // var newNoteForm = financial(newNote);


                
                // console.log("nouvelle note :", newNote);
                // console.log("nouvelle nbnote :", newNbNote);


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
                        status : "publish",
                        fields : {
                            note_globale : newNote,
                            nb_note : newNbNote,
                        }
                    },
                    url: param.host +'tuto/'+idpost,
                    headers: headers
                }).then(function(response) {
                    console.log('Retour Créa note', response);
                    alert("Note prise en compte");
                    this.$router.go();

                }.bind(this))
                .catch(error => console.log(error))
            }
        }
    }
</script>
<style scoped>

</style>