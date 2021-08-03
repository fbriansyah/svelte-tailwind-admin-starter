<script>
  import { sideBarSlide } from "../../lib/transition";
  import { activeMenu, menus } from "../../stores/menu";
  import SidebarItem from "./SidebarItem.svelte";

  export let isOpen = true;

  function onMenuClick(menu) {
    activeMenu.selectMenu(menu);
  }
</script>

{#if isOpen}
  <div
    class="hidden bg-indigo-700 md:flex md:flex-shrink-0"
    transition:sideBarSlide|local
  >
    <div class="flex flex-col w-64">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
            alt="Workflow"
          />
        </div>
        <div class="mt-5 flex-1 flex flex-col">
          <nav class="flex-1 px-2 space-y-1">
            {#each menus as menu (`sidemenu-${menu.id}`)}
              <SidebarItem {menu} on:click={() => onMenuClick(menu)} />
            {/each}
          </nav>
        </div>
      </div>
    </div>
  </div>
{/if}
