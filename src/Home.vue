<script>
import { useQueryParams } from './useQueryParams';
import { ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    const newQueryParam = ref('');
    const { test, addTestParam } = useQueryParams();

    return {
      test,
      addTestParam,
      newQueryParam,
    };
  },
};
</script>

<template>
  <input type="text" v-model="newQueryParam" />
  <button @click="addTestParam(newQueryParam)">add query param</button>
  <ul>
    <li v-for="(t, i) in test" :key="i">{{ t }}</li>
  </ul>
</template>
