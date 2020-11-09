<template>
    <v-form @submit="submit" @reset="reset" class="big-card">
        <h2>Reset your password</h2>

        <v-text-field
            type="text"
            :state="emailState"
            placeholder="Email address"
            v-model="email"
        >
        </v-text-field>

        <v-btn pill type="submit" variant="primary">Reset password</v-btn>
    </v-form>
</template>

<script>
import * as validate from "../../functions/validation";

export default {
    name: "ResetForm",
    computed: {
        emailState() {
            if (validate.email(this.email)) {
                return true
            }
            return false
        },
    },
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        reset(e) {
            e.preventDefault();

            this.email = "";
            this.password = "";
        },
        submit(e) {
            store.dispatch();
        },
    },
};
</script>

<style scoped>
h2 {
    margin-top: 20px;
    margin-bottom: 30px;
}

.inner-form {
    max-width: 500px;
    margin: 0 auto;
}
</style>