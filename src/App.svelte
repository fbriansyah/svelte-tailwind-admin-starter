<script>
  import { onMount } from "svelte";
  import { getActiveMenu } from "./lib/localstorage";

  import AdminLayout from "./layouts/admin.svelte";
  import Page from "./Pages/Index.svelte";
  import { activeMenu } from "./stores/menu";

  onMount(() => {
    const currentMenu = getActiveMenu();
    if (currentMenu) {
      activeMenu.selectMenu(currentMenu);
    }
  });
</script>

<AdminLayout>
  <Page />
</AdminLayout>

<style global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>
