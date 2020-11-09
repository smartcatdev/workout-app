<template>
    <v-container>
        <v-row>
            <v-col cols="12" id="app-content">
                <v-card>
                    <v-card-title class="headline">
                        Start an empty workout
                    </v-card-title>

                    <v-card-subtitle>A blank workout allows you to add exercises on the fly.</v-card-subtitle>

                    <v-card-actions>
                        <v-btn text color="primary">
                            Start Now
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    import VerticalNav from "../components/common/VerticalNav"

    export default {
        name: "NewSessionPage",
        components: {}
    }
</script>

<style scoped>
    .full-height {
        height: 100vh;
    }

    #app-menu {
        background-color: #fff;
    }
</style>