<script>
  import Table from "../components/Tables/Stripped.svelte";
  import { activeMenu } from "../stores/menu";

  $: title = $activeMenu.name;

  const headers = [
    { name: "Name", type: "bold" },
    { name: "Title", type: "normal" },
    { name: "Email", type: "normal" },
    { name: "Role", type: "normal" },
    { name: "Actions", type: "action" },
  ];
  const rows = [
    ["Febrian", "Lead Programmer", "febrian@efner.id", "admin", 1],
    ["Nuur", "Frontend Developer", "febrian@efner.id", "editor", 1],
    ["Rasyiid", "Backend Developer", "febrian@efner.id", "viewer", 1],
  ];
</script>

<div class="w-full mx-auto px-4 sm:px-6 md:px-8 inline-flex justify-between">
  <h1 class="text-2xl font-semibold text-gray-900">{title} Page</h1>
  <button
    type="button"
    class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    <i class="fas fa-plus mr-3 flex-shrink-0 inline-block text-white" />
    Create {title}
  </button>
</div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-3">
  <div class="p4">
    <Table {headers} {rows} />
  </div>
</div>
