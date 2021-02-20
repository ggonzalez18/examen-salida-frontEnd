<template>
  <v-row>
    <v-col>
    <h3 class="text-center mb-4">Ranking de vendedores</h3>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">ID Vendedor</th>
              <th class="text-left">vendedor</th>
              <th class="text-left">Monto</th>
              <th class="text-left">unidades</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="seller in rankingSellers" :key="seller.id_vendedor">
              <td>{{ seller.id_vendedor }}</td>
              <td>{{ seller.nombre }}</td>
              <td>{{ seller.monto }}</td>
              <td>{{ seller.unidades }}</td>
              <td>
                <v-btn text small color="info" >detalles</v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>

    <v-col>
    <h3 class="text-center mb-4">Ranking de Productos</h3>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">ID Producto</th>
              <th class="text-left">Producto</th>
              <th class="text-left">Unidades</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in rankingProducts" :key="product.cod_producto">
              <td>{{ product.cod_producto}}</td>
              <td>{{ product.producto }}</td>
              <td>{{ product.unidades }}</td>
              <td>
                <v-btn text small color="info">detalles</v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['rankingSellers', 'rankingProducts'])
  },
  methods: {
    ...mapActions(['getDasboard'])
  },
  created() {
    this.getDasboard()
  }
}
</script>

<style>

</style>