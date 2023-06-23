<script>
  import Section from './Section.svelte'
  import moonInverse from '../../assets/image/moon-inverse.png'
  import moonSign from '../../assets/image/moon-sign.png'
  import starSign from '../../assets/image/star_sign.png'
  import moonPhase from '../../assets/image/moon-phases.png'
  import Button from './Button.svelte'
</script>

<Section>
  <div
    class="relative col-start-1 col-end-6 mt-40  flex  aspect-square items-center justify-center  ">
    <img
      loading="lazy"
      class="star-sign absolute scale-125"
      src={starSign}
      alt="" />
    <img loading="lazy" class="moon-sign absolute" src={moonSign} alt="" />
    <img
      loading="lazy"
      class="moon-inverse absolute scale-90 "
      src={moonInverse}
      alt="" />
  </div>

  <article
    class="col-start-8 col-end-13 mt-40 flex flex-col items-start justify-center  ">
    <h1 class="head">What we do</h1>

    <p class="para pb-4 leading-loose">
      Welcome to Getanjali Sharma | The Tarot Reader, where we offer a range of
      services rooted in the mystical arts of Tarot Reading, Astrology, Vastu,
      and Healing. With over 12 years of experience, we have dedicated ourselves
      to guiding and enlightening individuals on their life's journey.
    </p>

    <Button>Know More</Button>
  </article>

  <img
    loading="lazy"
    class="absolute w-full object-contain -right-10  -bottom-10 -z-10"
    src={moonPhase}
    alt="phases of moon" />
</Section>

<style>
  .star-sign {
    animation: spin 75s infinite linear;
  }
  .moon-sign {
    animation: spin 65s infinite linear reverse;
  }

  @keyframes spin {
    to {
      rotate: 360deg;
    }
  }
</style>
