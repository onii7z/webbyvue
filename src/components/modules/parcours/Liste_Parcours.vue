<template>
    <div>
        <p>Voici la liste de nos parcours proposés : </p>
        <div v-for="parcours in liste" :key="parcours.id">
            <router-link :to="{ name: 'Parcours', params : {id : parcours.id}}">
                <h3>{{parcours.title.rendered}}</h3>
            </router-link>
        </div>
    </div>
</template>

<script>
    import param from '@/param/param'
    export default {
        data() {
            return {
                liste: [],
            }
        },
        created() {
            axios({
                method: 'get',
                url: param.host + 'parcours',
            }).then(function(response) {
                this.liste = response.data;
                console.log('liste parcours', this.liste);
            }.bind(this))
            .catch(error => console.log(error))
        },
    }
</script>