<script>
  import Fa from 'svelte-fa'
  import { faMoneyBillWave, faCoins, faPersonRunning } from '@fortawesome/free-solid-svg-icons'
</script>

<div class="grid grid-cols-2 gap-20 mt-30 mb-20 mx-10 font-semibold text-center">
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

<div class="text-center font-semibold mx-10 px-10 py-8 rounded-lg bg-dark-300">
  <div class="max-w-xs mx-auto mb-10">
    <Fa icon={faPersonRunning} scale={1.6}/>
    <span class="text-[18px] pl-2">Quick Actions</span>
  </div>
  <div class="grid grid-cols-3 gap-y-5 gap-x-6">
    <button class="bg-red-700 rounded-lg py-1">
      <span class="font-bold">Deposit $100</span>
    </button>
    <button class="bg-red-700 rounded-lg py-1">
      <span class="font-bold">Deposit $1,000</span>
    </button>
    <button class="bg-red-700 rounded-lg py-1">
      <span class="font-bold">Deposit $10,000</span>
    </button>

    <button class="bg-green-700 rounded-lg py-1">
      <span class="font-bold">Withdraw $100</span>
    </button>
    <button class="bg-green-700 rounded-lg py-1">
      <span class="font-bold">Withdraw $1,000</span>
    </button>
    <button class="bg-green-700 rounded-lg py-1">
      <span class="font-bold">Withdraw $10,000</span>
    </button>
  </div>

  <div class="grid grid-cols-2 gap-x-6 mt-5">
    <button class="bg-blue-700 rounded-lg py-1">
      <span class="font-bold">Transfer $10,000 from Bank to Savings</span>
    </button>
    <button class="bg-blue-700 rounded-lg py-1">
      <span class="font-bold">Transfer $10,000 from Savings to Bank</span>
    </button>
  </div>
</div>