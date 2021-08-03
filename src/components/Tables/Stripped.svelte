<script>
  import Columns from "./Columns.svelte";

  export let headers = [
    { name: "Name", type: "bold" },
    { name: "Title", type: "normal" },
    { name: "Email", type: "normal" },
    { name: "Role", type: "normal" },
    { name: "Actions", type: "action" },
  ];
  export let rows = [];
</script>

<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      >
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              {#each headers as header}
                <th
                  scope="col"
                  class="px-6 py-3 {header.type === 'action'
                    ? 'text-right'
                    : 'text-left'} text-xs font-medium text-gray-600 uppercase tracking-wider"
                >
                  {header.name}
                </th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each rows as row, i (`row-${i}`)}
              <tr class={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                {#each row as col, j (`row-${i}-col-${j}`)}
                  <Columns data={col} setting={headers[j]} />
                {/each}
              </tr>
            {/each}
            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
