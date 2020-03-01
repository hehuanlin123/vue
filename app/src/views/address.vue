<template>
  <div class="home">
    <v-header></v-header>
    <v-addresslist></v-addresslist>
    <v-footer></v-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddressList from "../components/AddressList";

export default {
  name: 'Adress',
  components: {
    'v-header':Header,
    'v-footer':Footer,
    'v-addresslist':AddressList
  },
  data(){
    return {

    }
  },
  methods:{

  },
  mounted() {

  }
}
</script>
