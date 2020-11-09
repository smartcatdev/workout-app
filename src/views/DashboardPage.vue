<template>
    <v-container fluid>
        <v-row>
            <v-col id="app-content">
                App Main Content
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import VerticalNav from '../components/common/VerticalNav'

    export default {
        name: "Dashboard",
        components: {
        },
        props: {
            source: String,
        },

        data: () => ({
            drawer: null
        })
    }
</script>

<style scoped>
</style>
