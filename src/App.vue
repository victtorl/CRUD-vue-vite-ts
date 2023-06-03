

<template>
  <div class="flex flex-col justify-star items-center mt-10">
    <ViewCrud/>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import ViewCrud from './components/crud/ViewCrud.vue';

const name=ref('')
const price=ref(null)

</script>