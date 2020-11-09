<template>
    <v-container>
        <v-row>
            <v-col>
                <RegistrationForm></RegistrationForm>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import RegistrationForm from '../components/common/RegistrationForm'

    export default {
        name: 'Register',
        components: {
            RegistrationForm
        },
    }
</script>

<style scoped>

</style>