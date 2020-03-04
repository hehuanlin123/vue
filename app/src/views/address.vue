<template>
  <div class="home">
    <v-header></v-header>
    <v-addresslist ref="addresslist" @open="openModal()"></v-addresslist>
    <v-modal v-bind:mdShow="showModal" @open="openModal()" @close="closeModal()">
      <template v-slot:message>
        <p>确定要删除此条数据吗?</p>
      </template>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="confirm()">确认</a>
        <a class="btn btn--m btn--red" href="javascript:;" @click="showModal=false">关闭</a>
      </div>
    </v-modal>
    <v-footer></v-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddressList from "../components/AddressList";
import Modal from "../components/Modal";


export default {
  name: 'Adress',
  props:['mdShow'],
  components: {
    'v-header':Header,
    'v-footer':Footer,
    'v-modal':Modal,
    'v-addresslist':AddressList
  },
  data(){
    return {
      showModal:false,
      deleteItem:'',
      addressList:''
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
      this.$refs.addresslist.delConfirm(this.deleteItem)
    },
    close(){
      this.closeModal();
    }
  },
  mounted() {

  }
}
</script>
