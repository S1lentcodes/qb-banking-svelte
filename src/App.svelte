<script lang="ts">
  import { faHome, faMoneyBillWave, faDollarSign, faArrowsLeftRight, faGears, faWallet, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
  import NavItem from "./components/atoms/navItem.svelte";
  import AccountOptionsPage from "./components/accountOptionsPage.svelte";
  import DepositPage from "./components/depositPage.svelte";
  import AccountHomePage from "./components/accountHomePage.svelte";
  import TransferPage from "./components/transferPage.svelte";
  import WithdrawalsPage from "./components/withdrawalsPage.svelte";
  import SavingsAccountPage from "./components/savingsAccountPage.svelte";

  let navSelected: string = "Account Home";
  let navPages: object = {
    "Account Home": AccountHomePage,
    "Withdrawals": WithdrawalsPage,
    "Deposit": DepositPage,
    "Transfer": TransferPage,
    "Savings Account": SavingsAccountPage,
    "Account Options": AccountOptionsPage,
  }
</script>

<main class="min-h-screen flex bg-transparent">
  <div class="p-10 my-auto mx-auto bg-dark-500 text-light-50 divide-x-4 divide-dark-900 flex min-w-350 min-h-200 rounded-lg">
    <nav class="flex flex-col w-1/4 pr-10">
      <img alt="Hello"/>
      <ul class="my-auto font-semibold text-left bg-dark-300 rounded-lg p-3">
        <li>
          <NavItem icon={faHome} name="Account Home" bind:selected={navSelected}/>
        </li>
        <li>
          <NavItem icon={faMoneyBillWave} name="Withdrawals" bind:selected={navSelected}/>
        </li>
        <li>
          <NavItem icon={faDollarSign} name="Deposit" bind:selected={navSelected}/>
        </li>
        <li>
          <NavItem icon={faArrowsLeftRight} name="Transfer" bind:selected={navSelected}/>
        </li>
        <li>
          <NavItem icon={faWallet} name="Savings Account" bind:selected={navSelected}/>
        </li>
        <li>
          <NavItem icon={faGears} name="Account Options" bind:selected={navSelected}/>
        </li>
      </ul>
      <div class="text-center font-semibold">
        <NavItem icon={faRightFromBracket} name="Log Out" color={"red"} bind:selected={navSelected}/>
      </div>
    </nav>
    <div class="flex-col w-3/4 pl-10 flex">
      {#each  Object.entries(navPages) as child}
        {#if child[0] === navSelected}
          <svelte:component this={child[1]}/>
        {/if}
      {/each}
    </div>
  </div>
</main>

