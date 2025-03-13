<template>
    <a :href="lien" target="_blank">
      <button class="btn">{{ texte }}</button>
    </a>
  </template>
  
  <script>
  export default {
    props: {
      texte: {
        type: String,
        required: true
      },
      lien: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .btn {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  