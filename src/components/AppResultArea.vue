<template>
  <div class="result-area">
    <ul>
      <li v-for="id in entityIds" :key="id">{{ id }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    entityIds: Array,
  },
};
</script>

<style scoped>

</style>
