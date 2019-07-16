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
                <b-form-input class="mt-4" size="lg" v-model="text" placeholder="Digite o id do usuário"></b-form-input>
            </b-container>
        </div>
        <div>
            <h5 class="mt-5">Está perdido? Clique abaixo e veja todos os usuários</h5>
            <b-btn>Ver usuários</b-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search'
}
</script>

<style scoped>

</style>
