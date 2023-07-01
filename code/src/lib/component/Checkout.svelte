<script lang="ts">
  import { getContext } from 'svelte'
  import type { Writable } from 'svelte/store'
  import Button from './Button.svelte'

  let isCheckoutOpen = getContext('is-checkout-open') as Writable<boolean>

  let productsInCart = getContext('product-in-cart') as Writable<product[]>

  let checkout: HTMLDivElement
  let orderForm: HTMLFormElement

  export function scrollIntoView() {
    requestAnimationFrame(() => {
      checkout?.scrollIntoView(true)
    })
  }

  function order() {
    const formData = Object.fromEntries([...new FormData(orderForm)])
    const productsData = $productsInCart.map((product) => {
      return { name: product.name, price: product.price }
    })
    const link = document.createElement('a')
    link.target = '_blank"'
    link.href = `https://wa.me/9382528543?text=${JSON.stringify(
      productsData
    )} ${JSON.stringify(formData)}`
    link.click()
    $productsInCart.length = 0
  }
</script>

<div
  class={`absolute top-0 left-0  right-0 flex scroll-m-20   flex-col gap-8 rounded-xl border-b  border-dark bg-zinc-900   p-8 md:flex-row ${
    $isCheckoutOpen ? 'block' : 'hidden'
  }`}
  bind:this={checkout}>
  <button
    class="absolute right-2 -top-4 flex aspect-square h-8 items-center justify-center  rounded-full bg-red-700 font-sans text-white hover:bg-red-500 active:scale-90 "
    on:click={() => ($isCheckoutOpen = false)}>X</button>

  <form
    class="order-2 grid grid-cols-1 gap-4   md:order-1 md:grow  md:grid-cols-2 md:content-start md:gap-10"
    on:submit|preventDefault={order}
    bind:this={orderForm}>
    <input
      class="placeholder:para border-b-dabg-transpar bg-opacity-70ent col-span-1  rounded-none rounded-t-xl border-b-2 bg-gray-800 bg-opacity-70  py-4  px-4 text-orange  placeholder:text-orange focus:border-b-orange focus:outline-none md:rounded-t-none  md:rounded-tl-xl"
      placeholder="Name"
      type="text"
      name="name"
      id="name"
      required />

    <input
      class="placeholder:para  border-b-dabg-transpar bg-opacity-70ent col-span-1  border-b-2 bg-gray-800 bg-opacity-70 py-4   px-4   text-orange placeholder:text-orange  focus:border-b-orange focus:outline-none md:rounded-tr-xl"
      placeholder="Email"
      type="email"
      name="emial"
      id="email"
      required />

    <textarea
      class="placeholder:para border-b-darbg-transpar bg-opacity-70ent  col-span-1  border-b-2 bg-gray-800 bg-opacity-70  py-4  px-4 text-orange  placeholder:text-orange focus:border-b-orange focus:outline-none md:col-span-2 md:h-36"
      placeholder="Your Addeess..."
      name="address"
      id="address"
      required />

    <input
      class="placeholder:para col-span-1   rounded-b-xl border-b-2  border-b-dark  bg-gray-800 bg-opacity-70 py-4  px-4  text-orange placeholder:text-orange focus:border-b-orange focus:outline-none md:col-span-2"
      placeholder="Any Instruction for Delevery (Optional)"
      type="text"
      name="instruction"
      id="instruction" />

    <Button>Place Order</Button>
  </form>

  <section
    class="relative order-1 space-y-4 rounded-xl border-dark md:order-2 md:border md:p-8 ">
    <h1 class="head text-orange">Products to Order</h1>

    <table class="para w-full table-auto">
      <thead class="">
        <tr class="border-b text-head">
          <th class="p-2 text-left">Product</th>
          <th class="p-2 text-right">Price</th>
        </tr>
      </thead>

      <tbody class="">
        {#each $productsInCart as product (product.id)}
          <tr class="">
            <td class="p-2 text-left">{product.name}</td>
            <td class="p-2 text-right">{product.price}</td>
          </tr>
        {/each}

        <tr class="border-t text-2xl font-bold text-orange md:text-3xl">
          <th class="p-2 text-left">Total</th>
          <th class="p-2 text-right">
            /- {$productsInCart.reduce((pv, product) => pv + product.price, 0)} ₹
          </th>
        </tr>
      </tbody>
    </table>
  </section>
</div>
