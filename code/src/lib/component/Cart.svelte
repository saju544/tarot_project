<script lang="ts">
  import { getContext, onMount } from 'svelte'
  import Product from './Product.svelte'
  import type { Writable } from 'svelte/store'

  let productsInCart = getContext('product-in-cart') as Writable<product[]>
  let isCartOpen = getContext('is-cart-open') as Writable<boolean>

  let cart: HTMLDivElement | undefined

  export function scrollIntoView() {
    requestAnimationFrame(() => {
      cart?.scrollIntoView(true)
    })
  }

  function removeFromCart(ev: CustomEvent) {
    const id = ev.detail.id
    $productsInCart = $productsInCart.filter((product) => product.id !== id)
  }
</script>

<div
  class={`absolute top-0  left-0  right-0 scroll-m-20 rounded-xl  border-b-8 border-dark  border-b-orange  bg-zinc-900 pb-2 ${
    $isCartOpen ? 'block' : 'hidden'
  }`}
  bind:this={cart}>
  <button
    class="absolute right-2 top-2 flex aspect-square h-8 items-center justify-center  rounded-full bg-red-700 font-sans text-white hover:bg-red-500 active:scale-90 "
    on:click={() => ($isCartOpen = false)}>X</button>

  <h1 class="head mt-2 text-center">
    Your Cart {$productsInCart.length === 0
      ? 'is Empty'
      : `(${$productsInCart.length} Items)`}
  </h1>

  <div
    class={`cart col-start-1  col-end-13 my-0 mt-2 grid  rounded-xl  p-5   shadow-2xl md:mt-0 md:gap-y-12 md:gap-x-4 md:px-10`}>
    {#each $productsInCart as product (product.id)}
      <Product
        id={product.id}
        image={product.image}
        category={product.category}
        name={product.name}
        price={product.price}
        on:click={removeFromCart}>
        Remove item
      </Product>
    {/each}
  </div>
</div>

<style>
  .cart {
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
  @media (max-width: 768px) {
    .cart {
      grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
      gap: 1rem;
    }
  }
</style>
