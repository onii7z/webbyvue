<template>
    <div>
       <h3>{{parcours.nom}}</h3>
       <div v-for="parcour in parcours" :key="parcour.id">
            <h4>{{parcour.titre}}</h4>
            <p>{{parcour.resume}}</p>
            <img :src="parcour.image" alt="">
            <p>{{parcour.lien}}</p>
       </div>
    </div>
</template>

<script>
    import param from '@/param/param'
    export default {
        name: "Lexique",
        data() {
            return {
                parcours : {
                    id: 0
                }
            }
        },
        created(){
            this.parcours.id = this.$route.params.id;
            console.log('id tuto', this.parcours.id);
            // test
            axios({
                method: 'get',
                url : param.hostTuto + '/listeParcours/'+this.parcours.id,     
            }).then(response=>{
                console.log('tt', response);
                this.parcours = response.data;
                console.log('single parcours', this.parcours);
            })
            .catch(error => console.log('erreur parcours', error))
        }
    }
</script>

<style scoped>

</style>