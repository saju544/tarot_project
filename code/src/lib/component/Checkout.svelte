<script lang="ts">
  import { getContext } from 'svelte'
  import type { Writable } from 'svelte/store'
  import Button from './Button.svelte'

  let isCheckoutOpen = getContext('is-checkout-open') as Writable<boolean>
</script>

<div
  class={`absolute top-0 left-0  right-0  flex gap-8 rounded-xl  border-b border-dark   bg-zinc-900 p-8 ${
    $isCheckoutOpen ? 'block' : 'hidden'
  }`}>
  <button
    class="absolute right-2 -top-4 flex aspect-square h-8 items-center justify-center  rounded-full bg-red-700 font-sans text-white hover:bg-red-500 active:scale-90 "
    on:click={() => ($isCheckoutOpen = false)}>X</button>

  <form class="grid grow grid-cols-1  gap-4 md:grid-cols-2 md:gap-10">
    <input
      class="placeholder:para border-b-dabg-transpar bg-opacity-70ent col-span-1  rounded-none border-b-2 bg-gray-800 bg-opacity-70 py-4  px-4  text-orange placeholder:text-orange  focus:border-b-orange focus:outline-none md:rounded-l-xl"
      placeholder="Name"
      type="text"
      name="name"
      id="name" />

    <input
      class="placeholder:para  border-b-dabg-transpar bg-opacity-70ent col-span-1  border-b-2 bg-gray-800 bg-opacity-70 py-4   px-4   text-orange placeholder:text-orange  focus:border-b-orange focus:outline-none md:rounded-r-xl"
      placeholder="Email"
      type="email"
      name="emial"
      id="email" />

    <textarea
      class="placeholder:para border-b-darbg-transpar bg-opacity-70ent  col-span-1 rounded-b-xl border-b-2 bg-gray-800 bg-opacity-70  py-4  px-4 text-orange  placeholder:text-orange focus:border-b-orange focus:outline-none md:col-span-2 md:h-36"
      placeholder="Your Addeess..."
      name="address"
      id="address" />

    <input
      class="placeholder:para col-span-1 rounded-t-xl  border-b-2 border-b-dark  bg-gray-800  bg-opacity-70 py-4 px-4  text-orange  placeholder:text-orange focus:border-b-orange focus:outline-none md:col-span-2 "
      placeholder="Any Instruction for Delevery (Optional)"
      type="text"
      name="instruction"
      id="instruction" />

    <Button>Place Order</Button>
  </form>

  <section class="relative space-y-4 rounded-xl border-dark md:border md:p-8 ">
    <h1 class="head text-orange">Products to Order</h1>
  </section>
</div>
