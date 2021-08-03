<script>
  import { activeMenu } from "../stores/menu";

  import Dashboard from "./Dashboard.svelte";
  import Notfound from "./Notfound.svelte";
  import Users from "./Users.svelte";
</script>

{#if $activeMenu.id === 1}
  <Dashboard />
{:else if $activeMenu.id === 2}
  <Users />
{:else}
  <Notfound />
{/if}
