<script>
  import Fa from 'svelte-fa'
  import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'
  import PageHeader from './atoms/pageHeader.svelte';
  import PageBody from './atoms/pageBody.svelte';
  import BankBalance from './atoms/bankBalance.svelte';
  import BankButton from './atoms/bankButton.svelte';
</script>

<PageHeader header_name={"Withdrawal"}/>

<PageBody>
  <BankBalance />

  <div class="text-center font-semibold px-10 py-8 mt-10 rounded-lg bg-dark-300">
    <div class="max-w-xs mx-auto mb-10">
      <Fa icon={faPersonRunning} scale={1.6}/>
      <span class="text-[18px] pl-2">Quick Actions</span>
    </div>
    <div class="grid grid-cols-3 gap-y-6 gap-x-6">
      <BankButton color={"red"} name={"Deposit $100"} />
    </div>
  </div>
</PageBody>