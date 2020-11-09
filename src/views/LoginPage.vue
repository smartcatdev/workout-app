<template>
    <v-container>
        <v-row>
            <v-col>
                <login-form></login-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import LoginForm from '../components/common/LoginForm';

    export default {
        name: 'Login',
        components: {
            LoginForm
        },
        data() {
            return {
                image: {
                    backgroundImage: "url(../images/exercise.jpg)"
                }
            }
        }
    }
</script>

<style scoped>

    /* .login-container {
        padding: 90px 0;
        margin: 0 auto;
    }

    .login-form {
        width: 750px;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.07);
        background-color: #fff;
        border-radius: 3px;
        padding: 30px 45px;
        text-align: center;
    }

    .register-container {
        text-align: center;
        margin-top: 15px;
    }

    @media(max-width: 750px) {

        .login-form {
            width: auto;
        }

    } */
</style>
