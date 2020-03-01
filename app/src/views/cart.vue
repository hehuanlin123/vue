<template>
  <div class="home">
    <v-header></v-header>
    <v-cartlist></v-cartlist>
    <v-footer></v-footer>
    <v-modal></v-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import CartList from "../components/CartList";

export default {
  name: 'Cart',
  components: {
    'v-header':Header,
    'v-footer':Footer,
    'v-modal':Modal,
    'v-cartlist':CartList

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
