<template>
    <div>
        <div>
            <b-navbar toggleable="sm" type="dark" variant="success">
                <b-navbar-brand href="#">Desafio Serttel</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="#">Sair</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <div>
            <b-container class="mt-3">
                <h1>Quem você está buscando?</h1>
                <b-form-input class="mt-4" size="lg" v-model="searchInput" placeholder="Digite o id do usuário"></b-form-input>
            </b-container>
        </div>
        <div>
            <h5 class="mt-5">Está perdido? Clique abaixo e veja todos os usuários</h5>
            <b-btn @click="showTable">Ver usuários</b-btn>
            <UserList v-if="show" v-bind:users="users"/>
        </div>
    </div>
</template>

<script>
import UserList from './UserList';

export default {
    name: 'Search',
    components: {
        UserList,
    },
    props: ['users'],
    data() {
        return {
            show: false,
            searchInput: ''
        }
    },
    methods: {
        showTable() {
            this.show = !this.show;
        }
    }
}
</script>

<style scoped>

</style>
