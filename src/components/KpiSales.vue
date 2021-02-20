<template>
  <section class="mt-6 mb-6 justify-center">
    <v-row>
      <!-- venta mensual -->
        <v-col cols="12" sm="12" md="12" lg="6" xl="6">
          <v-container>
          <div>
            <v-card class="mx-auto" min-width="530">
              <v-card-text>
                <h2 class="text--primary text-center mb-5">Venta Mensual</h2>
                <div class="d-flex justify-space-around">
                  <div class="text-center">
                    <p class="font-weight-black display-1">
                      {{ monthlySalesPercent }} %
                    </p>
                    <v-btn text small class="info--text">ver detalles</v-btn>
                  </div>

                  <div class="text-center">
                    <p class="font-weight-black display-1">
                      {{ kpis.venta_mensual.valor }}
                    </p>
                    <p class="text--primary">Ventas del mes</p>
                  </div>

                  <div class="text-center">
                    <p class="font-weight-black display-1">
                      {{ kpis.venta_mensual.meta }}
                    </p>
                    <p class="text--primary">
                      Meta de ventas <br />
                      del mes
                    </p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </div></v-container>
        </v-col>
        
      


      <!-- venta anual -->
<v-col cols="12" sm="12" md="12" lg="6" xl="6">
      <v-container>
          <div>
            <v-card class="mx-auto" min-width="530">
              <v-card-text>
                <h2 class="text--primary text-center mb-5">Venta Anual</h2>
                <div class="d-flex justify-space-around">
                  <div class="text-center">
                    <p class="font-weight-black display-1">
                      {{ annualSalesPercent }} %
                    </p>
                    <v-btn text small class="info--text text-center"
                      >ver detalles</v-btn
                    >
                  </div>

                  <div class="text-center">
                    <p class="font-weight-black display-1">
                      {{ kpis.venta_anual.valor }}
                    </p>
                    <p class="text--primary">Ventas del Año</p>
                  </div>

                  <div class="text-center">
                    <p class="font-weight-black display-1">
                      {{ kpis.venta_anual.meta }}
                    </p>
                    <p class="text--primary">
                      Meta de ventas <br />
                      del Año
                    </p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </div>
      </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["kpis"]),
    annualSalesPercent() {
      return Math.round(
        (this.kpis.venta_anual.valor / this.kpis.venta_anual.meta) * 100
      );
    },
    monthlySalesPercent() {
      return Math.round(
        (this.kpis.venta_mensual.valor / this.kpis.venta_mensual.meta) * 100
      );
    },
  },
  methods: {
    ...mapActions(["getDasboard"]),
  },
  created() {
    this.getDasboard();
  },
};
</script>

<style>
</style>