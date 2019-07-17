<template>
    <div id="body">
        <img class="mr-4" src="../assets/logo-serttel.jpg">
        <b-container id="form-container">
            <b-alert variant="danger" v-if="gotError">{{ message }}</b-alert>
            <b-form @submit="login">
                <b-form-group
                id="form-group-email"
                label="Email:"
                label-for="email"
                >
                    <b-form-input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Digite seu email:"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                id="form-group-senha"
                label="Senha:"
                label-for="senha"
                >
                    <b-form-input
                    id="senha"
                    v-model="form.senha"
                    type="password"
                    required
                    placeholder="Digite seu senha:"
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">
                    Entrar
                </b-button>
            </b-form>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
// import EventBus from './EventBus'

export default {
    name: 'SignIn',
    data() {
        return {
            gotError: false,
            message: '',
            form: {
                email: '',
                senha: ''
            }
        }
    },
    methods: {
        login() {
            axios.post('http://localhost:3000/users/login', {
                email: this.form.email,
                senha: this.form.senha
            }).then(res => {
                localStorage.setItem('usertoken', res.data)
                this.form.email = ''
                this.form.senha = ''
                router.push({ name: 'search' })
            }).catch(err => {
                console.log(err)
                router.push(router.currentRoute)
                gotError = true;
                message = err
            })
            // this.emitMethod()
        },

        // emitMethod() {
        //     EventBus.$emit('logged-in', 'loggedin')
        // }
    }
}
</script>

<style scoped>
    #body {
        margin: auto;
        height: 50%;
        width: 33%;
    }
</style>
