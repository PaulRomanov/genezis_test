import { createPinia } from "pinia";
import { defineStore } from "pinia";

export const pinia = createPinia();

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    selectedItem: "null",
    entityIds: [],
    items: [
      { id: 1, name: "Сделка" },
      { id: 2, name: "Контакт" },
      { id: 3, name: "Компания" },
    ],
  }),
  getters: {
    isDisabled: (state) => state.selectedItem === "null",
  },
  actions: {
    setSelectedItem(item) {
      this.selectedItem = item;
    },
    addEntityId() {
      if (this.selectedItem !== "null") {
        this.entityIds.push(this.selectedItem);
      }
    },
  },
 
});
