<template>
  <div>
    <nav-comp></nav-comp>
    <v-container>
      <tabs-seller></tabs-seller>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
import NavComp from "@/components/NavComp";
import TabsSeller from '../components/TabsSeller.vue';

export default {
  name: "Home",
  components: {
    NavComp,
    TabsSeller
  },
  created() {
    this.getSellers(this.$route.params.id);
  },
};
</script>
