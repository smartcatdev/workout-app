<template>
    <v-container fluid no-gutters id="app-bar">
        <v-row align="center" justify="center">

            <v-col cols="6">
                <router-link class="link" :to="{ name: 'dashboard' }">
                    <v-icon>mdi-home-city-outline</v-icon>
                </router-link>
            </v-col>

            <v-col cols="6" class="text-right">
                <div v-if="isLoggedIn">
                    <router-link class="link" :to="{name: 'profile'}">
                        <v-icon>mdi-account</v-icon>
                    </router-link>
                    <a @click="logout">Logout</a>
                </div>
                <div v-else>
                    <router-link class="link" :to="{ name: 'login' }">Login</router-link>
                    <router-link class="link" :to="{ name: 'register' }">Register</router-link>
                </div>

            </v-col>

        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "AppBar",
        computed: {
            isLoggedIn: function() {
                return this.$store.getters.isLoggedIn
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/')
                    })
            }
        }
    }
</script>

<style scoped>
    #app-bar {
        /*height: 50px;*/
        background-color: #fff;
        /*box-shadow: 0 1px 2px rgba(0,0,0,.05);*/
        /*line-height: 50px;*/
        /*font-size: 14px;*/
    }

    #app-bar .logo {
        /*font-size: 32px;*/
    }

    #app-bar .link{
        margin-right: 15px;
    }

    #app-bar .link:last-child {
        margin-right: 0;
    }
</style>