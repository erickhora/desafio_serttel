<template>
  <div id="app">
    <SignUp v-bind:add-user="addUser"/>
    <!-- <SignIn v-bind:users="users"/> -->
    <!-- <Search v-bind:users="users" v-on:del-user="deleteUser" /> -->
    <!-- <UserList v-bind:users="users"/> -->
  </div>
</template>

<script>
import SignUp from '../components/SignUp';
// import SignIn from '../components/SignIn';
// import UserList from '../components/UserList';
// import Search from '../components/Search';

export default {
  name: 'home',
  components: {
    SignUp,
    // SignIn,
    // UserList,
    // Search
  },
  data() {
    return {
      users: [
        {
          nome: 'Erick',
          email: 'erick@test.com',
          senha: '123456',
          telefones: {
            numero: 818751526,
            ddd: 73
          }
        },
        {
          nome: 'Nicolas',
          email: 'nicolas@test.com',
          senha: '1234!!',
          telefones: {
            numero: 817515412,
            ddd: 87
          }
        },{
          nome: 'Hora',
          email: 'hora@test.com',
          senha: 'senha123',
          telefones: {
            numero: 71526222,
            ddd: 26

          }
        },
      ]
    }
  },
  methods: {
    deleteUser(id) {
      this.users = this.users.filter(user => user.id !== id);
    },
    addUser(newUser){
      this.users = [...this.users, newUser];
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
