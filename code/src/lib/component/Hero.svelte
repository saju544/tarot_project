<script lang="ts">
  import Button from '$lib/component/Button.svelte'
  import Section from '$lib/component/Section.svelte'
</script>

<Section>
  <div
    class="hero relative col-start-1 col-end-13 flex  flex-col items-center gap-4 overflow-visible   md:py-8">
    <p class="para pt-8  text-dark md:py-4">
      Love an headd relationship Tarot cards
    </p>

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
    height: 100%;
    top: 0;
    z-index: -10;
    background-image: url('../../assets/image/start_sky.webp');
    background-size: cover;
    background-position: bottom;
    box-shadow: 0 30px 25px rgba(0, 0, 0, 0.679) inset;
    animation: shine 5s alternate infinite;
  }
  .hero::after {
    content: '';
    position: absolute;
    z-index: 9;
    background-image: url('../../assets/image/astrologer-hero.webp');
    height: calc(100%);
    aspect-ratio: 1/1;
    top: 0;
    background-size: cover;
    right: 0;
  }

  @media (min-width: 768px) {
    .hero::before {
      background-position: center calc(100% - 5rem);
      height: calc(100% + 5rem);
      background-position: center calc(100% + 5rem);
    }
    .hero::after {
      height: calc(100% + 8rem);
      right: calc((((100vw - 20px) - 100%) / -2));
    }
  }

  @keyframes shine {
    from {
      filter: brightness(0.5);
    }

    to {
      filter: brightness(1.5);
    }
  }
</style>
