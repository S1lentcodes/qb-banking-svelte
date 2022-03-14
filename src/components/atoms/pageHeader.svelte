<script lang="ts">
  export let header_name: string = ""
</script>

<div class="flex border-l-3 border-[#006b00] py-2">
  <p class="font-serif text-4xl pl-4">
    {header_name}
  </p>
  <slot></slot>
</div>