<template>
    <v-app>

        <AppBar v-if="this.$router.currentRoute.path != '/'"></AppBar>

        <!-- Main App Content -->
        <!-- Determined by Router -->
        <v-main>
            <!-- <v-container fluid class="fill-height"> -->
                <v-slide-x-transition :hide-on-leave="true">
                    <router-view></router-view>
                </v-slide-x-transition>
            <!-- </v-container> -->
        </v-main>
        <!------------------------>

        <v-footer app v-if="this.$store.getters.isLoggedIn">
            <v-progress-linear
                v-if="isLoading"
                indeterminate
                color="yellow darken-2"
            ></v-progress-linear>

            <AppNav></AppNav>
        </v-footer>

    </v-app>
</template>

<script>

    import AppBar from "./components/common/AppBar";
    import AppNav from "./components/common/AppNav";
    export default {
        name: "Root",
        components: {AppNav, AppBar},
        data() {
            return {}
        },
        mounted() {

        },
        computed: {
            isLoading: function() {
                return this.$store.getters.isLoading
            }
        }

    }
</script>

<style>

    body {
        font-size: 1.25em;
        background-color: #f9f8f7;
    }

    .v-footer {
        padding: 0 !important;
    }

    .container {
        padding-top: 0;
        padding-bottom: 0;
    }
</style>
