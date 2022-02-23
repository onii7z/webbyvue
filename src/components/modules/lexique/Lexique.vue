<template>
    <div class="lexique">
        <h3 class="lexique__mot">{{lexique.nom}}</h3>
        <p class="lexique__desc">{{lexique.desc}}</p>
        <a class="lexique__link" :href="lexique.link" >{{lexique.link}}</a>
    </div>
</template>

<script>
    import param from '@/param/param'
    export default {
        name: "Lexique",
        data() {
            return {
                lexique : {
                    id: 0
                }
            }
        },
        created(){
            this.lexique.id = this.$route.params.id;
            console.log('id tuto', this.lexique.id);
            axios({
                method: 'get',
                url : param.hostTuto + '/listeLexique/'+this.lexique.id,     
            }).then(response=>{
                console.log('tt', response);
                this.lexique = response.data;
                console.log('single lexique', this.lexique);
            })
            .catch(error => console.log('erreur lexique', error))
        }
    }
</script>

<style scoped>

</style>