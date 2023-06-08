<template>
    <div class="container my-4">
      <div v-if="!isQuestionPosted">
        <h2 class="mb-4">질문 목록</h2>
        <table class="table">
          <thead>
            <tr>
              <th>작성일</th>
              <th>제목</th>
              <th>응답수</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="question in questions" :key="question.id">
              <td>{{ question.date }}</td>
              <td>{{ question.title }}</td>
              <td>{{ question.responseCounts }}</td>
            </tr>
          </tbody>
        </table>
  
        <div v-if="!isPosting">
          <button class="btn btn-primary" @click="togglePosting">신규 질문</button>
        </div>
      </div>

      <div v-if="isPosting && !isQuestionPosted" class="mt-4">
        <h2 class="mb-4">새로운 질문</h2>
        <form @submit.prevent="postQuestion">
          <div class="mb-3">
            <label for="questionTitle" class="form-label">제목</label>
            <input type="text" class="form-control" id="questionTitle" v-model="newQuestion.title">
          </div>
          <div class="mb-3">
            <label for="questionDetails" class="form-label">내용</label>
            <textarea class="form-control" id="questionDetails" rows="3" v-model="newQuestion.details"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
  
      <div v-if="isQuestionPosted" class="mt-4">
        <h2 class="mb-4">QR Code로 응답해 주세요.</h2>
        <img :src="questionQRCodeUrl" alt="Question QR Code">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        questions: [
          {
            id: 1,
            date: '2023-06-01',
            title: 'Example Question 1',
            responseCounts: 3
          },
          {
            id: 2,
            date: '2023-06-02',
            title: 'Example Question 2',
            responseCounts: 5
          },
          // Add more example questions here
        ],
        newQuestion: {
          title: '',
          details: ''
        },
        isPosting: false,
        isQuestionPosted: false,
        questionQRCodeUrl: ''
      };
    },
    methods: {
      togglePosting() {
        this.isPosting = !this.isPosting;
      },
      async postQuestion() {
        // Here you would typically send the new question to a server and get the question URL in response
        // For now, let's assume the server returns the URL as "https://example.com/question/123"
        const questionId = 123;
        const questionURL = `https://example.com/question/${questionId}`;
  
        try {
          this.questionQRCodeUrl = await this.generateQRCode(questionURL);
          this.isQuestionPosted = true;
        } catch (error) {
          console.error('Failed to generate QR code:', error);
          // Handle error condition
        }
      },
      generateQRCode(data) {
        const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}`;
        return qrCodeApiUrl;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  </style>
  