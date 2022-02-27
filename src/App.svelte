<script lang="ts">
  import { faHome, faMoneyBillWave, faDollarSign, faArrowsLeftRight, faGears, faWallet } from '@fortawesome/free-solid-svg-icons'
  import NavItem from "./components/navItem.svelte";
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

<main>
  <div class="min-h-screen bg-dark-500 text-light-50 flex">
    <nav class="flex-col w-1/4 p-10">
      <img alt="Hello"/>
      <ul class="mt-20 font-semibold text-left">
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
      <div class="text-center">
        <p>Log out</p>
      </div>
    </nav>
    <div class="divier"></div> 
    <div class="flex-col w-3/4">
      {#each  Object.entries(navPages) as child}
        {#if child[0] === navSelected}
          <svelte:component this={child[1]}/>
        {/if}
      {/each}
    </div>
  </div>
</main>

