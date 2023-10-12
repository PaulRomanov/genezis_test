<template>
  <div class="dropdown">
    <select v-model="selectedItem" @change="emitSelectedItem">
      <option value="null">Не выбрано</option>
      <option v-for="item in items" :key="item.id" :value="item.id.toString()">{{ item.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  emits: ['selected-item'],
  props: {
    items: Array,
  },
  data() {
    return {
      selectedItem: 'null',
    };
  },
  methods: {
    emitSelectedItem() {
      this.$emit('selected-item', this.selectedItem);
    },
  },
};
</script>

<style scoped>

</style>
