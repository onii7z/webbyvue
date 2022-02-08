<template>
    <div>
        <div v-for="tuto in listeTuto" :key="tuto.id">
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
  import param from '@/param/param'

    export default {
        name: "Tuto",
        data() {
            return {
                listeTuto : [],
            }
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