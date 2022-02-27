<script lang="ts">
  import Fa from 'svelte-fa'
  import { faHome } from '@fortawesome/free-solid-svg-icons'
  export let icon = faHome;
  export let name: string = "Account Home";
  export let selected: string = "Account Home";

  function handleClick() {
    selected = name;
  }
</script>

<style>
  .nav_hover:hover {
    background-color: #006b00;
  }
  .nav_item {
    cursor: pointer
  }
  .nav_selected {
    background-color: #006b00;
  }
</style>

<div class="p-3 nav_item rounded-lg my-1 {selected == name ? "nav_selected" : "nav_hover"}" on:click={handleClick}>
  <Fa icon={icon} class="min-w-[8%]"/>
  <span class="pl-2">{name}</span>
</div>