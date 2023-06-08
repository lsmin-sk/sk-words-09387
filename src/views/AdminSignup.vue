<template>
    <div class="container">
      <h2>워즈 클라우드 회원가입</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="name" class="form-label">이름</label>
          <input type="text" class="form-control" id="name" v-model="name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">이메일</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="password" class="form-label">비밀번호</label>
            <input type="password" class="form-control" id="password" v-model="password" required>
          </div>
          <div class="col">
            <label for="confirmPassword" class="form-label">비밀번호 확인</label>
            <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <p>이미 계정이 있나요? <a href="#">로그인</a></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      submitForm() {
        // Add your signup logic here
        console.log('Name:', this.name);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        console.log('Confirm Password:', this.confirmPassword);
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
  