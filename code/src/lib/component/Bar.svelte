<script lang="ts">
  export let className = ''
</script>

<div class={'bar h-[2px] w-56 ' + className} />

<style>
  .bar {
    background: linear-gradient(
      270deg,
      #000000 0%,
      #d9d9d9 49.81%,
      #000000 100%
    );
    border-radius: 11px;
  }
</style>
