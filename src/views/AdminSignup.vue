<template>
    <div class="container">
      <h2>워즈 클라우드 회원가입</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="name" class="form-label">이름</label>
          <input type="text" class="form-control" id="name" v-model="admin.name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">이메일</label>
          <input type="email" class="form-control" id="email" v-model="admin.email" required>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="password" class="form-label">비밀번호</label>
            <input type="password" class="form-control" id="password" v-model="admin.password" required>
          </div>
          <div class="col">
            <label for="confirmPassword" class="form-label">비밀번호 확인</label>
            <input type="password" class="form-control" id="confirmPassword" v-model="admin.confirmPassword" required>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Submit</button>
      </form>
      <p>이미 계정이 있나요? <a href="/admin/login">로그인</a></p>
    </div>
  </template>
  
  <script>
  import firebaseAuth from '@/states/firebase-auth';
  import firebaseDb from '@/states/firebase-db';

  export default {
    data() {
      return {
        admin: {
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        },
      };
    },
    methods: {
      submitForm() {
        firebaseAuth.signUp(this.admin, this.onSuccess, this.onError);
      },
      onSuccess(user) {
        // this.admin의 password 보이지 않도록 객체 새로 생성
        const admin = {
          id: user.uid,
          name: this.admin.name,
          email: this.admin.email
        }
        firebaseDb.postAdmin(admin, (error)=> {
          if(error === null) { // 로그인 페이지로 이동
            this.$router.push("/admin/login");
          }
          else {
            console.log('회원가입 실패 error=' + error);
          }
        });
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
  