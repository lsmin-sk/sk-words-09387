<template>
    <div class="container text-center mt-5 p-2">
        <div class="row text-bg-info fw-bold p-2 m-2">
            <div class="col">
                <span class="fs-2"> 워즈 클라우드 - 회원가입 </span>
            </div>
        </div>
        <div class="form-floating m-2">
            <input type="email" class="form-control" id="floatingInput" placeholder="name">
            <label for="floatingInput">이름</label>
        </div>
        <div class="form-floating m-2">
            <input type="email" class="form-control" id="floatingInput" placeholder="email">
            <label for="floatingInput">이메일</label>
        </div>
        <div class="row m-2">
            <div class="col p-0 pe-1">
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingInput" placeholder="password">
                    <label for="floatingInput">비밀번호</label>
                </div>
            </div>
            <div class="col p-0 ps-1">
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingInput" placeholder="password">
                    <label for="floatingInput">비밀번호 재입력</label>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col d-flex justify-content-end">
                <button type="button" class="btn btn-info m-2">회원가입</button>
            </div>
        </div>
    </div>
</template>
  