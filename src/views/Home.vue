<template>
  <div class="home">
    <nav-comp></nav-comp>
    <v-container>
      <v-container class="fill-height" fluid>
        <p>Home</p>
        <v-fade-transition mode="out-in">
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-img height="250" class="grey darken-4" color="gray"></v-img>
                <v-card-title class="title">Bienvenido</v-card-title>
                <p class="ml-5 pb-5">
                  Bienvenido al sistema de Gestión de Ventas de WorldParts
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-fade-transition>
      </v-container>

        <kpi-sales></kpi-sales>
        <ranking></ranking>
        
    </v-container>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavComp from "@/components/NavComp";
import KpiSales from "@/components/KpiSales";
import Ranking from "@/components/Ranking";
import FooterComp from "@/components/FooterComp";


export default {
  name: "Home",
  components: {
    NavComp,
    KpiSales,
    Ranking,
    FooterComp

  },
};
</script>
