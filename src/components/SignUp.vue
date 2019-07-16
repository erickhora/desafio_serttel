<template>
    <div id="body">
        <img class="mr-4" src="../assets/logo-serttel.jpg">
        <b-container id="form-container">
            <b-form @submit="onSubmit">
                <b-form-group
                id="form-group-nome"
                label="Nome:"
                label-for="nome"
                >
                    <b-form-input
                    id="nome"
                    v-model="form.nome"
                    type="text"
                    required
                    placeholder="Digite seu nome:"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                id="form-group-email"
                label="Email:"
                label-for="email"
                description="Não compartilharemos seu email com ninguém."
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
                    placeholder="Digite uma senha"
                    ></b-form-input>
                    <b-form-text id="password-help-block">
                        Sua senha deve conter no mínimo 6 caracteres.
                    </b-form-text>
                </b-form-group>
                <b-form-group
                id="form-group-telefone"
                label="Telefone:"
                label-for="telefone"
                description="Não compartilharemos seu telefone com ninguém."
                >
                    <b-form-group
                    id="form-group-telefone-ddd"
                    label="DDD:"
                    label-for="ddd"
                    >
                        <b-form-input
                        id="ddd"
                        v-model="form.telefones.ddd"
                        type="number"
                        required
                        placeholder="(XX)"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                    id="form-group-telefone-numero"
                    label="Número:"
                    label-for="numero"
                    >
                        <b-form-input
                        id="numero"
                        v-model="form.telefones.numero"
                        type="number"
                        required
                        placeholder="X XXXX-XXXX"
                        ></b-form-input>
                    </b-form-group>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
            <a href="#">Já sou cadastrado.</a>
        </b-container>
    </div>    
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            form: {
                nome: '',
                email: '',
                senha: '',
                telefones: {
                    ddd: '',
                    numero: ''
                }
            }
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        },
    }
}
</script>

<style scoped>
    #body {
        margin: auto;
        height: 50%;
        width: 33%;
    }

    #form-container {
        background-color: white;
    }
</style>

