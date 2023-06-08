<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 text-center">
          <h2 class="text-danger">서비스 에러</h2>
          <p class="text-muted">요청한 정보를 제공할 수 없습니다.</p>
          <p class="text-muted">입력 정보를 확인하세요.</p>
          <button class="btn btn-primary mt-3" @click="goBack">Go Back</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goBack() {
        // Add your logic to navigate back
        // Example: this.$router.go(-1);
      }
    }
  };
  </script>
  
  <style>
  .container {
    padding-top: 100px;
  }
  </style>
  