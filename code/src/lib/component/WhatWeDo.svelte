<script>
  import Section from './Section.svelte'
  import moonInverse from '../../assets/image/moon-inverse.webp'
  import moonSign from '../../assets/image/moon-sign.webp'
  import starSign from '../../assets/image/star_sign.webp'
  import moonPhase from '../../assets/image/moon-phases.webp'
  import Button from './Button.svelte'
</script>

<Section>
  <div
    class="relative col-start-1 col-end-13 row-start-1 row-end-2 mt-10 flex hidden  aspect-square  items-center justify-center  md:col-start-1  md:col-end-6 md:row-start-auto md:row-end-auto md:mt-40 ">
    <img
      loading="lazy"
      class="star-sign absolute md:scale-125"
      src={starSign}
      alt="" />
    <img
      loading="lazy"
      class="moon-sign absolute scale-90 md:scale-100"
      src={moonSign}
      alt="" />
    <img
      loading="lazy"
      class="moon-inverse absolute scale-75 md:scale-90 "
      src={moonInverse}
      alt="" />
  </div>

  <article
    class="col-start-1 col-end-13 row-start-2  row-end-3 mt-10 flex flex-col items-start justify-center  md:col-start-8 md:col-end-13 md:row-start-auto md:row-end-auto md:mt-40  ">
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
    class="absolute right-0 -bottom-10 -z-10  w-full object-contain"
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
