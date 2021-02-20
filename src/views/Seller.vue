<template>
  <div>
    <nav-comp></nav-comp>
    <v-container>
        <h3 class="mt-5">Monitor de vendedores</h3>
        <v-container>
        <div class="d-flex">
        <v-col cols="12" sm="6">
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
          </v-col>

    <!-- <v-col cols="12" sm="4">
      <v-select
        :items="offices"
        item-text="name"
        item-value="id"
        label="oficinas"
        dense
        outlined
        ></v-select>
      </v-col>
          <v-col cols="12" sm="4">
      <v-select
        :items="managers"
        item-text="nombre"
        item-value="id"
        label="managers"
        dense
        outlined
        ></v-select>
      </v-col>
      <v-col cols="12" sm="4">
      <v-btn color="info">buscar</v-btn>
      </v-col> -->
  </div>
        <v-data-table
          :headers="headers"
          :items="sellers"
          item-key="id_vendedor"
          :search="search"
        >
      
        </v-data-table>
    </v-container>
    </v-container>

  </div>
</template>

<script>
import NavComp from '@/components/NavComp'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    NavComp,

  },
  data(){
    
    return {
      search: '',
        headers: [
        { text: 'ID Vendedor', align: 'start', filterable: true, value: 'id_vendedor', },
        { text: 'Vendedor', filterable: true, value: 'nombre' },
        { text: 'Venta Unidades', filterable: true, value: 'venta_unid' },
        { text: 'Venta Pesos', filterable: true, value: 'venta_pesos' },
        { text: 'Meta Venta', filterable: true, value: 'meta_venta' },
        { text: 'Cumplimiento Venta', filterable: true, value: 'meta_venta' }]
      // headers : ['ID Vendedor', 'Vendedor', 'Venta Unidades', 'Venta Pesos', 'Meta Venta', 'Cumplimiento Venta']
    }
  },
  computed: {
    ...mapState(['offices', 'managers', 'sellers'])
  },
   methods: {
     ...mapActions(['getManagers', 'getOffices', 'getSellers']),
    },
    created() {
      this.getManagers()
      this.getOffices()
      this.getSellers()
    }
}
</script>
