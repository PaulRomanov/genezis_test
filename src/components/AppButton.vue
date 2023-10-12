<template>
  
    <button :class="{ active: selectedItem !== 'null' }" @click="handleCreate" :disabled="isDisabled">{{ label }}</button>

</template>

<script>
export default {
  emits: ['button-click'],
  props: {
    label: String,
    selectedItem: String,
  },
  data() {
    return {
      isDisabled: true,
    };
  },
  watch: {
    selectedItem() {
      this.isDisabled = this.selectedItem === 'null';
    },
  },
  methods: {
    handleCreate() {
      this.$emit('button-click');
    },
  },

};
</script>

<style scoped>
.active {
  background-color: rgb(93, 134, 245);
}
</style>
