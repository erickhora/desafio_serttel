<template>
    <div>
        <div>
            <b-navbar toggleable="sm" type="dark" variant="success">
                <b-navbar-brand href="#">Desafio Serttel</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto" v-if="auth=='loggedin'">
                        <b-nav-item href="" v-on:click="logout">Sair</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <div>
            <b-container>
                <h3>Seus dados:</h3>
                <h5>id: {{ id }}</h5>
                <h5>Nome: {{ nome }}</h5>
                <h5>Email: {{ email }}</h5>
                <h5>Telefone: ({{ telefone.ddd }}) {{ telefone.numero }}</h5>
            </b-container>
        </div>
        <div>
            <b-container class="mt-3">
                <b-form @submit="search(searchInput)">
                    <h1>Quem você está buscando?</h1>
                    <b-form-input class="mt-4" size="lg" v-model="searchInput" placeholder="Digite o id do usuário" required></b-form-input>
                    <b-button type="submit" variant="primary">Buscar</b-button>
                </b-form>
            </b-container>
        </div>
        <div>
            <b-container>
                <h3>Resultado da pesquisa</h3>
                <h5>id: {{ searchId }}</h5>
                <h5>Nome: {{ searchNome }}</h5>
                <h5>Email: {{ searchEmail }}</h5>
                <h5>Telefone: ({{ searchDdd }}) {{ searchNumero }}</h5>
            </b-container>
        </div>
    </div>
</template>

<script>
// import EventBus from './EventBus'
import jwtDecode from 'jwt-decode'
import axios from 'axios'


// EventBus.$on('logged-in', test => {
//     console.log(test);
// })

export default {
    name: 'Search',
    data() {
        const token = localStorage.usertoken
        const decoded = jwtDecode(token)
        return {
            auth: '',
            user: '',
            searchInput: '',
            
            id: decoded._id,
            nome: decoded.nome,
            email: decoded.email,
            telefone: decoded.telefones,
            
            searchId: '',
            searchNome: '',
            searchEmail: '',
            searchDdd: '',
            searchNumero: ''

        }
    },
    methods: {
        logout(){
            localStorage.removeItem('usertoken')
        },
        search(searchInput){
            axios.get('http://localhost:3000/users/' + searchInput)
                .then(res => {
                    this.searchId = res.data.user._id,
                    this.searchNome = res.data.user.nome,
                    this.searchEmail = res.data.user.email,
                    this.searchDdd = res.data.user.telefones[0].ddd,
                    this.searchNumero = res.data.user.telefones[0].numero
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },

    // mounted() {
    //     EventBus.$on('logged-in', status => {
    //         this.auth = status;
    //     })
    // }
}
</script>

<style scoped>

</style>
