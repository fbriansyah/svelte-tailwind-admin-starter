import { writable } from "svelte/store";
import { setActiveMenu } from "../lib/localstorage";

export const menus = [
  {
    id: 1,
    name: "Dashboard",
    icon: "home",
  },
  {
    id: 2,
    name: "User",
    icon: "users",
  },
  {
    id: 3,
    name: "Obat",
    icon: "capsules",
  },
]

const createActiveMenuStore = () => {
  const { subscribe, set } = writable({
    id: 1,
    name: "Dashboard",
    icon: "home",
  });

  const selectMenu = (menu) => {
    if (menu) {
      set({ ...menu });
      setActiveMenu(menu)
    }
  };

  return {
    subscribe,
    selectMenu,
  };
}

export const activeMenu = createActiveMenuStore();