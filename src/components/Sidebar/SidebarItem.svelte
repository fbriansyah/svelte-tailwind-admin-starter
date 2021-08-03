<script>
  import { activeMenu } from "../../stores/menu";

  export let menu;
</script>

{#if menu}
  <span
    on:click
    class="{$activeMenu.id === menu.id
      ? 'bg-indigo-800 text-white'
      : 'text-indigo-100 hover:bg-indigo-600'} group sidebar-item"
  >
    <i
      class="fas fa-{menu.icon} mr-3 flex-shrink-0 inline-block text-indigo-400"
    />
    {menu.name}
  </span>
{/if}

<style lang="postcss">
  .sidebar-item {
    @apply flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer;
  }
</style>
