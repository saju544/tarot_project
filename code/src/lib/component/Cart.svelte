<script lang="ts">
  import { getContext } from 'svelte'
  import Product from './Product.svelte'
  import type { Writable } from 'svelte/store'

  let productsInCart = getContext('product-in-cart') as Writable<product[]>
  let isCartOpen = getContext('is-cart-open') as Writable<boolean>
</script>

<div
  class={`absolute top-0  left-0  right-0  rounded-xl border-b   border-dark bg-zinc-900 ${
    $isCartOpen ? 'block' : 'hidden'
  }`}>
  <h1 class="head text-center">Your Cart</h1>

  <div
    class={`cart col-start-1  col-end-13 my-0 mt-2 grid  rounded-xl  p-5   shadow-2xl md:mt-0 md:gap-y-12 md:gap-x-4 md:px-10`}>
    {#each $productsInCart as product (product.name)}
      <Product
        image={product.image}
        category={product.category}
        name={product.name}
        price={product.price} />
    {/each}
  </div>
</div>

<style>
  .cart {
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
</style>
