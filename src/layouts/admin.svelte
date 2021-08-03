<script>
  import ProfileDropdown from "../components/ProfileDropdown.svelte";
  import Sidebar from "../components/Sidebar/Sidebar.svelte";
  import SidebarMobile from "../components/Sidebar/SidebarMobile.svelte";
  import { activeMenu } from "../stores/menu";

  $: title = $activeMenu.name;
  let isSideBarOpen = true;
  let isMobileSideBarOpen = false;

  const toggleSidebar = () => (isSideBarOpen = !isSideBarOpen);

  function onMenuClick(e) {
    activeMenu.selectMenu(e.detail);
  }
</script>

<div class="h-screen flex overflow-hidden bg-gray-100">
  <SidebarMobile
    isOpen={isMobileSideBarOpen}
    on:close={() => (isMobileSideBarOpen = false)}
    on:click-menu={onMenuClick}
  />

  <Sidebar isOpen={isSideBarOpen} />

  <div class="flex flex-col w-0 flex-1 overflow-hidden">
    <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        type="button"
        class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
      >
        <span class="sr-only">Open sidebar</span>
        <!-- Heroicon name: outline/menu-alt-2 -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          on:click={() => (isMobileSideBarOpen = !isMobileSideBarOpen)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div class="flex-1 px-4 hidden justify-between items-center md:flex">
        <div class="flex-1 flex text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            on:click={toggleSidebar}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div class="ml-4 flex items-center md:ml-6">
          <!-- Profile dropdown -->
          <ProfileDropdown />
        </div>
      </div>
    </div>

    <main class="flex-1 relative overflow-y-auto focus:outline-none">
      <div class="py-6">
        <slot />
      </div>
    </main>
  </div>
</div>
