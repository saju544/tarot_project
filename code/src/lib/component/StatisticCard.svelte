<script lang="ts">
  import Bar from './Bar.svelte'

  export let classname = ''
  export let stat = ''
  export let info = ''
</script>

<article
  class={'aspect-square rounded-3xl border-[1px] border-[#656565] text-center ' +
    classname}>
  <h1 class="stat head h-2/3 flex items-center justify-center">{stat}</h1>
  <Bar className="w-full" />
  <p class="para mt-4 leading-normal px-2">{info}</p>
</article>

<style>
  .stat {
    background-image: url('../../assets/image/statistic-bg.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
