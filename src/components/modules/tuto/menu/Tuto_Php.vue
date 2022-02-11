<template>
    <div class="grid">
        <div class="cards" v-for="cats in categories" :key="cats.id">
            <img class="cards__img" :src="cats.image" alt="">
            <h2 class="cards__titre">{{cats.titre}}</h2>
            <p class="cards__desc">Note : {{cats.note}}/5</p>
            <router-link class="cards__lien" :to="{ name: 'Module_Tuto', params : {id : cats.id}}">
                <p class="cards__sstitre">Voir le tuto</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    import param from '@/param/param'
    export default {
        name: "tuto_cat",
        data() {
            return {
                categories : {
                    id: 0
                }
            }
        },
        created(){
            axios({
                method: 'get',
                url : param.hostTuto + '/listeCategories/17',     
            }).then(response=>{
                this.categories = response.data;
                console.log('single categories', this.categories);
            })
            .catch(error => console.log('erreur categories', error))
        }
    }
</script>

<style scoped>

</style>