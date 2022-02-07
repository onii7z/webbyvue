<template>
    <div>
       test
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