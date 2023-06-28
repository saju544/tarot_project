<script>
  import Footer from '$lib/component/Footer.svelte'
  import GetInTouch from '$lib/component/GetInTouch.svelte'
  import Header from '$lib/component/Header.svelte'
  import Intro from '$lib/component/Intro.svelte'
  import starSky from '../../../assets/image/start_sky.webp'
  import moonRight from '../../../assets/image/moon_right.webp'
</script>

<Header />
<main>
  <div class="relative">
    <img
      loading="lazy"
      class="star-sky absolute top-20 -z-10 h-60  w-full object-cover object-bottom"
      src={starSky}
      alt="night sky with stars" />

    <img
      loading="lazy"
      class="star-sky absolute  -top-40 -z-10 h-60 w-full  rotate-180 object-cover object-bottom"
      src={starSky}
      alt="night sky with stars" />

    <img
      loading="lazy"
      class="absolute right-0 -top-28 h-60 object-contain "
      src={moonRight}
      alt="moon in right side" />

    <Intro />
    <GetInTouch />
  </div>
</main>
<Footer />
