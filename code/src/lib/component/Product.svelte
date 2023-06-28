<script lang="ts">
  import Bar from './Bar.svelte'
  import Button from './Button.svelte'

  export let image = ''
  export let category = ''
  export let name = ''
</script>

<figure class="rounded-xl border border-dashed border-dark p-1 md:p-4">
  <img src={image} alt="" class="rounded-t-xl md:mb-2" />
  <p class="para text-center text-sm text-dark md:text-left  md:text-base">
    {category}
  </p>
  <Bar className="md:my-4 my-1 w-full" />
  <p class="para mb-2 text-center md:mb-4 md:text-left ">{name}</p>
  <button
    class="para mx-auto block  w-max  rounded-full border-2 border-orange border-opacity-70 px-2   text-sm text-orange hover:bg-orange hover:bg-opacity-20 hover:text-head  md:inline-block md:px-4 md:py-2  md:text-base ">
    Add to Cart
  </button>
</figure>
