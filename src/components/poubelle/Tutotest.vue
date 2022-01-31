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
            langueTuto : [],
            catTuto : [],
            typeTuto : [],
            imageTuto : [],
            commTuto : [],
            tutos : {
                id : null,
                titre : null,
                categorie : null,
                resume: null,
                format: null,
                lien: null,
                langue: null,
                note: null,
                comm: null,
            }
            }
        },
        created() {
            axios({
                method: 'get',
                url: param.host + 'tuto',
            }).then(function(response) {
                this.listeTuto = response.data;
                console.log('liste tuto', this.listeTuto);
                
                axios({
                    method: 'get',
                    url: param.host + 'lang_tuto',
                }).then(function(response) {
                    this.langueTuto = response.data;
                    console.log('liste langue', this.langueTuto);  
                    
                    axios({
                        method: 'get',
                        url: param.host + 'cat_tuto',
                    }).then(function(response) {
                        this.catTuto = response.data;
                        console.log('cat tuto', this.catTuto);

                        axios({
                            method: 'get',
                            url: param.host + 'type_tuto',
                        }).then(function(response) {
                            this.typeTuto = response.data;
                            console.log('type tuto', this.typeTuto);
                            
                            axios({
                                method: 'get',
                                url: param.host + 'media',
                            }).then(function(response) {
                                this.imageTuto = response.data;
                                console.log('image tuto', this.imageTuto); 
                                
                                axios({
                                    method: 'get',
                                    url: param.host + 'comments',
                                }).then(function(response) {
                                    this.commTuto = response.data;
                                    console.log('comments tuto', this.commTuto);  

                                    // var testtest = this.listeTuto.concat(this.langueTuto);
                                    // console.log('cccc', testtest);
                                    
                                    // this.tutos.id = this.listeTuto.id;
                                    // this.tutos.titre = this.listeTuto.title;
                                    // this.tutos.categorie = this.catTuto.id;
                                    // this.tutos.resume = this.listeTuto.acf.resume_du_tuto;
                                    // this.tutos.format = this.typeTuto.id;
                                    // this.tutos.lien = this.listeTuto.acf.lien;
                                    // this.tutos.langue = this.langueTuto.id;
                                    // this.tutos.comm = this.commTuto.post;

                                    // console.log('longue vie', this.tutos);
                                }.bind(this))
                            }.bind(this))
                        }.bind(this))
                    }.bind(this))
                }.bind(this))
            }.bind(this))
            .catch(error => console.log(error))
        },
    };
</script>

<style scoped>

</style>