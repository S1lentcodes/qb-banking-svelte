<script>
  import Fa from 'svelte-fa'
  import { faMoneyBillWave, faCoins, faPersonRunning } from '@fortawesome/free-solid-svg-icons'
</script>

<div class="mx-5 mt-5 mb-15 flex">
  <h1 class="font-serif text-4xl border-l-4 pl-2 border-[#006b00]">
    Welcome
  </h1>
  <h1 class="font-serif text-4xl ml-auto">
    <span class="mx-auto">John Doe</span>
  </h1>
</div>
<div class="grid grid-cols-2 gap-10 mt-10 mb-10 mx-5 font-semibold text-center">
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

<div class="text-center font-semibold mx-5 px-10 py-8 rounded-lg bg-dark-300">
  <div class="max-w-xs mx-auto mb-10">
    <Fa icon={faPersonRunning} scale={1.6}/>
    <span class="text-[18px] pl-2">Quick Actions</span>
  </div>
  <div class="grid grid-cols-3 gap-y-6 gap-x-6">
    <button class="bg-red-700 rounded-lg py-1 hover:bg-red-800 active:bg-red-900 focus:outline-none focus:ring focus:ring-red-600">
      <span class="font-bold">Deposit $100</span>
    </button>
    <button class="bg-red-700 rounded-lg py-1 hover:bg-red-800 active:bg-red-900 focus:outline-none focus:ring focus:ring-red-600">
      <span class="font-bold">Deposit $1,000</span>
    </button>
    <button class="bg-red-700 rounded-lg py-1 hover:bg-red-800 active:bg-red-900 focus:outline-none focus:ring focus:ring-red-600">
      <span class="font-bold">Deposit $10,000</span>
    </button>

    <button class="bg-green-700 rounded-lg py-1 hover:bg-green-800 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-600">
      <span class="font-bold">Withdraw $100</span>
    </button>
    <button class="bg-green-700 rounded-lg py-1 hover:bg-green-800 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-600">
      <span class="font-bold">Withdraw $1,000</span>
    </button>
    <button class="bg-green-700 rounded-lg py-1 hover:bg-green-800 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-600">
      <span class="font-bold">Withdraw $10,000</span>
    </button>
  </div>

  <div class="grid grid-cols-2 gap-x-6 mt-6">
    <button class="bg-blue-700 rounded-lg py-1 hover:bg-blue-800 active:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-600">
      <span class="font-bold">Transfer $10,000 from Bank to Savings</span>
    </button>
    <button class="bg-blue-700 rounded-lg py-1 hover:bg-blue-800 active:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-600">
      <span class="font-bold">Transfer $10,000 from Savings to Bank</span>
    </button>
  </div>
</div>