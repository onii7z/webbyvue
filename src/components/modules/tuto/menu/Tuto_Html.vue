<template>
    <div>
        <div v-for="cats in categories" :key="cats.id">
            <h2>{{cats.titre}}</h2>
            <img :src="cats.image" alt="">
            <router-link :to="{ name: 'Module_Tuto', params : {id : cats.id}}">
                <button  type="submit" >Voir le tuto</button>
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
                url : param.hostTuto + '/listeCategories/15',     
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