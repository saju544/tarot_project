<script lang="ts">
  import Bar from './Bar.svelte'
  import Button from './Button.svelte'

  export let image = ''
  export let category = ''
  export let name = ''
  export let price = 0
</script>

<figure class="rounded-xl border border-dashed border-dark p-1 md:p-4">
  <img
    src={image}
    alt=""
    class="rounded-t-xl   object-cover object-center  md:mb-2  md:h-[60%]" />

  <div class="md-mt-0 mt-2 flex justify-between">
    <p class="para text-center text-sm text-dark md:text-left  md:text-base">
      {category}
    </p>

    <p class="para block  text-sm md:hidden ">/- {price}₹</p>
  </div>

  <Bar className="md:my-4 my-1 w-full" />

  <div class="flex justify-between">
    <p class="para mb-2 w-full text-center md:mb-4  md:w-auto md:text-left ">
      {name}
    </p>

    <p class="price para hidden   md:block ">/- {price}₹</p>
  </div>

  <button
    class="para   mx-auto block  w-max  rounded-full border border-orange  border-opacity-70 px-2 text-sm   text-orange hover:bg-orange hover:bg-opacity-20 hover:text-head md:inline-block  md:border-2 md:px-4 md:py-2  md:text-base ">
    Add to Cart
  </button>
</figure>

<style>
  .price {
    min-width: max-content;
  }
</style>
