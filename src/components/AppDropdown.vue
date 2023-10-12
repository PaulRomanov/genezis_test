<template>
  <div class="dropdown">
    <select :value="selectedItem" @change="emitSelectedItem">
      <option value="null">Не выбрано</option>
      <option v-for="item in items" :key="item.id" :value="item.id.toString()">{{ item.name }}</option>
    </select>
  </div>
</template>

<script>
import { useAppStore } from '@/store/store';

export default {
  emits: ['selected-item'],
  props: {
    items: Array,
  },
  setup(props, { emit }) {
    const store = useAppStore();

    const emitSelectedItem = (event) => {
      
      store.setSelectedItem(event.target.value);
      emit('selected-item', event.target.value);

    };

    return {
      selectedItem: store.selectedItem,
      isDisabled: store.isDisabled,
      emitSelectedItem,
    };
  },
};
</script>
