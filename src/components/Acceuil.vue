<template>
    <div>
        <!-- slider -->
        <img src="../assets/imgs/Slider.jpg" alt="#">
        <!-- fin du slider -->

        <!-- liste des tutos -->
        <p>Best tuto</p>
        <p > {{listeOrderByNote[0].titre}}</p>
        <img :src="listeOrderByNote[0].image" alt="">
        <h5>Note</h5> : <p>{{listeOrderByNote[0].note}}/5</p>
        <router-link :to="{ name: 'Module_Tuto', params : {id : listeOrderByNote[0].id}}">
          <button  type="submit" >Voir le tuto</button>
        </router-link>

        <p>Dernier Tuto</p>
        <p > {{listeOrderByDate[0].titre}}</p>
        <img :src="listeOrderByDate[0].image" alt="">
        <h5>Note</h5> : <p>{{listeOrderByDate[0].note}}/5</p>
        <router-link :to="{ name: 'Module_Tuto', params : {id : listeOrderByDate[0].id}}">
          <button  type="submit" >Voir le tuto</button>
        </router-link>

        <!-- {{bob(listeTuto)}} -->

        <p>Tuto Aléatoire</p>
        <p > {{listeOrderByRandom[0].titre}}</p>
        <img :src="listeOrderByRandom[0].image" alt="">
        <h5>Note</h5> : <p>{{listeOrderByRandom[0].note}}/5</p>
        <router-link :to="{ name: 'Module_Tuto', params : {id : listeOrderByRandom[0].id}}">
          <button  type="submit" >Voir le tuto</button>
        </router-link>
        <!-- fin tuto -->

        <section>
          <img src="../assets/imgs/acceuil1.jpg" alt="#">
          <h2>Qui sommes-nous ? </h2>
          <p>Webby les bons tuyaux est un site web communautaire, mis à jour par la communauté. Créé par des étudiants de la grande école du numérique, il a pour objectif le partage des meilleurs tutoriels pour aider les étudiants et les internautes grâce à un système de notation.</p>
          <router-link to="/quisommes" class="nav__lien"> En savoir plus ... </router-link>
        </section>

        <section>
          <img src="../assets/imgs/acceuil2.jpg" alt="#">
          <h2>Partagez et notez les tutos</h2>
          <p>Les étudiants de la grande école du numérique et du département métiers et multimédias de l’internet de l’université de Montbéliard vous partagent les tutoriels leur ayant été utiles. A vous de noter ces tutoriels pour aider la communauté à choisir celui qui pourra l’aider dans son projet. </p>
          <router-link to="/tuto" class="nav__lien"> Découvrez nos tutos ... </router-link>
        </section>

        <section>
          <img src="../assets/imgs/acceuil3.jpg" alt="#">
          <h2>Suivez notre parcours initiatique</h2>
          <p>Si vous souhaitez apprendre les bases du développement mobile tout en étant guidé dans votre progression, notre parcours initiatique est fait pour vous : lexique de base, apprentissage des premiers langages et design sont au programme. </p>
          <router-link to="/presentation_parcours" class="nav__lien"> Commencez par ici ! </router-link>
        </section>


    </div>
    
</template>

<script>
  import param from '@/param/param'

    export default {
      name: "Acceuil",
      data() {
          return {
              listeTuto : [],
          }
      },
      computed:{
        listeOrderByNote:function(){
            function compare(a,b) {
                if (a.note < b.note) return 1;
                if (a.note > b.note) return -1;
                return 0;
            }
            return this.listeTuto.sort(compare);
        },
        listeOrderByDate:function(){
            function compare(a,b) {
                if (a.date < b.date) return 1;
                if (a.date > b.date) return -1;
                return 0;
            }
            return this.listeTuto.sort(compare);
        },
        listeOrderByRandom:function(){
            // let random_id = Math.ceil(Math.random()*this.listeTuto.length);
            // console.log('test random', random_id) ; 
            // let random_id = Math.floor(Math.random() * 3)-1;
            // console.log('test pascal', random_id);
            // let tempo = this.listeTuto.length;
            

            function compare(a,b) {
                let   random_id = Math.floor(Math.random() * 3)-1;
                return random_id
                
            }
            return this.listeTuto.sort(compare);
        },
        
// bob: function(table){
//     this.tailleTuto = table.lenght;
//     this.monTuto = Math.floor(Math.random() * this.tailleTuto);
//     this.monId = table[this.monTuto].id;
//     this.tempo = table[0];
//     table[0] = table[this.monId];
//     table[this.monId] = this.tempo;
// },
  
        // listeOrderByRandom:function(){
        //   this.tailleTuto = this.listeTuto.lenght;
        //   this.monTuto = Math.floor(Math.random() * this.tailleTuto);
        //   this.monid = this.listeTuto[this.montuto].id;
        //   function compare(a,b) {
        //         if (a.id = this.monid) return 1;
        //         else return -1;
        //     };
        //   return this.listeTuto.sort(compare);
          
        // }
               
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