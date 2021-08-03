<script>
  import { activeMenu } from "../stores/menu";
</script>

<div class="w-full mx-auto px-4 sm:px-6 md:px-8 inline-flex justify-between">
  <h1 class="text-2xl font-semibold text-gray-900">Page Not Found</h1>
</div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-3">
  <div class="p4">
    <div class="border-4 border-dashed border-red-500 rounded-lg h-96 p-4">
      <h2>404: {$activeMenu.name} page was not found</h2>
    </div>
  </div>
</div>
