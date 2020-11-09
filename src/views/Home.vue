<template>
    <v-container class="home fill-height">
        <v-row>
            <v-col align-self="end">
                <router-link :to="{name: 'login'}">
                    <v-btn
                        block
                        color="primary"
                        elevation="1">
                        Login
                    </v-btn>
                </router-link>
            </v-col>
            <v-col align-self="end">
                <router-link :to="{name: 'register'}">
                    <v-btn
                        block
                        color="primary"
                        elevation="1">
                        Register
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Home',
}
</script>   

<style scoped>
    .home {
        background: #FBC02D;
    }
</style>