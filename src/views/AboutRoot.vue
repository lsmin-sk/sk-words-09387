<template>
    <div class="container mt-5 p-2 border">
        <h2 id="overview">서비스 소개</h2>
        <p>
            워드 클라우드란 문서의 키워드, 개념 등을 직관적으로 파악할 수 있도록 핵심 단어를 시각화 하는 기법입니다.
            많이 언급되는 단어를 크게 표현해 한눈에 들어올 수 있게 하는 것입니다.
            주로 빅데이터를 분석할 때 데이터의 특징을 도출하기 위해 활용됩니다
        </p>
        <p>
            워드 클라우드 웹 서비스는 다음의 순서로 사용할 수 있습니다.
        </p>
        <ol>
            <li>서비스를 관리하기 위해서는 회원가입이 필요합니다.</li>
            <li>관리자 로그인 후 질문을 생성합니다.</li>
            <li>설문시작 버튼을 누르면 사용자가 응답할 수 있는 사이트 안내를 위한 QR 코드가 생성됩니다.</li>
            <li>응답자는 QR 코드를 통해 이동한 페이지에서 질문에 관련된 단어를 입력합니다.</li>
            <li>설문종료 버튼을 누르면 사용자가 응답한 단어들에 대해 워드 클라우드 맵을 보여줍니다.</li>
        </ol>
    </div>
    <div class="container d-flex justify-content-center mt-5">
        <button type="button" class="btn btn-primary m-2">로그인</button>
        <button type="button" class="btn btn-secondary m-2">회원가입</button>
    </div>
</template>
