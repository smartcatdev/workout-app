<template>
    <v-form model="valid" ref="form" lazy-validation="">
        <h2>Sign up today.</h2>
        <p>Just set up your account credentials, and we'll create an account for your company in a minute.</p>
            
        <v-alert
            v-if="registrationError"
            dense
            outlined
            type="error">
            There was an error creating your account. Please check your info and try again.
        </v-alert>
            
        <v-text-field
            v-model="fname"
            label="First Name"
            :rules="fnameRules"
            required>
        </v-text-field>

        <v-text-field
            v-model="lname"
            label="Last Name"
            :rules="lnameRules"
            required>
        </v-text-field>

        <v-text-field
            v-model="email"
            label="Email Address"
            :rules="emailRules"
            @keyup="validate"
            >
        </v-text-field>
            
        <v-text-field
            v-model="password"
            :rules="passwordRules"
            :type="'password'"
            label="Password"
            @keyup="validate"
            >
        </v-text-field>
        
        <div class="submit">
            <v-btn 
                :disabled="!valid" 
                color="primary" 
                @click="submit"
                :loading="loading"
                >Sign up
            </v-btn>
        </div>

    </v-form>
</template>

<script>

    import * as validate from '../../functions/validation'

    export default {
        name: "RegistrationForm",
        data() {
            return {
                fname: '',
                fnameRules: [
                    v => !!v || "First name is required",
                ],
                lname: '',
                lnameRules: [
                    v => !!v || "First name is required",
                ],
                email: '',
                emailRules: [
                    v => !!v || "E-mail is required",
                    v => /.+@.+/.test(v) || "E-mail must be valid"
                ],
                password: '',
                passwordRules: [
                    v => !!v || "Password is required",
                    v => v.length >= 4 || "Password must be less than 8 characters"
                ],
                valid: false,
                registrationError: false,
                loading: false
            }
        },
        created() {},
        methods: {
            validate() {
                this.valid = this.$refs.form.validate()
                return this.$refs.form.validate()
            },
            submit(e) {

                e.preventDefault()

                if (!this.validate()) {
                    return false
                }
                this.loading = true
                this.valid = false
                this.registrationError = false

                this.$store.dispatch('register', this.$data)
                    .then(() => this.$store.dispatch('login', this.$data))
                    .then(() => this.$router.push({name: 'dashboard'}))
                    .catch(() => this.$data.loading = false)
            },
        },
    }
</script>

<style scoped>

</style>