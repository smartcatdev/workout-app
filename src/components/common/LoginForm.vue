<template>
    <v-form model="valid" ref="form" lazy-validation>
        
        <h2>Sign in to Companii</h2>

        <v-alert
            v-if="loginError"
            dense
            outlined
            type="error">
            Login unsuccessful. Please check your credentials and try again.
        </v-alert>
        
        <v-text-field
            v-model="email"
            label="Email Address"
            :rules="emailRules"
            @keyup="validate"
            required
        ></v-text-field>

        <v-text-field
            v-model="password"
            label="Password"
            :rules="passwordRules"
            :type="'password'"
            @keyup="validate"
            required
        ></v-text-field>

        <div class="submit">
            <v-btn 
                :disabled="!valid" 
                color="primary" 
                @click="submit"
                :loading="loading"
                >
            Submit</v-btn>
        </div>

        <div class="forgot">
            <router-link :to="{name: 'reset-password'}">Forgot password?</router-link>
        </div>
    </v-form>
</template>


<script>
import { store } from "../../store/index";
import * as validate from "../../functions/validation";
// import SubmitButton from "../elements/SubmitButton";

export default {
    name: "LoginForm",
    components: {},
    data() {
        return {
            email: "",
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+/.test(v) || "E-mail must be valid"
            ],
            password: "",
            passwordRules: [
                v => !!v || "Password is required",
                v => v.length >= 4 || "Password must be less than 8 characters"
            ],
            valid: false,
            loginError: false,
            loading: false
        };
    },
    methods: {
        validate() {
            this.valid = this.$refs.form.validate()
            return this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
        submit(e) {
            e.preventDefault()

            // First, validate the form
            if (!this.validate()) {
                return false
            }

            this.valid = false
            this.loginError = false
            this.loading = true

            // Form valid, proceed with authentication
            let email = this.email
            let password = this.password
            
            this.$store
                .dispatch("login", { email, password })
                .then(() => this.$router.push("/dashboard/"))
                .catch(err => {
                    console.log(err)
                    this.valid = true
                    this.loginError = true
                    this.loading = false
                })
        }
    }
}
</script>

<style scoped>
    h2 {
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .forgot {
        margin-top: 15px;
    }
</style>
