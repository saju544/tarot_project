<script>
  import Header from '$lib/component/Header.svelte'
  import Product from '$lib/component/Product.svelte'
  import Section from '$lib/component/Section.svelte'
  import { products } from '$lib/shop_product/product'
</script>

<Header />

<Section>
  <div class="col-start-1 col-end-13 border ">
    {#each $products as product (product.name)}
      <Product
        image={product.image}
        category={product.category}
        name={product.name} />
    {/each}
  </div>
</Section>
