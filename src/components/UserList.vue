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
        <!-- Quando você faz um loop, você precisa de uma chave unica para assegurar o loop.
        v-bind:key. O id foi escolhido pq é único -->
        <!-- <div v-bind:key="user.id" v-for="user in users">
            <h3>{{ user.nome }}</h3>
        </div> -->
        <div>
            <b-container>
                <b-table hover responsive :fields="fields" :items="users">
                    <template slot="table-caption">Clique em um usuário para editar ou excluir.</template>
                    <template slot="telefones" slot-scope="data">
                        ({{ data.value.ddd }}) {{ data.value.numero }}
                    </template>
                    <template slot="gerenciar" slot-scope="row">
                        <b-button size="sm" v-b-modal.modal-1 class="mr-2">
                            Editar
                        </b-button>
                        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                            Excluir
                        </b-button>
                    </template>
                </b-table>
            </b-container>
            <b-modal id="modal-1" title="Editar">
                <b-form-group
                label-cols-sm="3"
                label="Nome:"
                label-align-sm="right"
                label-for="nome"
                >
                    <b-form-input id="nome"></b-form-input>
                </b-form-group>
                <b-form-group
                label-cols-sm="3"
                label="Email:"
                label-align-sm="right"
                label-for="email"
                >
                    <b-form-input id="email"></b-form-input>
                </b-form-group>
                <b-form-group
                label-cols-sm="3"
                label="Senha:"
                label-align-sm="right"
                label-for="senha"
                >
                    <b-form-input id="senha"></b-form-input>
                </b-form-group>
                <b-form-group
                label-cols-sm="3"
                label="Telefone:"
                label-size="md"
                label-align-sm="right"
                label-for="telefone"
                >
                    <b-form-group
                    label-cols-sm="3"
                    label="DDD:"
                    label-align-sm="right"
                    label-for="ddd"
                    >
                        <b-form-input id="ddd"></b-form-input>
                    </b-form-group>
                    <b-form-group
                    label-cols-sm="3"
                    label="Número:"
                    label-align-sm="right"
                    label-for="numero"
                    >
                        <b-form-input id="numero"></b-form-input>
                    </b-form-group>
                </b-form-group>
            </b-modal>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserList',
    props: ['users'],
    data() {
        return {
            fields: [
                'nome',
                'email',
                'senha',
                { key: 'telefones', label: 'Telefone'},
                'gerenciar'
            ]
        }
    }
}
</script>

<style scoped>

</style>
