<template>
  <div>
    <AppDropdown :items="items" @selected-item="handleSelectedItem"></AppDropdown>
    <AppButton
      :label="selectedItem === 'null' ? 'Создать' : 'Сохранить'"
      :selectedItem="selectedItem"
      @button-click="handleAddId"
    ></AppButton>
    <AppResultArea :entityIds="entityIds"></AppResultArea>
  </div>
</template>

<script>
import AppDropdown from "@/components/AppDropdown.vue";
import AppButton from "@/components/AppButton.vue";
import AppResultArea from "@/components/AppResultArea.vue";
import { useAppStore } from '@/store/store';

export default {
  components: {
    AppDropdown,
    AppButton,
    AppResultArea,
  },
  setup() {
    const store = useAppStore();

    const handleSelectedItem = (item) => {
      store.setSelectedItem(item);
    };

    const handleAddId = () => {
      store.addEntityId();
    };

    return {
      items: store.items,
      selectedItem: store.selectedItem,
      entityIds: store.entityIds,
      handleSelectedItem,
      handleAddId,
    };
  },
};
</script>
