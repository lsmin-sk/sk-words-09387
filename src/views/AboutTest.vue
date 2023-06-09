<template>
    <div class="container">
        <div class="mb-3">
            <label for="titleInput" class="form-label">Modal Title</label>
            <input type="text" class="form-control" id="titleInput" v-model="modalTitle">
        </div>
        <div class="mb-3">
            <label for="messageInput" class="form-label">Modal Message</label>
            <input type="text" class="form-control" id="messageInput" v-model="modalMessage">
        </div>
        <button @click="openModal" class="btn btn-primary me-2">Open Modal</button>
        <MessagePopup />
    </div>
</template>
  
<script>
import MessagePopup from '@/components/MessagePopup.vue';

export default {
    components: {
        MessagePopup,
    },
    data() {
        return {
            showModal: false,
            modalTitle: '제목',
            modalMessage: '메시지',
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        onCancel() {
            console.log('Cancel clicked');
            this.showModal = false;
        },
        onConfirm() {
            console.log('Confirm clicked');
            this.showModal = false;
        }
    },
};
</script>
