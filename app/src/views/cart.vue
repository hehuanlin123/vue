<template>
  <div class="home">
    <v-header></v-header>
    <v-cartlist ref="cartlist" @open="openModal()"></v-cartlist>
    <v-footer></v-footer>
      <v-modal v-bind:mdShow="showModal" @open="openModal()" @close="closeModal()">
        <template v-slot:message>
          <p>确定要删除此条数据吗?</p>
        </template>
        <div slot="btnGroup">
          <a class="btn btn--m" href="javascript:;" @click="confirm()">确认</a>
          <a class="btn btn--m btn--red" href="javascript:;" @click="showModal=false">关闭</a>
        </div>
      </v-modal>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import CartList from "../components/CartList";
// import axios from 'axios';

export default {
  name: 'Cart',
  props:['mdShow'],
  components: {
    'v-header':Header,
    'v-footer':Footer,
    'v-modal':Modal,
    'v-cartlist':CartList

  },
  data(){
    return {
      showModal:false,
      deleteItem:''
    }
  },
  methods:{
    openModal(item){
      this.showModal = true;
      this.deleteItem = item;
    },
    closeModal(){
      this.showModal = false;
    },
    confirm(){
      this.closeModal();
      this.$refs.cartlist.delConfirm(this.deleteItem)
    },
    close(){
      this.closeModal();
    }
  },
  mounted() {

  }
}
</script>
