<template>
    <div class="container">
        <div class="mb-3">
            <label for="titleInput" class="form-label">제목</label>
            <input type="text" class="form-control" id="titleInput" v-model="modalTitle">
        </div>
        <div class="mb-3">
            <label for="messageInput" class="form-label">메시지</label>
            <input type="text" class="form-control" id="messageInput" v-model="modalMessage">
        </div>
        <button @click="openModal" class="btn btn-primary me-2">팝업창</button>
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
            modalTitle: '제목',
            modalMessage: '메시지',
        };
    },
    methods: {
        openModal() {
            console.log('openModal');
        },
    },
};
</script>
