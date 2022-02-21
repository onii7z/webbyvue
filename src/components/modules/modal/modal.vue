<template>
    <div class="headermenu menu">
        <nav class="headermenu burg">
            <ul class="burglist">
            <li class="burgitem burglink">Connexion</li>
            <li class="burgitem">
                <router-link to="/" class="burglink" href="#" @tap="close">Accueil</router-link>
            </li>
            <li class="burgitem">
                <router-link to="/quisommes" class="burglink " href="#" @tap="close">A propos</router-link>
            </li>
            <li class="burgitem">
                <router-link to="/presentation_parcours" class="burglink" href="#" @tap="close"
                >Parcours</router-link
                >
            </li>
            <li class="burgitem">
                <router-link to="/tuto" class="burglink" href="#" @tap="close"
                >Tutos</router-link
                >
            </li>
            </ul>
            <button class="burg__close" @click="close" >
                    <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M31.6666 6.33331L6.33331 31.6666M31.6666 31.6666L6.33331 6.33331L31.6666 31.6666Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    />
                </svg>
            </button>
        </nav>
    </div>
</template>
<script>

export default {
    name: "Modal",
    data() {
    return {
    }
    },
    methods:{
        close(){
        this.$emit('close');
    }
        }
};

</script>