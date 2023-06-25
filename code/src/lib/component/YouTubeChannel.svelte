<script>
  import Bar from './Bar.svelte'
  import Section from './Section.svelte'
  import youTube1 from '../../assets/image/youtube-1.webp'
  import youTube2 from '../../assets/image/youtube-2.webp'
  import youTube3 from '../../assets/image/youtube-3.webp'
  import youTube4 from '../../assets/image/youtube-4.webp'
  import youTube5 from '../../assets/image/youtube-5.webp'
  import starSky from '../../assets/image/start_sky.webp'
</script>

<Section>
  <div class="col-start-1 col-end-13">
    <header
      class="mt-16 mb-4 flex flex-col items-center text-center md:mb-10 md:mt-32 ">
      <h1 class="head">Our YouTube Channel</h1>
      <Bar className="mb-7 mt-2  w-80 " />
    </header>

    <div class="flex flex-wrap items-center justify-center gap-8 ">
      <img
        loading="lazy"
        class="aspect-video h-48"
        src={youTube1}
        alt="youtube video tumbnail" />

      <img
        loading="lazy"
        class="aspect-video h-48"
        src={youTube2}
        alt="youtube video tumbnail" />

      <img
        loading="lazy"
        class="aspect-video h-48"
        src={youTube3}
        alt="youtube video tumbnail" />

      <img
        loading="lazy"
        class="aspect-video h-48"
        src={youTube4}
        alt="youtube video tumbnail" />

      <img
        loading="lazy"
        class="aspect-video h-48"
        src={youTube5}
        alt="youtube video tumbnail" />
    </div>
  </div>

  <img
    loading="lazy"
    class="star-sky1"
    src={starSky}
    alt="night sky full of stars" />
  <img
    loading="lazy"
    class="star-sky2"
    src={starSky}
    alt="night sky full of stars" />
</Section>

<style>
  .star-sky1,
  .star-sky2 {
    position: absolute;
    z-index: -10;
    min-width: calc(100vw - 1.5rem);
    height: 43%;
    object-fit: cover;
    object-position: center bottom;
    top: -3rem;
    right: 0;
    rotate: 180deg;
  }

  .star-sky2 {
    top: 14rem;
    rotate: 0deg;
  }

  @media (min-width: 768px) {
    .star-sky1,
    .star-sky2 {
      right: auto;
    }
  }
</style>
