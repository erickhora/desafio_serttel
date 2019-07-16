<template>
    <div>
        <img class="mr-4" src="../assets/logo-serttel.jpg">
        <b-container id="form-container">
            <b-form @submit="onSubmit">
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
            </b-form>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'SignIn',
    props: ['users'],
    data() {
        return {
            form: {
                email: '',
                senha: ''
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

</style>
