<template>
    <div class="container my-4">
      <h2 class="mb-4">질문: {{ question }}</h2>
  
      <div class="row">
        <div class="col-12">
          <input type="text" class="form-control mb-3" v-model="response">
        </div>
        <div class="col-12">
          <button type="button" class="btn btn-primary btn-block" @click="submitResponse">Submit</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        question: '가장 좋아하는 프로그래밍 언어는?',
        response: ''
      };
    },
    methods: {
      submitResponse() {
        // Here you can handle the response submission logic
        console.log('Response submitted:', this.response);
        // You can make an API call or perform any other necessary operations here
        // For simplicity, we are just logging the response to the console in this example
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>
  