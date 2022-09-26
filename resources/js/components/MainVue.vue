<template>
    <v-app>
        <v-footer>
            <router-link to="/Items/List">
                <v-btn color="primary mx-3">Przedmioty</v-btn>
            </router-link>
            <router-link to="/Categories/List">
                <v-btn class="primary  mx-3">Kategorie</v-btn>
            </router-link>

        </v-footer>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
<style>
a {
    text-decoration: none;
}
</style>
