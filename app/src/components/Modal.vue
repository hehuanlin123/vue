<template>
    <div class="root">
        <div>
            <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':mdShow}">
                <div class="md-modal-inner">
                    <div class="md-top">
                        <button class="md-close" @click="close()">关闭</button>
                    </div>
                    <div class="md-content">
                        <div class="confirm-tips">
                            <slot name="message"></slot>
                        </div>
                        <div class="btn-wrap">
                            <slot name="btnGroup"></slot>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md-overlay" v-if="mdShow" @click="close()"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-modal",
        props:{
          'mdShow':Boolean
        },
        components: {

        },
        data(){
            return {

            }
        },
        methods:{
            close(){
                this.$emit('close')
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>