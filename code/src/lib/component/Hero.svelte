<script lang="ts">
  import Button from '$lib/component/Button.svelte'
  import Section from '$lib/component/Section.svelte'
</script>

<Section>
  <div
    class="hero relative col-start-1 col-end-13  flex flex-col items-center gap-4  overflow-visible  py-8">
    <p class="para py-4  text-dark">Love an headd relationship Tarot cards</p>

    <header class="pb-2 text-center leading-loose	">
      <h1 class="head">Unlock the Mysteries Within:</h1>
      <h1 class="head">Unvelling Your Seret Destiny through Tarot</h1>
    </header>

    <Button>Reach Out and Connect</Button>
  </div>
</Section>

<style>
  .hero::before {
    content: '';
    position: absolute;
    width: calc(100vw - 20px);
    height: calc(100% + 5rem);
    top: 0;
    z-index: -10;
    background-image: url('../../assets/image/start_sky.png');
    background-size: cover;
    background-position: center calc(100% + 5rem);
    box-shadow: 0 30px 25px rgba(0, 0, 0, 0.679) inset;
  }
  .hero::after {
    content: '';
    position: absolute;
    z-index: 9;
    background-image: url('../../assets/image/astrologer-hero.png');
    height: calc(100% + 4rem);
    aspect-ratio: 1/1;
    top: 0;
    background-size: cover;
    right: calc((((100vw - 20px) - 100%) / -2));
  }
</style>
