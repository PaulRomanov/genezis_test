<template>
  <button :class="{ active: !disabled }" @click="handleCreate" :disabled="disabled">{{ label }}</button>
</template>


<script>
import { useAppStore } from '@/store/store';
import { computed } from 'vue';

export default {
  emits: ['button-click'],
  props: {
    label: String,
  },
  setup(props, { emit }) {
    const store = useAppStore();

    const disabled = computed(() => store.isDisabled);

    const handleCreate = () => {
      emit('button-click');
      
    };
   
    return {
      selectedItem: store.selectedItem,
      disabled,
      handleCreate,
    };
  },
};

</script>

<style scoped>
.active {
  background-color: rgb(93, 134, 245);
}
</style>
