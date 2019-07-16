<template>
    <div>
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
                    <template slot="gerenciar" slot-scope="data">
                        <b-button size="sm" v-b-modal.modal-1 class="mr-2">
                            Informações
                        </b-button>
                        <b-button size="sm" @click="$emit('del-user', data.index)" class="mr-2">
                            Excluir
                        </b-button>
                    </template>
                </b-table>
            </b-container>
            <b-modal id="modal-1" title="Editar">
                {{ users }}
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
