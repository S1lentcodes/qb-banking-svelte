<script lang="ts">
  export let name: string = "";
  export let color: "red"|"blue"|"green" = "red";
</script>


<button class="bg-{color}-700 rounded-lg py-1 hover:bg-{color}-800 active:bg-{color}-900 focus:outline-none focus:ring focus:ring-{color}-600">
  <span class="font-bold">{name}</span>
</button>