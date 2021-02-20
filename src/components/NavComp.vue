<template>
  <div>
    <v-app-bar color="blue-grey darken-4" dark>
      <v-container>
        <v-row>
          <v-btn text><v-icon class="mr-1">mdi-kodi</v-icon>Company</v-btn>
          <v-btn text to="/home"><v-icon class="mr-1">mdi-home</v-icon>Home</v-btn>
          <v-btn text to="/seller"><v-icon class="mr-1">mdi-account-multiple</v-icon>Vendedores</v-btn>
          <v-btn text ><v-icon class="mr-1">mdi-clipboard-text</v-icon>Pedidos</v-btn>
          <v-spacer></v-spacer>
          <v-btn text >Perfil<v-icon>mdi-account-box</v-icon></v-btn>
          <v-btn text @click="logout">SALIR<v-icon>mdi-exit-to-app</v-icon></v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
methods:{
  ...mapActions(['logout'])
}
}
</script>

<style>

</style>