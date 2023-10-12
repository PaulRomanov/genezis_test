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

export default {
  components: {
    AppDropdown,
    AppButton,
    AppResultArea,
  },
  data() {
    return {
      items: [
        { id: 1, name: "Сделка" },
        { id: 2, name: "Контакт" },
        { id: 3, name: "Компания" },
      ],
      selectedItem: "null",
      entityIds: [],
    };
  },
  methods: {
    handleSelectedItem(item) {
      this.selectedItem = item;
    },
    handleAddId() {
      if (this.selectedItem !== "null") {
        this.entityIds.push(this.selectedItem);
      }
    },
  },
};
</script>
