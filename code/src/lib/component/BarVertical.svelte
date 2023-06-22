<script lang="ts">
  export let className = ''
</script>

<div class={'bar h-64 w-0.5 ' + className} />

<style>
  .bar {
    background: linear-gradient(0deg, #000000 0%, #d9d9d9 49.81%, #000000 100%);
    border-radius: 11px;
  }
</style>
