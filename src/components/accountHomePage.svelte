<script>
  import Fa from 'svelte-fa'
  import { faMoneyBillWave, faCoins, faPersonRunning, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
  import { fade } from 'svelte/transition';
  import AtomButton from './atomButton.svelte';
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
  <div class="grid grid-cols-3 gap-y-6 gap-x-6">
    <AtomButton color={"red"} name={"Deposit $100"}/>
    <AtomButton color={"red"} name={"Deposit $1,000"}/>
    <AtomButton color={"red"} name={"Deposit $10,000"}/>

    <AtomButton color={"green"} name={"Withdraw $100"}/>
    <AtomButton color={"green"} name={"Withdraw $1,000"}/>
    <AtomButton color={"green"} name={"Withdraw $10,000"}/>
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