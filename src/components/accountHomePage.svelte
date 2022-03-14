<script>
  import Fa from 'svelte-fa'
  import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'
  import PageHeader from './atoms/pageHeader.svelte';
  import PageBody from './atoms/pageBody.svelte';
  import BankButton from './atoms/bankButton.svelte';
  import BankBalance from './atoms/bankBalance.svelte';
</script>

<PageHeader header_name={"Welcome"}>
  <h1 class="font-serif text-4xl ml-auto">
    <span class="mx-auto">John Doe</span>
  </h1>
</PageHeader>

<PageBody>
  <BankBalance />
  
  <div class="text-center font-semibold px-10 py-8 mt-10 rounded-lg bg-dark-300">
    <div class="max-w-xs mx-auto mb-10">
      <Fa icon={faPersonRunning} scale={1.6}/>
      <span class="text-[18px] pl-2">Quick Actions</span>
    </div>
    <div class="grid grid-cols-3 gap-y-6 gap-x-6">
      <BankButton color={"red"} name={"Deposit $100"} />
      <BankButton color={"red"} name={"Deposit $1,000"} />
      <BankButton color={"red"} name={"Deposit $10,000"} />

      <BankButton color={"green"} name={"Withdraw $100"} />
      <BankButton color={"green"} name={"Withdraw $1,000"} />
      <BankButton color={"green"} name={"Withdraw $10,000"} />
    </div>
  
    <div class="grid grid-cols-2 gap-x-6 mt-6">
      <BankButton color={"blue"} name={"Transfer $10,000 from Bank to Savings"} />
      <BankButton color={"blue"} name={"Transfer $10,000 from Savings to Bank"} />
    </div>
  </div>
</PageBody>