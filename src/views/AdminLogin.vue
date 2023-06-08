<template>
  <div class="container">
    <h2>워즈 클라우드 로그인</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="email" class="form-label">이메일</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">비밀번호</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <p>계정이 없으신가요? <a href="#">회원가입</a></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      // Add your login logic here
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
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
