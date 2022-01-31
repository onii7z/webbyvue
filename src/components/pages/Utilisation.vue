<template>
    <div>
        <h3>{{liste.title.rendered}}</h3>
        <div v-for="content in liste.acf.contenu" :key="content.id">
            <h4>{{content.sous_titre}}</h4>
            <div v-for="area in content.zone_contenu" :key="area.id">
                <p>{{area.area_text}}</p><br><br>
            </div>
            <div v-for="link in content.lien_contenu" :key="link.id">
                <p>{{link.link_content}}</p>
            </div>
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
                url: param.host + 'page_content/161',
            }).then(function(response) {
                this.liste = response.data;
                console.log('liste Mentions', this.liste);
            }.bind(this))
            .catch(error => console.log(error))
        },
    }
</script>