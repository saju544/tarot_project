<script>
  import Bar from '$lib/component/Bar.svelte'
  import Header from '$lib/component/Header.svelte'
  import Section from '$lib/component/Section.svelte'
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
      class="absolute right-0 -top-28 h-60 object-contain"
      src={moonRight}
      alt="moon in right side" />

    <Section>
      <header
        class="col-start-1 col-end-13  mt-8 flex flex-col items-center text-center  md:my-20">
        <h1 class="head ">Contact Us</h1>
        <Bar />
      </header>

      <div class="col-start-1 col-end-13 flex border md:flex-row">
        <form>
          <input type="text" name="subject" id="subject" />
        </form>
      </div>
    </Section>
  </div>
</main>
