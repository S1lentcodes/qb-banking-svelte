<script>
  import Fa from 'svelte-fa'
  import { faMoneyBillWave, faCoins } from '@fortawesome/free-solid-svg-icons'
</script>


<div class="grid grid-cols-2 gap-10 my-auto font-semibold text-center">
  <div class="rounded-lg p-3 bg-dark-300">
    <div class="pb-4">
      <Fa icon={faMoneyBillWave}/>
      <span class="text-[18px] pl-2">Current Bank Balance</span>
    </div>
    <p class="text-[30px] text-green-700">$3,000</p>
  </div>
  <div class="rounded-lg p-3 bg-dark-300">
    <div class="pb-4">
      <Fa icon={faCoins}/>
      <span class="text-[18px] pl-2">Current Cash Balance</span>
    </div>
    <p class="text-[30px] text-green-700">$3,000</p>
  </div>
</div>