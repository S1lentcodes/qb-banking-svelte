<script lang="ts">
  import Fa from 'svelte-fa'
  import { faHome } from '@fortawesome/free-solid-svg-icons'
  export let icon = faHome;
  export let name: string = "";
  export let selected: string = "";
  export let color: "green" | "red" = "green"

  let colors = {
    "green" : {
      'bg': "bg-[#006b00]",
      'hover': "hover:bg-[#006b00]"
    },
    "red": {
      'bg': "bg-red-600",
      'hover': "hover:bg-red-600"
    }
  }

  function handleClick() {
    selected = name;
  }
</script>

<div class="p-3 cursor-pointer rounded-lg my-1 {selected == name ? colors[color].bg : colors[color].hover}"
  on:click={handleClick}>
  <Fa icon={icon} class="min-w-[8%]"/>
  <span class="pl-2">{name}</span>
</div>