<template>
    <v-container>
        <v-row>
            <v-col class="big-card-container">
                <ResetForm></ResetForm>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import ResetForm from '../components/common/ResetForm'

    export default {
        name: "Reset",
        components: {
            ResetForm
        },
    }
</script>

<style scoped>

</style>