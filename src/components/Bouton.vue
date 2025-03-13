<!--
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
-->
<template>
  <a v-if="lien" :href="lien" target="_blank" class="btn">
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  lien: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 8px 12px;
  background: #2980b9;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: background 0.3s;
}

.btn:hover {
  background: #1a66a3;
}
</style>
