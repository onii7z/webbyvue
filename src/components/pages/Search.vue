<template>
    <div>
        <input v-model="query" type="search" placeholder="Recherche de tuto">
        <button>Search</button>
        <div v-for="tuto in recherche" :key="tuto.id">
            <img :src="tuto.image" alt="">
            <h3>{{tuto.titre}}</h3>
            <h5>Note</h5> <p>{{tuto.note}}/5</p>
            <router-link :to="{ name: 'Module_Tuto', params : {id : tuto.id}}">
                <button  type="submit" >Voir le tuto</button>
            </router-link>
        </div>
    </div>
</template>

<script>
// ne fonctione pas
  import param from '@/param/param'

    export default {
      name: "search",
      data() {
          return {
              search : [],
              query: "",
          }
      },
      computed:{  
            // FONCTIONNE 
            recherche: function(){
                var query = this.query;
                return this.search.filter(function(tuto){

                    return tuto.titre.includes(query);
                })
            },
            // recherche: function(){
            //     var query = this.query;
            //     let test = this.search.forEach(function(tuto){
            //         console.log('Data1', tuto);

            //         return tuto.titre.includes(query);
            //     })
            //     return test;
            // },

        // recherche: function(){
        //       var query = this.query;
        //       var longeur = this.search.length;
        //       console.log('longueur', longeur);
        //       let test = this.search.filter(function(tuto){

        //         // console.log('gjeir',tuto.categorie);
        //         // for (const cat in tuto.categorie) {
        //         //     console.log('ta mere',cat);
        //         //     // for (const catName in cat) {
        //         //     // console.log(catName);
        //         //     // }
        //         // }

        //         // return tuto.titre.includes(query);
        //         for (let i =0; i < longeur; i++){
        //             // console.log('blgm,d');
        //             console.log('tddt',tuto.categorie);
                    
        //             // return test;
        //             // if (tuto.categorie[i] == query) {
        //             //     // return tuto.titre;
        //             //     console.log('blopppp');
        //             // }
        //         }

        //       });
        //       return test;
        //   },

      },
      created() {
          axios({
              method: 'get',
              url: param.hostTuto + '/listeTuto',
          }).then(function(response) {
              console.log('Json réponse', response);
              this.search = response.data;
              console.log('Json search', this.search);
          }.bind(this))
          .catch(error => console.log(error))
        },
    };
</script>
