<script>
  import Bar from './Bar.svelte'
  import Section from './Section.svelte'
  import youTube1 from '../../assets/image/youtube-1.png'
  import youTube2 from '../../assets/image/youtube-2.png'
  import youTube3 from '../../assets/image/youtube-3.png'
  import youTube4 from '../../assets/image/youtube-4.png'
  import youTube5 from '../../assets/image/youtube-5.png'
  import starSky from '../../assets/image/start_sky.png'
</script>

<Section>
  <div class="col-start-1 col-end-13">
    <header class="flex flex-col items-center mt-32 mb-10 ">
      <h1 class="head">Our YouTube Channel</h1>
      <Bar className="mb-7 mt-2  w-80 " />
    </header>

    <div class="flex items-center justify-center flex-wrap gap-8 ">
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
    min-width: calc(100vw - 1.3rem);
    height: 43%;
    object-fit: cover;
    object-position: center bottom;
    top: -3rem;
    left: calc(((100vw - 1.3rem) - 100%) / -2);
    rotate: 180deg;
  }

  .star-sky2 {
    top: 14rem;
    rotate: 0deg;
  }
</style>
