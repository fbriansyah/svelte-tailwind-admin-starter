<script>
  export let setting = { type: "normal" };
  export let data;
</script>

{#if setting.type === "bold"}
  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
    {data}
  </td>
{:else if setting.type === "action"}
  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <span class="text-indigo-600 hover:text-indigo-900">Edit</span>
    <span class="text-red-600 hover:text-red-900">Delete</span>
  </td>
{:else}
  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
    {data}
  </td>
{/if}
