<script lang="ts">
  import Bar from './Bar.svelte'

  export let classname = ''
  export let stat = ''
  export let info = ''
</script>

<article
  class={'aspect-square rounded-3xl border-[1px] border-[#656565] text-center ' +
    classname}>
  <h1
    class="stat head flex h-2/3  items-center justify-center text-3xl md:text-[2rem]">
    {stat}
  </h1>
  <Bar className="w-full" />
  <p class="para mt-4 px-2 leading-normal">{info}</p>
</article>

<style>
  .stat {
    background-image: url('../../assets/image/statistic-bg.webp');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
