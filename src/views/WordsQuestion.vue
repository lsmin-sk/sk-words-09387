<template>
    <div class="container mt-5">
        <h3 id="overview">질문 목록</h3>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">일자</th>
                    <th scope="col">제목</th>
                    <th scope="col">응답(수)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>2023-06-01</td>
                    <td class="text-truncate" style="max-width: 200px;">인상 깊게 본 영화의 제목을 적어주세요</td>
                    <td>34</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>2023-06-06</td>
                    <td class="text-truncate" style="max-width: 200px;">현충일에 떠오르는 단어는?</td>
                    <td>27</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>2023-07-18</td>
                    <td class="text-truncate" style="max-width: 200px;">가고 싶은 해외 여행지는 어디 입니까? 도시를 적어주세요.</td>
                    <td>58</td>
                </tr>
            </tbody>
        </table>
        <div class="row m-0 mt-5">
            <div class="col p-0 pe-1">
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingInput" placeholder="password">
                    <label for="floatingInput">새로운 질문</label>
                </div>
            </div>
            <div class="col p-0 ps-1">
                <button type="button" class="btn btn-primary m-2">설문시작</button>
            </div>
        </div>
        //설문시작 버튼을 누르면 이 영역은 보이지 않고 QR코드와 설문종료 버튼이 보입니다.
    </div>
    <hr>
    <div class="container  mt-5">
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-primary">설문종료</button>
            </div>
            <div class="col-10 border text-center">
                <img src="/qrcode.png" class="img-fluid">
            </div>
        </div>
        //설문종료 버튼을 누르면 이 영역은 보이지 않고 질문 목록과 설문시작 항목이 보입니다.
    </div>
</template>
