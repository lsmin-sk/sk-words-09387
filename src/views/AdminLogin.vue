<template>
    <div class="container text-center mt-5 p-2">
      <div class="row text-bg-primary fw-bold p-2 m-2">
        <div class="col">
          <span class="fs-2"> 워즈 클라우드 서비스 </span>
        </div>
      </div>    
      <div class="container mt-5 d-flex">
        <div class="input-group mb-1">
          <span class="d-flex justify-content-end input-group-text w-fix">이메일</span>
          <input type="email" class="form-control" >
        </div>
      </div>
      <div class="container mt-2 d-flex">
        <div class="input-group mb-1">
          <span class="d-flex justify-content-end input-group-text w-fix"> 비밀번호 </span>
          <input type="password" class="form-control" >
        </div>
      </div>
      <div class="row mt-5">
        <div class="col d-flex justify-content-end">
          <button type="button" class="btn btn-primary m-2" >로그인</button>
          <button type="button" class="btn btn-outline-secondary m-2" >회원가입</button>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .w-fix{
    width: 110px;
  }
  </style>