<script>
  import { activeMenu } from "../stores/menu";
  $: title = $activeMenu.name;
</script>

<div class="w-full mx-auto px-4 sm:px-6 md:px-8 inline-flex justify-between">
  <h1 class="text-2xl font-semibold text-gray-900">{title} Page</h1>
</div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-3">
  <div class="p4">
    <h1>Hello World</h1>
  </div>
</div>
