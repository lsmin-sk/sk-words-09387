<template>
  <div class="container text-center mt-5 p-2">
    <div class="row text-bg-primary fw-bold p-2 m-2">
      <div class="col">
        <span class="fs-2"> 워즈 클라우드 - 로그인 </span>
      </div>
    </div>
    <div class="form-floating m-2">
      <input type="email" class="form-control" id="floatingInput" placeholder="email">
      <label for="floatingInput">이메일</label>
    </div>
    <div class="form-floating m-2">
      <input type="password" class="form-control" id="floatingInput" placeholder="password">
      <label for="floatingInput">비밀번호</label>
    </div>
    <div class="row mt-4">
      <div class="col d-flex justify-content-end">
        <button type="button" class="btn btn-primary m-2">로그인</button>
        <button type="button" class="btn btn-info m-2">회원가입</button>
      </div>
    </div>
  </div>
</template>
