<script lang="ts">
  import Bar from './Bar.svelte'
  import Button from './Button.svelte'

  export let image = ''
  export let category = ''
  export let name = ''
</script>

<figure>
  <img src={image} alt="" />
  <p class="para">{category}</p>
  <Bar />
  <p class="para">{name}</p>
  <Button>Add to Cart</Button>
</figure>
