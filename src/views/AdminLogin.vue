<template>
  <div class="container">
    <h2>워즈 클라우드 로그인</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="email" class="form-label">이메일</label>
        <input type="email" class="form-control" id="email" v-model="admin.email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">비밀번호</label>
        <input type="password" class="form-control" id="password" v-model="admin.password" required>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Submit</button>
    </form>
    <p>계정이 없으신가요? <a href="/admin/signup">회원가입</a></p>
  </div>
</template>

<script>
import firebaseAuth from '@/states/firebase-auth';
export default {
  data() {
    return {
      admin: { 
        email: '', 
        password: '' 
      },
    };
  },
  methods: {
    submitForm() {
      firebaseAuth.login(this.admin, this.onSuccess, this.onError);
    },
    onSuccess(user) {
      console.log('onSuccess:', user);
    },
    onError(error) {
      console.log('onError:', error);
    },
  }
};
</script>

<style>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding-top: 50px;
}
</style>
